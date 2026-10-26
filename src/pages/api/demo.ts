import type { APIRoute } from "astro";
import { DEMO_FROM_EMAIL, DEMO_TO_EMAIL, RESEND_API_KEY } from "astro:env/server";
import { Resend } from "resend";
import { demoRequestSchema, type DemoRequest } from "../../lib/demo-request";

export const prerender = false;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);

const buildEmail = (data: DemoRequest) => {
  const rows: [string, string][] = [
    ["Nombre", data.name],
    ["Clínica", data.clinic],
    ["Email", data.email],
    ["Teléfono", data.phone || "No indicado"],
    ["Psicólogos", data.teamSize],
    ["Mensaje", data.message || "Sin mensaje"],
  ];

  const html = `<h2>Nueva solicitud de demo</h2><table cellpadding="6">${rows
    .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  return { html, text };
};

const respond = (request: Request, status: number, body: { ok: boolean; error?: string; fields?: Record<string, string> }) => {
  const wantsJson = request.headers.get("accept")?.includes("application/json");

  if (wantsJson) return Response.json(body, { status });

  const target = body.ok ? "/gracias" : "/#demo";
  return new Response(null, { status: 303, headers: { Location: target } });
};

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();

  if (form.get("website")) return respond(request, 200, { ok: true });

  const parsed = demoRequestSchema.safeParse(Object.fromEntries(form));

  if (!parsed.success) {
    const fields = Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message]));
    return respond(request, 400, { ok: false, error: "Revisa los campos marcados.", fields });
  }

  if (!RESEND_API_KEY || !DEMO_TO_EMAIL) {
    console.error("Demo request: faltan RESEND_API_KEY o DEMO_TO_EMAIL");
    return respond(request, 500, { ok: false, error: "No hemos podido enviar la solicitud. Inténtalo de nuevo más tarde." });
  }

  const { html, text } = buildEmail(parsed.data);
  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: DEMO_FROM_EMAIL,
    to: DEMO_TO_EMAIL,
    replyTo: parsed.data.email,
    subject: `Demo DiariaMente · ${parsed.data.clinic}`,
    html,
    text,
  });

  if (error) {
    console.error("Demo request: Resend error", error.name);
    return respond(request, 502, { ok: false, error: "No hemos podido enviar la solicitud. Inténtalo de nuevo más tarde." });
  }

  return respond(request, 200, { ok: true });
};
