import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-sm text-muted">{projects.eyebrow}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-3xl text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-[1] tracking-[-0.03em]">
          {projects.headline}
        </h2>
      </Reveal>

      <div className="mt-16 space-y-6">
        {projects.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <article className="overflow-hidden rounded-3xl border border-hairline bg-surface">
              <div className="grid lg:grid-cols-2">
                {/* Screenshot. Falls back to a labelled panel until one is added. */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-background lg:aspect-auto lg:min-h-[26rem]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.title} interface`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-8 text-center text-sm text-muted">
                      Screenshot coming soon
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <p className="text-sm text-accent">{item.kicker}</p>
                      <p className="text-sm text-muted">{item.year}</p>
                    </div>

                    <h3 className="mt-3 text-3xl tracking-tight md:text-4xl">{item.title}</h3>
                    <p className="mt-5 leading-relaxed text-muted">{item.blurb}</p>

                    <dl className="mt-8 space-y-3">
                      {item.stack.map((group) => (
                        <div key={group.group} className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                          <dt className="w-20 shrink-0 text-xs text-muted">{group.group}</dt>
                          <dd className="flex flex-wrap gap-2">
                            {group.items.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-hairline px-3 py-1 text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap gap-3">
                      {item.live && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition hover:opacity-85"
                        >
                          Live demo
                          <span aria-hidden>↗</span>
                        </a>
                      )}
                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm transition hover:bg-foreground hover:text-background"
                      >
                        GitHub
                        <span aria-hidden>↗</span>
                      </a>
                    </div>
                    {item.liveNote && <p className="mt-3 text-xs text-muted">{item.liveNote}</p>}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
