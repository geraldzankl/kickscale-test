import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { Dictionary, Locale } from "@/content";

// Placeholder legal page. Replace the paragraph with the reviewed legal text.
export function LegalPage({ t, locale, title }: { t: Dictionary; locale: Locale; title: string }) {
  return (
    <>
      <Header t={t} locale={locale} />
      <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <h1 className="text-[2.4rem] font-semibold tracking-[-0.03em]">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate">{t.legal.placeholder}</p>
        <Link href={`/${locale}/`} className="mt-10 inline-block font-medium underline underline-offset-4">
          {t.legal.back}
        </Link>
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}
