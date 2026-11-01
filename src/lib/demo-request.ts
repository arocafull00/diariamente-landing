import { z } from "astro/zod";
import type { Audience } from "./audiences/types";

export const demoRequestSchema = ({ form }: Audience) =>
  z.object({
    name: z.string().trim().min(2, "Indica tu nombre").max(120),
    clinic: z.string().trim().min(2, form.clinic.error).max(160),
    email: z.string().trim().email("Revisa el email").max(200),
    phone: z.string().trim().max(40).optional().default(""),
    teamSize: z.enum(form.choice.options as [string, ...string[]], { message: form.choice.error }),
    message: z.string().trim().max(2000).optional().default(""),
    consent: z.literal("on", { message: "Necesitamos tu permiso para contactarte" }),
  });

export type DemoRequest = z.infer<ReturnType<typeof demoRequestSchema>>;
