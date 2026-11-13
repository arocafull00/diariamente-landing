import { inject, type BeforeSendEvent } from "@vercel/analytics";

const STORAGE_KEY = "diariamente-acquisition-v1";
const VISIT_TIMEOUT = 30 * 60 * 1000;
const CHANNELS = ["linkedin", "instagram", "facebook", "web"] as const;
type Channel = (typeof CHANNELS)[number];
type Visit = { channel: Channel; lastSeen: number };
let visit: Visit | null = null;

function socialChannel(value: string): Channel | null {
  const source = value.toLowerCase().replace(/^www\./, "");
  if (["linkedin", "li", "lnkd.in"].includes(source) || /(^|\.)linkedin\.com$/.test(source)) return "linkedin";
  if (["instagram", "ig", "insta"].includes(source) || /(^|\.)instagram\.com$/.test(source)) return "instagram";
  if (["facebook", "fb", "fb.com", "fb.me"].includes(source) || /(^|\.)facebook\.com$/.test(source)) return "facebook";
  return null;
}

try {
  const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "null");
  if (saved && CHANNELS.includes(saved.channel) && Number.isFinite(saved.lastSeen) && Date.now() - saved.lastSeen < VISIT_TIMEOUT) visit = saved;
} catch {}

const source = new URL(location.href).searchParams.get("utm_source");
let referredChannel: Channel | null = null;
try {
  referredChannel = socialChannel(new URL(document.referrer).hostname);
} catch {}
const channel = source ? socialChannel(source) ?? "web" : referredChannel ?? visit?.channel ?? "web";

for (const link of document.querySelectorAll<HTMLAnchorElement>("a[href]")) {
  const url = new URL(link.href);
  if (!["diariamente.es", "info.diariamente.es", "clinicas.diariamente.es", "pacientes.diariamente.es"].includes(url.hostname) || url.origin === location.origin) continue;
  if (!url.searchParams.has("utm_source")) url.searchParams.set("utm_source", channel);
  if (!url.searchParams.has("utm_landing")) url.searchParams.set("utm_landing", location.hostname);
  link.href = url.href;
}

function beforeSend(event: BeforeSendEvent): BeforeSendEvent {
  if (event.type !== "pageview") return event;
  visit = { channel, lastSeen: Date.now() };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(visit));
  } catch {}
  const url = new URL(event.url);
  url.pathname = `/__acquisition/web/${channel}${url.pathname}`;
  return { ...event, url: url.href };
}

inject({ beforeSend, framework: "astro", mode: import.meta.env.PROD ? "production" : "development" });
