import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/site.config";
import type { Dictionary, Locale } from "@/content";

export function Footer({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <footer className="border-t border-rule bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-[40ch] text-sm text-slate">{t.footer.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate md:self-end">
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {t.footer.contact}
          </a>
          <a href={site.linkedin} className="hover:text-ink">
            LinkedIn
          </a>
          <Link href={`/${locale}/impressum/`} className="hover:text-ink">
            {t.footer.imprint}
          </Link>
          <Link href={`/${locale}/datenschutz/`} className="hover:text-ink">
            {t.footer.privacy}
          </Link>
          <span>
            © {new Date().getFullYear()} Kickscale. {t.footer.rights}
          </span>
        </nav>
      </div>
    </footer>
  );
}
