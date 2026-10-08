import { site } from "@/site.config";
import type { Dictionary } from "@/content";

export function Proof({ t }: { t: Dictionary["proof"] }) {
  return (
    <section aria-label={t.label} className="border-y border-rule bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-sm text-slate">{t.label}</p>
        <ul className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4">
          {t.items.map((it) => (
            <li key={it.text}>
              <span className="block text-xl font-semibold tracking-[-0.02em]">{it.value}</span>
              <span className="text-sm text-slate">{it.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Steps({ t }: { t: Dictionary["steps"] }) {
  return (
    <section id="product" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h2 className="text-[2.1rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[2.7rem]">{t.title}</h2>
      <p className="mt-4 max-w-[56ch] text-lg text-slate">{t.intro}</p>
      {/* A real sequence, so it is numbered and connected. */}
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {t.items.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-teal font-semibold">
                {i + 1}
              </span>
              {i < t.items.length - 1 && <span aria-hidden="true" className="hidden h-0.5 flex-1 bg-teal/40 md:block" />}
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em]">{s.title}</h3>
            <p className="mt-3 max-w-[40ch] leading-relaxed text-slate">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Security({ t }: { t: Dictionary["security"] }) {
  return (
    <section id="privacy" className="border-t border-rule bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="max-w-[16ch] text-[2.1rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[2.7rem]">
            {t.title}
          </h2>
          <p className="mt-4 max-w-[44ch] text-lg text-slate">{t.intro}</p>
        </div>
        <dl className="grid gap-x-10 sm:grid-cols-2">
          {t.items.map((it) => (
            <div key={it.title} className="border-t-2 border-teal py-6">
              <dt className="text-lg font-semibold">{it.title}</dt>
              <dd className="mt-2 leading-relaxed text-slate">{it.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Story({ t }: { t: Dictionary["story"] }) {
  return (
    <section id="customers" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-sm text-paper/60">{t.label}</p>
        <h2 className="mt-3 max-w-[30ch] text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-[1.9rem]">
          {t.title}
        </h2>
        <p className="mt-10 max-w-[34ch] font-serif text-[1.9rem] italic leading-[1.3] sm:text-[2.4rem]">{t.quote}</p>
        <p className="mt-6 text-paper/70">{t.person}</p>
        <ul className="mt-12 grid gap-6 border-t border-teal/50 pt-8 sm:grid-cols-3">
          {t.facts.map((f) => (
            <li key={f} className="text-lg">
              {f}
            </li>
          ))}
        </ul>
        <a
          href={site.demoUrl}
          className="mt-12 inline-block rounded-full bg-mark px-6 py-3.5 font-medium text-ink transition-opacity hover:opacity-90"
        >
          {t.more}
        </a>
      </div>
    </section>
  );
}

export function Integrations({ t }: { t: Dictionary["integrations"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">
        <div>
          <h2 className="text-[2.1rem] font-semibold leading-tight tracking-[-0.03em]">{t.title}</h2>
          <p className="mt-4 max-w-[44ch] text-lg text-slate">{t.text}</p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {t.tools.map((tool) => (
            <li key={tool} className="rounded-full border border-rule bg-white px-5 py-2.5 font-medium">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FinalCta({ t }: { t: Dictionary["cta"] }) {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <h2 className="max-w-[20ch] text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[3.4rem]">
          {t.title}
        </h2>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-slate">{t.text}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={site.demoUrl} className="rounded-full bg-ink px-6 py-3.5 font-medium text-paper hover:bg-ink/85">
            {t.primary}
          </a>
          <a
            href={site.appUrl}
            className="rounded-full border border-ink/25 px-6 py-3.5 font-medium transition-colors hover:border-ink"
          >
            {t.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
