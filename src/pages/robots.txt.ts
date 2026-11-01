import type { APIRoute } from "astro";
import { AUDIENCE } from "../lib/audiences";

export const prerender = true;

const bots = ["*", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Google-Extended"];

export const GET: APIRoute = () =>
  new Response(`${bots.map((bot) => `User-agent: ${bot}\nAllow: /\n`).join("\n")}\nSitemap: ${AUDIENCE.url}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
