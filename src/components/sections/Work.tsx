import { Reveal } from "@/components/Reveal";
import { work } from "@/content/site";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-sm text-muted">/experience</p>
      </Reveal>

      <ol className="mt-12 space-y-4">
        {work.map((item, i) => (
          <Reveal key={item.title + item.org} delay={i * 0.05}>
            <li className="rounded-3xl border border-hairline bg-surface p-6 md:p-10">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-2xl tracking-tight md:text-3xl">{item.title}</h3>
                  <p className="mt-1 text-muted">{item.org}</p>
                </div>
                <p className="shrink-0 text-sm text-muted">{item.years}</p>
              </div>

              <p className="mt-6 max-w-2xl leading-relaxed text-muted">{item.blurb}</p>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-hairline px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
