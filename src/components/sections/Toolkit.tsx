import { Reveal } from "@/components/Reveal";
import { education, skills, additional } from "@/content/site";

export function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow text-sm text-muted">{education.eyebrow}</p>
          </Reveal>

          <ul className="mt-10 space-y-8">
            {education.items.map((item, i) => (
              <Reveal key={item.school} delay={i * 0.05}>
                <li className="border-t border-hairline pt-6">
                  <p className="text-sm text-muted">{item.years}</p>
                  <h3 className="mt-2 text-xl tracking-tight">{item.degree}</h3>
                  <p className="mt-1 text-muted">{item.school}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.notes.map((note) => (
                      <li
                        key={note}
                        className="rounded-full border border-hairline px-3 py-1 text-xs text-muted"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow text-sm text-muted">/toolkit</p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.04}>
                <li className="border-t border-hairline pt-4">
                  <p className="text-sm text-muted">{group.group}</p>
                  <p className="mt-2 leading-relaxed">{group.items.join(" · ")}</p>
                </li>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <li className="border-t border-hairline pt-4">
                <p className="text-sm text-muted">Languages</p>
                <p className="mt-2 leading-relaxed">{additional.languages.join(" · ")}</p>
              </li>
            </Reveal>

            <Reveal delay={0.3}>
              <li className="border-t border-hairline pt-4">
                <p className="text-sm text-muted">Certifications</p>
                <p className="mt-2 leading-relaxed">{additional.certifications.join(" · ")}</p>
              </li>
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  );
}
