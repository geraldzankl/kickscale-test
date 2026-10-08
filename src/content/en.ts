import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Kickscale | AI revenue intelligence for European B2B sales teams",
    description:
      "Kickscale documents your sales conversations, keeps your CRM up to date automatically and shows where deals, reps and customer feedback need your attention. GDPR-compliant, hosted in Germany.",
  },
  nav: {
    product: "Product",
    roles: "For teams",
    security: "Privacy",
    customers: "Customers",
    demo: "Book a demo",
    login: "Log in",
  },
  hero: {
    title: "Every sales conversation lands in your CRM. Without typing.",
    lead:
      "Kickscale joins the meeting, picks up objections, decision makers, next steps and risks, and writes them straight into the right CRM fields. Your team runs the conversation, Kickscale handles the rest.",
    primary: "Book a demo",
    secondary: "Try it free",
    transcriptLabel: "Conversation, 14:32",
    crmLabel: "CRM, filled in automatically",
    lines: [
      { speaker: "Customer", text: "Honestly, the price is still our biggest concern right now.", mark: "the price" },
      { speaker: "Customer", text: "The final decision will be made by our CFO, Ms Berger.", mark: "our CFO, Ms Berger" },
      { speaker: "Sales", text: "I'll send you a proposal for 25 licences by Friday.", mark: "a proposal for 25 licences by Friday" },
      { speaker: "Customer", text: "We're also looking at a vendor from the US in parallel.", mark: "a vendor from the US" },
    ],
    fields: [
      { label: "Objection", value: "Price" },
      { label: "Decision maker", value: "CFO, K. Berger" },
      { label: "Next step", value: "Proposal by Friday" },
      { label: "Risk", value: "Competitor in evaluation" },
    ],
    synced: "Synced to HubSpot",
  },
  proof: {
    label: "Used by European B2B teams",
    items: [
      { value: "200+", text: "customers" },
      { value: "Millions", text: "of conversations analysed per year" },
      { value: "4.8 / 5", text: "rating on G2" },
      { value: "ISO 27001", text: "certified" },
    ],
  },
  steps: {
    title: "How Kickscale works",
    intro: "No new tool to maintain. Kickscale works in the background of the meetings you already have.",
    items: [
      {
        title: "Kickscale joins the meeting",
        text: "In Teams, Zoom or Google Meet. Consent emails go out to all participants automatically beforehand.",
      },
      {
        title: "The AI structures the conversation",
        text: "Objections, decision makers, budget, next steps and risks are detected and mapped to your CRM fields.",
      },
      {
        title: "CRM and follow-up are done",
        text: "The data is in the CRM and the follow-up email is waiting as a draft. Your team reviews and sends.",
      },
    ],
  },
  roles: {
    title: "The right insights for every role",
    intro: "Sales is teamwork. Kickscale gives every position exactly what it needs from your conversations.",
    items: [
      {
        tab: "Sales reps",
        headline: "More time in the conversation, less time in the CRM.",
        text: "Notes, CRM updates and follow-up emails happen automatically. Before the next call, you know in seconds what was discussed last time.",
        points: ["Automatic call summaries", "Personalised follow-up emails", "Searchable conversation archive"],
      },
      {
        tab: "Sales leaders",
        headline: "Coaching based on real conversations.",
        text: "Spot the patterns of your top performers and give everyone on the team concrete, traceable feedback instead of gut feeling.",
        points: ["Top performer success patterns", "Individual coaching recommendations", "Faster onboarding for new reps"],
      },
      {
        tab: "Leadership",
        headline: "Full transparency over your pipeline.",
        text: "See which deals are at risk and why. Forecasts rest on what customers actually said.",
        points: ["Deal risks at a glance", "More reliable forecasts", "One view of deals and accounts"],
      },
      {
        tab: "Customer success",
        headline: "Catch customer signals early.",
        text: "Kickscale collects buying reasons, objections, competitors and product feedback from sales and service conversations.",
        points: ["Churn risks surfaced early", "Expansion opportunities spotted", "Product feedback for the whole team"],
      },
    ],
  },
  security: {
    title: "Built for Europe. Your data stays your data.",
    intro: "Privacy is not an add-on for us. It is the foundation of the product.",
    items: [
      { title: "GDPR-compliant", text: "Processing under European law, with a signed data processing agreement." },
      { title: "Hosted in Germany", text: "All conversation data is stored on servers in Germany." },
      { title: "ISO 27001 certified", text: "Audited information security to an international standard." },
      { title: "Documented consent", text: "Consent emails go out automatically and every approval is recorded." },
    ],
  },
  story: {
    label: "Customer story",
    title: "How Lufthansa City Center turns long partner conversations into market intelligence",
    quote:
      "Partner conversations lasting two to three hours are documented automatically, stay searchable for good and feed market knowledge into product, sales and leadership.",
    person: "Lufthansa City Center",
    facts: ["10% more selling time", "Conversations searchable forever", "Insights for product, sales and leadership"],
    more: "Talk to us",
  },
  integrations: {
    title: "Fits into the stack you already use",
    text: "Kickscale connects to your CRM and meeting tools. No migration, no data exports.",
    tools: ["HubSpot", "Salesforce", "Microsoft Teams", "Zoom", "Google Meet"],
  },
  cta: {
    title: "Try Kickscale in your next few meetings.",
    text: "Or talk to us. In 30 minutes we'll show you how Kickscale documents your calls, enriches your CRM and surfaces risks in your pipeline.",
    primary: "Book a demo",
    secondary: "Start for free",
  },
  footer: {
    tagline: "AI revenue intelligence for European B2B sales teams. Made in Graz, Austria.",
    imprint: "Imprint",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
    contact: "Contact",
  },
  legal: {
    imprintTitle: "Imprint",
    privacyTitle: "Privacy policy",
    back: "Back to home",
    placeholder: "This content will be added before launch. Please insert the legally reviewed texts here.",
  },
};
