import type { APIRoute } from "astro";
import { AUDIENCE, AUDIENCES } from "../lib/audiences";
import { SITE } from "../lib/site";

export const prerender = true;

const { url, nav } = AUDIENCE;
const others = Object.values(AUDIENCES).filter((audience) => audience.key !== AUDIENCE.key);

const body = `# Diariamente · ${AUDIENCE.name.toLowerCase()}

> ${AUDIENCE.description}

Diariamente es una aplicación web instalable de seguimiento entre sesiones para terapia psicológica. El paciente registra cómo se siente y puede añadir intensidad, contexto, sensaciones corporales y una reflexión sobre la situación, sus pensamientos y su conducta.

El psicólogo vinculado puede revisar los registros, añadir notas privadas y consultar un resumen desde la última sesión: emociones frecuentes, contextos repetidos y picos de intensidad. El paciente puede desvincularse cuando quiera. Las notificaciones no muestran el contenido de los registros.

Su objetivo es mejorar la adherencia del paciente a la terapia entre sesiones y que cada consulta se aproveche más: el psicólogo llega sabiendo qué ha pasado desde la última sesión, qué reforzar y qué trabajar.

No sustituye la terapia, no diagnostica y no es un servicio de urgencias.

## Precio

- ${SITE.pricePerPsychologist} € al mes por psicólogo, con pacientes ilimitados.
- El primer mes es gratis.
- Si un psicólogo invita a otro psicólogo y este se une, los dos reciben un mes gratis.
- Gratis para los pacientes.
- Precio a medida para clínicas con varios psicólogos (contacto mediante el formulario para clínicas).

## Páginas clave

- [Inicio](${url}/): ${AUDIENCE.title}.
${nav.map((link) => `- [${link.label}](${url}/${link.href})`).join("\n")}
- [${AUDIENCE.footer.formLink}](${url}/#clinicas)
- [Crear cuenta](${SITE.signUpUrl})
- [Aplicación](${SITE.appUrl}): acceso para pacientes y psicólogos.
- [Google Play](${SITE.playStoreUrl}): app para Android.
- [Privacidad](${url}/privacidad)
- [Privacidad de la aplicación](${SITE.appUrl}/privacidad)
- [Sitemap](${url}/sitemap.xml)

## Otras versiones de esta web

${others.map((audience) => `- [Diariamente ${audience.name.toLowerCase()}](${audience.url}/): ${audience.description}`).join("\n")}

## Disponibilidad

El panel conjunto de clínica se presenta como una función próxima, no como disponible. Los ejemplos de la landing contienen datos ficticios.
`;

export const GET: APIRoute = () => new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
