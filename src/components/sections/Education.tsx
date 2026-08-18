import { Reveal } from "@/components/Reveal";
import { education, additional } from "@/content/site";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-sm text-muted">{education.eyebrow}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-3xl text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-[1] tracking-[-0.03em]">
          {education.headline}
        </h2>
      </Reveal>

      <ul className="mt-16 space-y-4">
        {education.items.map((item, i) => (
          <Reveal key={item.school} delay={i * 0.05}>
            <li className="rounded-3xl border border-hairline bg-surface p-6 md:p-10">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-2xl tracking-tight md:text-3xl">{item.degree}</h3>
                  <p className="mt-1 text-muted">{item.school}</p>
                </div>
                <p className="shrink-0 text-sm text-muted">{item.years}</p>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {item.notes.map((note) => (
                  <li
                    key={note}
                    className="rounded-full border border-hairline px-3 py-1 text-sm text-muted"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.15}>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="border-t border-hairline pt-4">
            <p className="text-sm text-muted">Certifications</p>
            <ul className="mt-3 space-y-2">
              {additional.certifications.map((cert) => (
                <li key={cert} className="leading-relaxed">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-hairline pt-4">
            <p className="text-sm text-muted">Languages</p>
            <p className="mt-3 leading-relaxed">{additional.languages.join(" · ")}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
