export const AUDIENCE_KEYS = ["psicologos", "clinicas", "pacientes"] as const;

export type AudienceKey = (typeof AUDIENCE_KEYS)[number];

export type Cta = { label: string; href?: string };

export type Link = { label: string; href: string };

type Item = { title: string; text: string };

type Note = { icon: "gift" | "clock"; text: string };

export interface Audience {
  key: AudienceKey;
  url: string;
  name: string;
  title: string;
  description: string;
  ogAlt: string;
  offer: { price: string; description: string };
  nav: Link[];
  navCta: Cta;
  hero: { eyebrow: string; title: string; lead: string; cta: Cta; secondary: Link };
  intro: { title: string; text: string; link: string };
  features: {
    title: string;
    rows: [Item, Item];
    notes: Item & { questions: [string, string, string, string, string] };
  };
  journey: { title: string; lead: string; steps: [Item, Item, Item, Item] };
  rollout: { title: string; steps: [Item, Item, Item]; cta: Cta };
  pricing: {
    title: string;
    main: {
      name: string;
      price: string;
      count?: string;
      period?: string;
      badges: [string, string];
      features: string[];
      note: Note;
      cta: Cta;
    };
    secondary: { name: string; price: string; text: string; features: string[]; note: Note; cta: Cta };
  };
  faq: { q: string; a: string }[];
  form: {
    title: string;
    lead: string;
    name: { label: string; placeholder: string };
    clinic: { label: string; placeholder: string; error: string };
    email: { label: string; placeholder: string };
    choice: { label: string; options: readonly string[]; error: string };
    message: { label: string; placeholder: string };
    consent: string;
    submit: string;
    success: string;
    subject: string;
  };
  footer: { tagline: string; formLink: string };
}
