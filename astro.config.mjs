import { defineConfig, envField } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://info.diariamente.es",
  adapter: vercel(),
  env: {
    schema: {
      AUDIENCE: envField.enum({
        context: "server",
        access: "public",
        values: ["psicologos", "clinicas", "pacientes"],
        default: "psicologos",
      }),
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
