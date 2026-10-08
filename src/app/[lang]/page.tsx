import { getDictionary, type Locale } from "@/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Roles } from "@/components/Roles";
import { Footer } from "@/components/Footer";
import { FinalCta, Integrations, Proof, Security, Steps, Story } from "@/components/Sections";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Locale;
  const t = getDictionary(lang);
  return (
    <>
      <Header t={t} locale={lang} />
      <main>
        <Hero t={t} />
        <Proof t={t.proof} />
        <Steps t={t.steps} />
        <Roles t={t.roles} />
        <Security t={t.security} />
        <Story t={t.story} />
        <Integrations t={t.integrations} />
        <FinalCta t={t.cta} />
      </main>
      <Footer t={t} locale={lang} />
    </>
  );
}
