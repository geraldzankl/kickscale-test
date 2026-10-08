"use client";

import { useRef, useState } from "react";
import type { Dictionary } from "@/content";

export function Roles({ t }: { t: Dictionary["roles"] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = t.items[active];

  function onKey(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + t.items.length) % t.items.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="roles" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h2 className="max-w-[20ch] text-[2.1rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[2.7rem]">
        {t.title}
      </h2>
      <p className="mt-4 max-w-[56ch] text-lg text-slate">{t.intro}</p>

      <div role="tablist" aria-label={t.title} onKeyDown={onKey} className="mt-12 flex flex-wrap gap-2">
        {t.items.map((it, i) => (
          <button
            key={it.tab}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`role-tab-${i}`}
            aria-selected={i === active}
            aria-controls="role-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-[0.95rem] font-medium transition-colors ${
              i === active ? "bg-ink text-paper" : "bg-white text-slate hover:text-ink"
            }`}
          >
            {it.tab}
          </button>
        ))}
      </div>

      <div
        id="role-panel"
        role="tabpanel"
        aria-labelledby={`role-tab-${active}`}
        className="mt-8 grid gap-10 border-t border-ink pt-10 md:grid-cols-[1.2fr_1fr]"
      >
        <div>
          <h3 className="text-[1.7rem] font-semibold leading-snug tracking-[-0.02em]">{item.headline}</h3>
          <p className="mt-4 max-w-[54ch] text-lg leading-relaxed text-slate">{item.text}</p>
        </div>
        <ul className="divide-y divide-rule self-start border-y border-rule">
          {item.points.map((p) => (
            <li key={p} className="flex items-center gap-3 py-4 text-[1.05rem]">
              <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-teal" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
