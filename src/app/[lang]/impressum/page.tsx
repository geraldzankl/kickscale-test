import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/content";
import { LegalPage } from "@/components/LegalPage";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return { title: `${getDictionary(lang).legal.imprintTitle} | Kickscale`, robots: { index: false } };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Locale;
  const t = getDictionary(lang);
  return <LegalPage t={t} locale={lang} title={t.legal.imprintTitle} />;
}
