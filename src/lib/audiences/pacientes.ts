import { AUDIENCE_URLS, SITE } from "../site";
import type { Audience } from "./types";

export const pacientes: Audience = {
  key: "pacientes",
  url: AUDIENCE_URLS.pacientes,
  name: "Para pacientes",
  title: "Diariamente · Tu diario de emociones, también para tu terapia",
  description:
    "Registra cómo te sientes cuando ocurre, con su contexto y tus pensamientos, y compártelo con tu psicólogo si vas a terapia. Gratis para pacientes.",
  ogAlt: "Diariamente, diario de emociones para tu día a día y tu terapia",
  offer: { price: "0", description: "Gratis para pacientes." },
  nav: [
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#psicologo", label: "Con tu psicólogo" },
    { href: "#precios", label: "Precio" },
    { href: "#faq", label: "Preguntas" },
  ],
  navCta: { label: "Empieza gratis" },
  hero: {
    eyebrow: "Diario de emociones para tu día a día y tu terapia",
    title: "Entiende cómo te *sientes*, día a día",
    lead: "Registra tus emociones cuando ocurren y, si vas a terapia, llega a cada sesión con todo lo que ha pasado desde la última.",
    cta: { label: "Empieza gratis" },
    secondary: { label: "¿Tu psicólogo aún no lo usa?", href: "#clinicas" },
  },
  intro: {
    title: "Tu semana, más allá de lo que *recuerdas* en consulta",
    text: "Con Diariamente apuntas cómo te sientes en el momento en que pasa, en vez de intentar recordarlo días después. Si vas al psicólogo, compartes tus registros con él y aprovecháis mejor cada sesión.",
    link: "Ver cómo es un registro",
  },
  features: {
    title: "Un espacio para ti que también ayuda a tu *terapia*",
    rows: [
      {
        title: "Todo lo que has sentido, en un sitio",
        text: "Vuelve a tus registros cuando quieras: la emoción, su intensidad, dónde estabas y qué pensaste en cada momento.",
      },
      {
        title: "Llega a la sesión con todo",
        text: "Tu psicólogo ve un resumen desde vuestra última sesión: tus registros nuevos, las emociones más frecuentes, los contextos que se repiten y los picos de intensidad.",
      },
      {
        title: "En tu móvil, sin pasar por una tienda",
        text: "Instala Diariamente desde el navegador y activa un recordatorio diario para no olvidarte. Es gratis.",
      },
      {
        title: "Tú decides quién lo ve",
        text: "Solo tu psicólogo vinculado puede ver tus registros. Puedes desvincularte y dejar de compartirlos cuando quieras.",
      },
    ],
    privacy: [
      "Solo tu psicólogo vinculado ve tus registros",
      "Las notificaciones no muestran lo que escribes",
      "Puedes desvincularte cuando quieras",
      "Borrado completo de tu cuenta si lo pides",
    ],
  },
  journey: {
    title: "Así es tu registro *emocional*",
    lead: "Guarda una emoción al momento o, si te apetece, continúa con un registro de pensamientos para contar qué ha pasado.",
    steps: [
      { title: "Cómo te sientes", text: "Elige una emoción y su intensidad." },
      { title: "En qué contexto", text: "Indica dónde estás, con quién y qué notas en tu cuerpo." },
      { title: "Qué ha ocurrido", text: "Si quieres, profundiza en la situación, tus pensamientos y lo que hiciste." },
      { title: "Cuándo ha pasado", text: "Confirma la fecha y guarda el registro." },
    ],
  },
  rollout: {
    title: "Cómo *empezar*",
    steps: [
      { title: "Crea tu cuenta", text: "Desde el navegador o con la app de Google Play. Para pacientes es gratis." },
      { title: "Vincúlate con tu psicólogo", text: "Si tu psicólogo usa Diariamente, te dará un código o un enlace de invitación." },
      { title: "Registra tu día", text: "Apunta cómo te sientes cuando ocurra y llega a cada sesión con todo lo que ha pasado." },
    ],
    cta: { label: "Empieza gratis" },
  },
  pricing: {
    title: "Gratis para *ti*",
    main: {
      name: "Para pacientes",
      price: "Gratis",
      badges: ["Sin pasar por una tienda de apps", "Móvil, tablet y ordenador"],
      features: [
        "Registro de emociones e intensidad",
        "Contexto y sensaciones corporales",
        "Registro de pensamientos de TCC",
        "Historial de tus registros",
        "Recordatorio diario",
        "Vinculación con tu psicólogo",
      ],
      note: { icon: "gift", text: "Si tu psicólogo aún no usa Diariamente, puedes recomendárselo desde esta página." },
      cta: { label: "Empieza gratis" },
    },
    secondary: {
      name: "Para tu psicólogo",
      price: `${SITE.pricePerPsychologist} €/mes`,
      text: "Tu psicólogo paga una suscripción para revisar los registros de sus pacientes, con el primer mes gratis.",
      features: ["Pacientes ilimitados", "Resumen desde la última sesión", "Notas privadas del psicólogo"],
      note: { icon: "clock", text: "Tú no pagas nada por estar vinculado a tu psicólogo." },
      cta: { label: "Recomiéndaselo a tu psicólogo", href: "#clinicas" },
    },
  },
  faq: [
    {
      q: "¿Diariamente sustituye a la terapia?",
      a: "No. Te ayuda a registrar cómo te sientes y a compartirlo con tu psicólogo, pero no diagnostica ni es un servicio de urgencias. Si estás en crisis, llama al 024 o al 112.",
    },
    {
      q: "¿Cuánto me cuesta?",
      a: "Nada. Diariamente es gratis para los pacientes. Quien paga una suscripción es el psicólogo que revisa los registros.",
    },
    {
      q: "¿Puedo usarlo aunque no vaya al psicólogo?",
      a: "Sí. Puedes registrar tus emociones por tu cuenta y vincularte con un psicólogo más adelante, si quieres.",
    },
    {
      q: "¿Quién puede ver mis registros?",
      a: "Solo tú y el psicólogo con el que te vincules. Las notificaciones no incluyen el contenido de lo que escribes.",
    },
    {
      q: "¿Cómo me vinculo con mi psicólogo?",
      a: "Tu psicólogo te da un código o un enlace de invitación desde su cuenta. Al usarlo, empieza a ver los registros que haces a partir de ese momento.",
    },
    {
      q: "¿Puedo dejar de compartir mis registros?",
      a: "Sí. Puedes desvincularte cuando quieras y tu psicólogo deja de tener acceso. También puedes pedir que se borre tu cuenta y tus datos.",
    },
    {
      q: "¿Qué es un registro de pensamientos?",
      a: "Es el autorregistro que se usa en terapia cognitivo-conductual: además de la emoción, describes la situación, lo que pensaste y lo que hiciste. Te ayuda a ver patrones y a trabajarlos en sesión.",
    },
    {
      q: "¿Tengo que descargar algo?",
      a: "No hace falta pasar por ninguna tienda de apps. Diariamente funciona en el navegador y se instala en el móvil, la tablet o el ordenador como una app más.",
    },
    {
      q: "¿Y si mi psicólogo no usa Diariamente?",
      a: "Puedes recomendárselo con el formulario de esta página. Le escribiremos para presentarle Diariamente.",
    },
  ],
  form: {
    title: "¿Tu psicólogo aún no usa *Diariamente*?",
    lead: "Cuéntanos quién es y le escribiremos para presentárselo. Le diremos que un paciente nos ha recomendado, sin darle tu nombre salvo que nos lo pidas.",
    name: { label: "Tu nombre", placeholder: "Laura García" },
    clinic: { label: "Tu psicólogo o centro", placeholder: "Centro Psicológico Alba", error: "Indica el nombre de tu psicólogo o centro" },
    email: { label: "Tu email", placeholder: "laura@email.com" },
    choice: {
      label: "¿Cómo nos has conocido?",
      options: ["Redes sociales", "Buscador", "Me lo han recomendado", "Otro"],
      error: "Elige una opción",
    },
    message: { label: "¿Algo que debamos saber?", placeholder: "Ciudad, web del centro, cómo prefieres que le contactemos..." },
    consent: "Doy mi consentimiento explícito para que Diariamente use estos datos para gestionar mi recomendación, según la",
    submit: "Recomendar Diariamente",
    success: "Gracias por recomendarnos. Contactaremos con tu psicólogo o centro muy pronto.",
    subject: "Recomendación de paciente",
  },
  footer: {
    tagline: "Diario de emociones y autorregistros para tu día a día y tu terapia.",
    formLink: "Recomiéndalo a tu psicólogo",
  },
};
