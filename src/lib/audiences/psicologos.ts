import { AUDIENCE_URLS, SITE } from "../site";
import type { Audience } from "./types";

export const psicologos: Audience = {
  key: "psicologos",
  url: AUDIENCE_URLS.psicologos,
  name: "Para psicólogos",
  title: "Diariamente · App de autorregistros TCC para psicólogos",
  description: `App para psicólogos: tus pacientes hacen autorregistros TCC y tú los revisas antes de cada sesión. ${SITE.pricePerPsychologist} €/mes, con el primer mes gratis.`,
  ogAlt: "Diariamente, autorregistros TCC entre sesiones para psicólogos y clínicas",
  offer: { price: SITE.priceAmount, description: "Por psicólogo al mes, con el primer mes gratis. Gratis para pacientes." },
  nav: [
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#psicologo", label: "Para tu clínica" },
    { href: "#precios", label: "Precios" },
    { href: "#faq", label: "Preguntas" },
  ],
  navCta: { label: "Empieza gratis" },
  hero: {
    eyebrow: "App de autorregistros TCC para psicólogos",
    title: "Llega a cada sesión sabiendo cómo se ha *sentido*",
    lead: "Tus pacientes siguen implicados entre sesiones y tú llegas sabiendo qué reforzar y qué trabajar.",
    cta: { label: "Empieza tu mes gratis" },
    secondary: { label: "Presupuesto para tu clínica", href: "#clinicas" },
  },
  intro: {
    title: "La semana de tu paciente, más allá de lo que *recuerda* en consulta",
    text: "Con Diariamente, tu paciente hace su autorregistro cuando ocurre y mantiene el hilo de la terapia entre consultas. Antes de la sesión, revisas todo lo que ha pasado desde la última y decidís juntos qué reforzar y qué mejorar.",
    link: "Ver cómo es un registro",
  },
  features: {
    title: "Seguimiento entre sesiones: prepara la consulta con lo que ya *ha pasado*",
    rows: [
      {
        title: "Revisa lo que necesita atención",
        text: "Consulta las emociones, el contexto y la reflexión de cada paciente. Distingue los registros nuevos y añade tus propias notas privadas.",
      },
      {
        title: "Desde vuestra última sesión",
        text: "Un resumen reúne los registros nuevos, las emociones más frecuentes, los contextos que se repiten y los picos de intensidad. Puedes abrir cada registro para profundizar.",
      },
      {
        title: "En su móvil, sin pasar por una tienda",
        text: "Tu paciente puede instalar Diariamente desde el navegador y activar el recordatorio diario. Su acceso es gratuito.",
      },
      {
        title: "El paciente controla la vinculación",
        text: "Cada profesional accede a los registros de sus pacientes vinculados. El paciente puede desvincularse y dejar de compartirlos cuando quiera.",
      },
    ],
    privacy: [
      "Solo el psicólogo vinculado ve los registros",
      "Sin datos clínicos en las notificaciones",
      "El paciente puede desvincularse cuando quiera",
      "Borrado completo cuando el paciente lo pide",
    ],
  },
  journey: {
    title: "El registro emocional de tu *paciente*",
    lead: "Tu paciente puede guardar una emoción al momento o continuar con un registro de pensamientos para contar qué ha pasado.",
    steps: [
      { title: "Cómo se siente", text: "Elige una emoción y su intensidad." },
      { title: "En qué contexto", text: "Indica dónde está, con quién y qué nota en su cuerpo." },
      { title: "Qué ha ocurrido", text: "Puede profundizar en la situación, sus pensamientos y su conducta." },
      { title: "Cuándo ha pasado", text: "Confirma la fecha y guarda el registro." },
    ],
  },
  rollout: {
    title: "Cómo *empezar*",
    steps: [
      { title: "Crea tu cuenta", text: "Regístrate desde el navegador o descarga la app de Google Play. El primer mes es gratis." },
      { title: "Vincula a tus pacientes", text: "Comparte una invitación por código o enlace. Para ellos, Diariamente es gratis." },
      { title: "Aprovecha cada sesión", text: "Revisa lo que ha pasado desde la última consulta y decide qué reforzar y qué trabajar." },
    ],
    cta: { label: "Empieza tu mes gratis" },
  },
  pricing: {
    title: "Un precio por *psicólogo*",
    main: {
      name: "Por psicólogo",
      price: `${SITE.pricePerPsychologist} €`,
      count: SITE.priceAmount,
      period: "/ mes",
      badges: ["Primer mes gratis", "Gratis para todos tus pacientes"],
      features: [
        "Pacientes ilimitados",
        "Emociones, contexto, sensaciones y reflexión TCC",
        "Avisos de registros sin revisar",
        "Historial y resumen desde la última sesión",
        "Notas privadas del psicólogo",
        "Invitaciones por código o enlace",
        "Recordatorios para tus pacientes",
      ],
      note: { icon: "gift", text: "Invita a otro psicólogo y, cuando se una, os regalamos un mes gratis a los dos." },
      cta: { label: "Empieza tu mes gratis" },
    },
    secondary: {
      name: "Clínicas",
      price: "A medida",
      text: "Cuéntanos cuántos psicólogos sois y acordamos una propuesta para tu equipo.",
      features: [
        "Todo lo del plan por psicólogo",
        "Precio por volumen para tu equipo",
        "Acompañamiento en la puesta en marcha",
        "Facturación única para la clínica",
      ],
      note: { icon: "clock", text: "Próximamente: panel de clínica para ver la actividad de todo tu equipo en un solo lugar." },
      cta: { label: "Quiero el plan para mi clínica", href: "#clinicas" },
    },
  },
  faq: [
    {
      q: "¿Diariamente sustituye a la terapia?",
      a: "No. Es una herramienta de seguimiento entre sesiones. No diagnostica, no da recomendaciones terapéuticas automáticas y no es un servicio de urgencias. El criterio clínico es siempre de tu equipo.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: `${SITE.pricePerPsychologist} € al mes por psicólogo, con pacientes ilimitados y acceso gratuito para pacientes. El primer mes es gratis. Para equipos, puedes pedir una propuesta a medida en el formulario para clínicas.`,
    },
    {
      q: "¿Cómo empiezo?",
      a: "Crea tu cuenta desde el navegador en diariamente.es o descarga la app de Google Play. El primer mes es gratis y puedes invitar a tus pacientes desde el primer día.",
    },
    {
      q: "¿Hay alguna ventaja por invitar a otros psicólogos?",
      a: "Sí. Si invitas a otro psicólogo y empieza a usar Diariamente, os regalamos un mes gratis a cada uno.",
    },
    {
      q: "¿Sirve como autorregistro o registro de pensamientos de TCC?",
      a: "Sí. Además de la emoción y su intensidad, el paciente puede describir la situación, sus pensamientos y su conducta, el contexto y las sensaciones corporales. Es la estructura del autorregistro habitual en terapia cognitivo-conductual, sin hojas en papel.",
    },
    {
      q: "¿Mis pacientes tienen que descargar algo?",
      a: "No hace falta pasar por ninguna tienda de apps. Diariamente funciona en el navegador y se puede instalar en el móvil, la tablet o el ordenador como una app más.",
    },
    {
      q: "¿Quién puede ver los registros de un paciente?",
      a: "El paciente y su psicólogo vinculado. El paciente puede desvincularse cuando quiera y el profesional deja de tener acceso. Las notificaciones no incluyen el contenido de los registros.",
    },
    {
      q: "¿Se puede usar con varios psicólogos en la misma clínica?",
      a: "Sí. Cada psicólogo tiene su cuenta y gestiona a sus propios pacientes. Estamos preparando un panel de clínica para ver la actividad de todo el equipo desde un mismo sitio.",
    },
    {
      q: "¿Qué pasa con los datos si un paciente deja la terapia?",
      a: "El paciente puede desvincularse cuando quiera y solicitar la eliminación de su cuenta. En ese caso se borran sus datos de forma coordinada.",
    },
  ],
  form: {
    title: "Lleva Diariamente a toda tu *clínica*",
    lead: "Con el plan para clínicas, todo tu equipo llega a cada sesión sabiendo qué ha pasado desde la última. Precio por volumen, acompañamiento en la puesta en marcha y facturación única. Cuéntanos cuántos sois y te enviamos una propuesta.",
    name: { label: "Nombre", placeholder: "Ana López" },
    clinic: { label: "Clínica o consulta", placeholder: "Centro Psicológico Alba", error: "Indica el nombre de tu clínica o consulta" },
    email: { label: "Email", placeholder: "ana@clinica.es" },
    choice: { label: "¿Cuántos psicólogos sois?", options: ["1 psicólogo", "2 a 5", "6 a 15", "Más de 15"], error: "Elige el tamaño del equipo" },
    message: { label: "¿Algo que debamos saber?", placeholder: "Cómo hacéis ahora el seguimiento, qué os gustaría mejorar..." },
    consent: "Acepto que Diariamente use estos datos para contactarme sobre el plan para clínicas, según la",
    submit: "Quiero la propuesta para mi clínica",
    success: "Te escribiremos muy pronto con una propuesta para tu equipo.",
    subject: "Plan clínicas Diariamente",
  },
  footer: {
    tagline: "App de autorregistros y seguimiento TCC entre sesiones para psicólogos y clínicas.",
    formLink: "Plan para clínicas",
  },
};
