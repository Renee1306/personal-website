import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { hackathons } from "@/content/site";

export function Hackathons() {
  return (
    <section id="hackathons" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-sm text-muted">{hackathons.eyebrow}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-3xl text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-[1] tracking-[-0.03em]">
          {hackathons.headline}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hackathons.body}</p>
      </Reveal>

      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hackathons.items.map((item, i) => (
          <Reveal key={item.title} delay={Math.min(i, 5) * 0.04}>
            <li className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-surface">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.award}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs backdrop-blur">
                  {item.award}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg leading-tight tracking-tight">{item.title}</h3>
                  <span className="shrink-0 text-xs text-muted">{item.year}</span>
                </div>

                {item.blurb && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.blurb}</p>
                )}

                {item.stack && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-hairline px-2.5 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
