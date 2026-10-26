import { defineConfig, envField } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://info.diariamente.es",
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes("/gracias") })],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
      DEMO_TO_EMAIL: envField.string({ context: "server", access: "secret", optional: true }),
      DEMO_FROM_EMAIL: envField.string({
        context: "server",
        access: "secret",
        default: "Diariamente <onboarding@resend.dev>",
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
