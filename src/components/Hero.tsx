import { site } from "@/site.config";
import type { Dictionary } from "@/content";

function Marked({ text, mark, i }: { text: string; mark: string; i: number }) {
  const at = text.indexOf(mark);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="mark hero-mark" style={{ ["--i" as string]: i }}>
        {mark}
      </span>
      {text.slice(at + mark.length)}
    </>
  );
}

export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-20">
      <div>
        <h1 className="max-w-[14ch] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[3.6rem] lg:text-[4.1rem]">
          {h.title}
        </h1>
        <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-slate">{h.lead}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={site.demoUrl}
            className="rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-ink/85"
          >
            {h.primary}
          </a>
          <a
            href={site.appUrl}
            className="rounded-full border border-ink/25 px-6 py-3.5 font-medium transition-colors hover:border-ink"
          >
            {h.secondary}
          </a>
        </div>
      </div>

      {/* Product moment: spoken words on the left become CRM data on the right. */}
      <figure
        aria-label={`${h.transcriptLabel} / ${h.crmLabel}`}
        className="overflow-hidden rounded-2xl border border-rule bg-white shadow-[0_30px_60px_-30px_rgba(3,9,41,0.35)]"
      >
        <div className="border-b border-rule px-6 py-4 text-sm text-slate">{h.transcriptLabel}</div>
        <ol className="space-y-4 px-6 py-6">
          {h.lines.map((line, i) => (
            <li key={i} className="grid grid-cols-[4.75rem_1fr] gap-3">
              <span className="pt-1 text-[0.8rem] text-slate">{line.speaker}</span>
              <p className="font-serif text-[1.12rem] italic leading-snug">
                <Marked text={line.text} mark={line.mark} i={i} />
              </p>
            </li>
          ))}
        </ol>
        <div className="border-t border-rule bg-paper/60 px-6 py-5">
          <div className="mb-3 text-sm text-slate">{h.crmLabel}</div>
          <dl className="grid grid-cols-2 gap-x-5 gap-y-3">
            {h.fields.map((f, i) => (
              <div
                key={f.label}
                className={`border-l-[3px] pl-3 ${i === h.fields.length - 1 ? "border-red" : "border-teal"}`}
              >
                <dt className="text-[0.78rem] text-slate">{f.label}</dt>
                <dd className="hero-field font-medium" style={{ ["--i" as string]: i }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="hero-synced mt-4 flex items-center gap-2 text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="#2bccc5" />
              <path d="M4.5 8.2l2.2 2.2 4.8-4.8" stroke="#030929" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </svg>
            {h.synced}
          </p>
        </div>
      </figure>
    </section>
  );
}
