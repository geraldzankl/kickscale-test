import type { Metadata } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource-variable/newsreader/wght-italic.css";
import "../globals.css";
import { getDictionary, locales, type Locale } from "@/content";
import { site } from "@/site.config";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${lang}/`,
      languages: { de: "/de/", en: "/en/", "x-default": "/de/" },
    },
    openGraph: { title: t.meta.title, description: t.meta.description, url: `/${lang}/`, siteName: "Kickscale", type: "website" },
    icons: { icon: "/favicon.svg" },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Locale;
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
