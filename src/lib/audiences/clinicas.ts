import { AUDIENCE_URLS, SITE } from "../site";
import { psicologos } from "./psicologos";
import type { Audience } from "./types";

export const clinicas: Audience = {
  key: "clinicas",
  url: AUDIENCE_URLS.clinicas,
  name: "Para clínicas",
  title: "Diariamente para clínicas · Seguimiento entre sesiones para todo tu equipo",
  description:
    "Autorregistros emocionales para clínicas de psicología: los pacientes registran entre sesiones y cada psicólogo de tu equipo llega preparado. Precio por volumen y puesta en marcha acompañada.",
  ogAlt: "Diariamente, seguimiento entre sesiones para clínicas de psicología",
  offer: { price: SITE.priceAmount, description: "Precio de referencia por psicólogo al mes. Propuesta a medida para clínicas. Gratis para pacientes." },
  nav: [
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#psicologo", label: "Para tu equipo" },
    { href: "#precios", label: "Precios" },
    { href: "#faq", label: "Preguntas" },
  ],
  navCta: { label: "Consigue tu precio reducido", href: "#clinicas" },
  hero: {
    eyebrow: "Seguimiento entre sesiones para clínicas de psicología",
    title: "Diferencia tu clínica. Eleva la experiencia *terapéutica*",
    lead: "Ofrece a tus pacientes un servicio premium de seguimiento entre sesiones y facilita que cada psicólogo prepare sus consultas con información relevante sobre su evolución.",
    cta: { label: "Consigue un precio reducido para tu clínica", href: "#clinicas" },
    secondary: { label: "Prueba con un psicólogo de manera gratuita", href: SITE.signUpUrl },
  },
  intro: {
    title: "La semana de cada paciente, más allá de lo que *recuerda* en consulta",
    text: "Con Diariamente, los pacientes de tu clínica registran cómo se sienten cuando ocurre y mantienen el hilo de la terapia entre consultas. Cada psicólogo de tu equipo revisa lo que ha pasado desde la última sesión y decide con el paciente qué reforzar y qué trabajar.",
    link: "Ver cómo es un registro",
  },
  features: {
    title: "Un mismo método de seguimiento para todo tu *equipo*",
    rows: [
      {
        title: "Cada psicólogo, con sus pacientes",
        text: "Cada profesional tiene su cuenta, revisa los registros de sus pacientes vinculados, distingue los nuevos y añade sus propias notas privadas.",
      },
      {
        title: "Desde la última sesión",
        text: "Antes de cada consulta, un resumen reúne los registros nuevos, las emociones más frecuentes, los contextos que se repiten y los picos de intensidad.",
      },
    ],
    notes: {
      title: "¿Qué puede anotar cada paciente diariamente?",
      text: "Todos los pacientes de la clínica siguen las mismas preguntas del autorregistro, así cada psicólogo llega a la sesión con la situación completa.",
      questions: psicologos.features.notes.questions,
    },
  },
  journey: {
    title: "El registro emocional de cada *paciente*",
    lead: psicologos.journey.lead.replace("Tu paciente", "El paciente"),
    steps: psicologos.journey.steps,
  },
  rollout: {
    title: "Cómo *empezar* en tu clínica",
    steps: [
      { title: "Cuéntanos cuántos sois", text: "Rellena el formulario y te enviamos una propuesta con precio por volumen para tu equipo." },
      { title: "Puesta en marcha acompañada", text: "Te ayudamos a dar de alta a tu equipo y a presentar Diariamente a vuestros pacientes." },
      { title: "Cada sesión, mejor aprovechada", text: "Tus psicólogos revisan lo que ha pasado desde la última consulta y deciden qué reforzar y qué trabajar." },
    ],
    cta: { label: "Consigue un precio reducido para tu clínica", href: "#clinicas" },
  },
  pricing: {
    title: "Un plan para toda tu *clínica*",
    main: {
      name: "Clínicas",
      price: "A medida",
      badges: ["Precio por volumen", "Gratis para todos los pacientes"],
      features: [
        "Todo lo del plan por psicólogo",
        "Pacientes ilimitados para cada psicólogo",
        "Precio por volumen para tu equipo",
        "Acompañamiento en la puesta en marcha",
        "Facturación única para la clínica",
      ],
      note: { icon: "gift", text: "Cuéntanos cuántos psicólogos sois y te enviamos una propuesta sin compromiso." },
      cta: { label: "Consigue un precio reducido para tu clínica", href: "#clinicas" },
    },
    secondary: {
      name: "Por psicólogo",
      price: `${SITE.pricePerPsychologist} €/mes`,
      text: "Si preferís empezar poco a poco, cada psicólogo puede darse de alta por su cuenta con el primer mes gratis.",
      features: ["Pacientes ilimitados", "Historial y resumen desde la última sesión", "Notas privadas del psicólogo", "Recordatorios para los pacientes"],
      note: psicologos.pricing.secondary.note,
      cta: { label: "Prueba con un psicólogo" },
    },
  },
  faq: [
    psicologos.faq[0],
    {
      q: "¿Cuánto cuesta para una clínica?",
      a: `Depende de cuántos psicólogos seáis: te enviamos una propuesta con precio por volumen y facturación única. Como referencia, el plan individual cuesta ${SITE.pricePerPsychologist} € al mes por psicólogo. Para los pacientes es gratis.`,
    },
    {
      q: "¿Cómo lo ponemos en marcha?",
      a: "Rellena el formulario y te escribimos con una propuesta. Después te acompañamos para dar de alta a tu equipo y presentar Diariamente a vuestros pacientes.",
    },
    {
      q: "¿Cada psicólogo ve solo a sus pacientes?",
      a: "Sí. Cada psicólogo tiene su cuenta y gestiona a sus propios pacientes vinculados. Nadie más del equipo ve sus registros.",
    },
    {
      q: "¿Hay un panel para ver la actividad de toda la clínica?",
      a: "Lo estamos preparando. Hoy cada psicólogo trabaja desde su cuenta; el panel de clínica permitirá ver la actividad de todo el equipo desde un mismo sitio.",
    },
    psicologos.faq[4],
    psicologos.faq[5],
    psicologos.faq[6],
    psicologos.faq[8],
  ],
  form: { ...psicologos.form, title: "Lleva Diariamente a toda tu *clínica*" },
  footer: {
    tagline: "Autorregistros y seguimiento entre sesiones para clínicas de psicología.",
    formLink: "Consigue tu precio reducido",
  },
};
