import type { Dictionary } from "./types";

export const de: Dictionary = {
  meta: {
    title: "Kickscale | KI Revenue Intelligence für europäische B2B Sales Teams",
    description:
      "Kickscale dokumentiert Ihre Verkaufsgespräche, pflegt das CRM automatisch und zeigt, wo Deals, Teams und Kundenfeedback Ihre Aufmerksamkeit brauchen. DSGVO-konform, gehostet in Deutschland.",
  },
  nav: {
    product: "Produkt",
    roles: "Für Teams",
    security: "Datenschutz",
    customers: "Kunden",
    demo: "Demo buchen",
    login: "Login",
  },
  hero: {
    title: "Jedes Verkaufsgespräch landet vollständig im CRM. Ohne Tippen.",
    lead:
      "Kickscale ist im Meeting dabei, erkennt Einwände, Entscheider, nächste Schritte und Risiken und schreibt sie direkt in die richtigen CRM-Felder. Ihr Team führt das Gespräch, Kickscale macht den Rest.",
    primary: "Demo buchen",
    secondary: "Kostenlos testen",
    transcriptLabel: "Gespräch, 14:32",
    crmLabel: "CRM, automatisch ausgefüllt",
    lines: [
      { speaker: "Kunde", text: "Ehrlich gesagt ist der Preis aktuell noch unser größtes Thema.", mark: "der Preis" },
      { speaker: "Kunde", text: "Die finale Entscheidung trifft am Ende unsere CFO, Frau Berger.", mark: "unsere CFO, Frau Berger" },
      { speaker: "Sales", text: "Dann schicke ich Ihnen bis Freitag ein Angebot für 25 Lizenzen.", mark: "bis Freitag ein Angebot" },
      { speaker: "Kunde", text: "Wir schauen uns parallel auch noch einen Anbieter aus den USA an.", mark: "einen Anbieter aus den USA" },
    ],
    fields: [
      { label: "Einwand", value: "Preis" },
      { label: "Entscheider", value: "CFO, K. Berger" },
      { label: "Nächster Schritt", value: "Angebot bis Freitag" },
      { label: "Risiko", value: "Wettbewerb im Vergleich" },
    ],
    synced: "Mit HubSpot synchronisiert",
  },
  proof: {
    label: "Im Einsatz bei europäischen B2B Teams",
    items: [
      { value: "200+", text: "Kunden" },
      { value: "Millionen", text: "analysierte Gespräche pro Jahr" },
      { value: "4,8 / 5", text: "Bewertung auf G2" },
      { value: "ISO 27001", text: "zertifiziert" },
    ],
  },
  steps: {
    title: "So funktioniert Kickscale",
    intro: "Kein neues Tool, das gepflegt werden will. Kickscale arbeitet im Hintergrund Ihrer bestehenden Meetings.",
    items: [
      {
        title: "Kickscale nimmt am Meeting teil",
        text: "In Teams, Zoom oder Google Meet. Vorab gehen automatisch Einwilligungs-E-Mails an alle Teilnehmenden.",
      },
      {
        title: "Die KI strukturiert das Gespräch",
        text: "Einwände, Entscheider, Budget, nächste Schritte und Risiken werden erkannt und nach Ihren CRM-Feldern sortiert.",
      },
      {
        title: "CRM und Follow-up sind fertig",
        text: "Die Daten stehen im CRM, die Follow-up-E-Mail liegt als Entwurf bereit. Ihr Team prüft nur noch und sendet.",
      },
    ],
  },
  roles: {
    title: "Die richtigen Insights für jede Rolle",
    intro: "Sales ist Teamarbeit. Kickscale liefert jeder Position genau das, was sie aus den Gesprächen braucht.",
    items: [
      {
        tab: "Sales Reps",
        headline: "Mehr Zeit im Gespräch, weniger Zeit im CRM.",
        text: "Notizen, CRM-Updates und Follow-up-Mails passieren automatisch. Vor dem nächsten Termin wissen Sie in Sekunden, was zuletzt besprochen wurde.",
        points: ["Automatische Gesprächszusammenfassung", "Personalisierte Follow-up-E-Mails", "Durchsuchbares Gesprächsarchiv"],
      },
      {
        tab: "Sales Leader",
        headline: "Coaching auf Basis echter Gespräche.",
        text: "Erkennen Sie die Muster Ihrer Top Performer und geben Sie jedem im Team konkrete, nachvollziehbare Impulse statt Bauchgefühl.",
        points: ["Erfolgsmuster der Top Performer", "Individuelle Coaching-Empfehlungen", "Schnelleres Onboarding neuer Reps"],
      },
      {
        tab: "Geschäftsführung",
        headline: "Volle Transparenz über die Pipeline.",
        text: "Sehen Sie, welche Deals gefährdet sind und warum. Forecasts stützen sich auf das, was Kunden tatsächlich gesagt haben.",
        points: ["Deal-Risiken auf einen Blick", "Verlässlichere Forecasts", "Gesamtsicht über Deals und Accounts"],
      },
      {
        tab: "Customer Success",
        headline: "Kundensignale früh erkennen.",
        text: "Kickscale bündelt Kaufgründe, Einwände, Wettbewerber und Produktfeedback aus Vertriebs- und Servicegesprächen.",
        points: ["Churn-Risiken früh sichtbar", "Expansion-Potenziale erkennen", "Produktfeedback für das ganze Team"],
      },
    ],
  },
  security: {
    title: "Gebaut für Europa. Ihre Daten bleiben Ihre Daten.",
    intro: "Datenschutz ist bei uns keine Zusatzfunktion, sondern Grundlage des Produkts.",
    items: [
      { title: "DSGVO-konform", text: "Verarbeitung nach europäischem Recht, mit unterzeichnetem Auftragsverarbeitungsvertrag." },
      { title: "Gehostet in Deutschland", text: "Alle Gesprächsdaten liegen auf Servern in Deutschland." },
      { title: "ISO 27001 zertifiziert", text: "Geprüfte Informationssicherheit nach internationalem Standard." },
      { title: "Rechtssichere Einwilligung", text: "Einwilligungs-E-Mails gehen automatisch raus, Zustimmungen werden dokumentiert." },
    ],
  },
  story: {
    label: "Kundengeschichte",
    title: "Wie Lufthansa City Center aus langen Partnergesprächen Marktwissen macht",
    quote:
      "Partnergespräche von zwei bis drei Stunden werden automatisch dokumentiert, bleiben dauerhaft durchsuchbar und fließen als Marktwissen in Produkt, Sales und Management.",
    person: "Lufthansa City Center",
    facts: ["10 % mehr Zeit für den Vertrieb", "Gespräche dauerhaft durchsuchbar", "Insights für Produkt, Sales und Management"],
    more: "Gespräch mit uns vereinbaren",
  },
  integrations: {
    title: "Passt in Ihren bestehenden Stack",
    text: "Kickscale verbindet sich mit Ihrem CRM und Ihren Meeting-Tools. Keine Umstellung, kein Datenexport.",
    tools: ["HubSpot", "Salesforce", "Microsoft Teams", "Zoom", "Google Meet"],
  },
  cta: {
    title: "Probieren Sie Kickscale in Ihren nächsten Meetings aus.",
    text: "Oder sprechen Sie mit uns. In 30 Minuten zeigen wir, wie Kickscale Ihre Gespräche dokumentiert, das CRM ergänzt und Risiken in der Pipeline sichtbar macht.",
    primary: "Demo buchen",
    secondary: "Kostenlos starten",
  },
  footer: {
    tagline: "KI Revenue Intelligence für europäische B2B Sales Teams. Aus Graz, Österreich.",
    imprint: "Impressum",
    privacy: "Datenschutzerklärung",
    rights: "Alle Rechte vorbehalten.",
    contact: "Kontakt",
  },
  legal: {
    imprintTitle: "Impressum",
    privacyTitle: "Datenschutzerklärung",
    back: "Zur Startseite",
    placeholder:
      "Dieser Inhalt wird vor dem Livegang ergänzt. Bitte die rechtlich geprüften Texte (Offenlegung nach § 25 MedienG, Angaben nach § 5 ECG) hier einfügen.",
  },
};
