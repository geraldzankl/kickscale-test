export type Locale = "de" | "en";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { product: string; roles: string; security: string; customers: string; demo: string; login: string };
  hero: {
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    transcriptLabel: string;
    crmLabel: string;
    lines: { speaker: string; text: string; mark: string }[];
    fields: { label: string; value: string }[];
    synced: string;
  };
  proof: { label: string; items: { value: string; text: string }[] };
  steps: { title: string; intro: string; items: { title: string; text: string }[] };
  roles: {
    title: string;
    intro: string;
    items: { tab: string; headline: string; text: string; points: string[] }[];
  };
  security: { title: string; intro: string; items: { title: string; text: string }[] };
  story: { label: string; title: string; quote: string; person: string; facts: string[]; more: string };
  integrations: { title: string; text: string; tools: string[] };
  cta: { title: string; text: string; primary: string; secondary: string };
  footer: { tagline: string; imprint: string; privacy: string; rights: string; contact: string };
  legal: {
    imprintTitle: string;
    privacyTitle: string;
    back: string;
    placeholder: string;
  };
};
