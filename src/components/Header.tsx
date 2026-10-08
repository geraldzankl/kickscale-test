import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/site.config";
import type { Dictionary, Locale } from "@/content";

export function Header({ t, locale }: { t: Dictionary; locale: Locale }) {
  const other: Locale = locale === "de" ? "en" : "de";
  const links = [
    { href: "#product", label: t.nav.product },
    { href: "#roles", label: t.nav.roles },
    { href: "#privacy", label: t.nav.security },
    { href: "#customers", label: t.nav.customers },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-5 sm:px-8">
        <Link href={`/${locale}/`} aria-label="Kickscale">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden flex-1 gap-7 text-[0.95rem] text-slate md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4 text-[0.95rem]">
          <Link
            href={`/${other}/`}
            hrefLang={other}
            className="text-slate hover:text-ink"
            aria-label={other === "en" ? "English version" : "Deutsche Version"}
          >
            {other.toUpperCase()}
          </Link>
          <a href={site.appUrl} className="hidden text-slate hover:text-ink sm:inline">
            {t.nav.login}
          </a>
          <a
            href={site.demoUrl}
            className="rounded-full bg-ink px-4 py-2 font-medium text-paper transition-colors hover:bg-ink/85"
          >
            {t.nav.demo}
          </a>
        </div>
      </div>
    </header>
  );
}
