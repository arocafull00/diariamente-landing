import { z } from "astro/zod";

export const TEAM_SIZES = ["1 psicólogo", "2 a 5", "6 a 15", "Más de 15"] as const;

export const demoRequestSchema = z.object({
  name: z.string().trim().min(2, "Indica tu nombre").max(120),
  clinic: z.string().trim().min(2, "Indica el nombre de tu clínica o consulta").max(160),
  email: z.string().trim().email("Revisa el email").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  teamSize: z.enum(TEAM_SIZES, { message: "Elige el tamaño del equipo" }),
  message: z.string().trim().max(2000).optional().default(""),
  consent: z.literal("on", { message: "Necesitamos tu permiso para contactarte" }),
});

export type DemoRequest = z.infer<typeof demoRequestSchema>;
