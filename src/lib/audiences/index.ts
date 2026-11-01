import { AUDIENCE as CURRENT } from "astro:env/server";
import { clinicas } from "./clinicas";
import { pacientes } from "./pacientes";
import { psicologos } from "./psicologos";
import type { Audience, AudienceKey } from "./types";

export * from "./types";

export const AUDIENCES: Record<AudienceKey, Audience> = { psicologos, clinicas, pacientes };

export const AUDIENCE = AUDIENCES[CURRENT];

export const emphasize = (text: string, className = "") =>
  text.replace(/\*(.+?)\*/g, `<em class="${className}">$1</em>`);
