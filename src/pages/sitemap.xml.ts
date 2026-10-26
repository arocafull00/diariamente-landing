import type { APIRoute } from "astro";
import { SITE } from "../lib/site";

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${SITE.url}/</loc></url><url><loc>${SITE.url}/privacidad</loc></url></urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
