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

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-surface">
              {/* Screenshot. Falls back to a labelled panel until one is added. */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} interface`}
                    fill
                    // These are UI screenshots with small text in them, so the
                    // default quality (75) leaves it visibly mushy.
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-8 text-center text-sm text-muted">
                    Screenshot coming soon
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm text-accent">{item.kicker}</p>
                    <p className="text-xs text-muted">{item.year}</p>
                  </div>

                  <h3 className="mt-2 text-xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">{item.blurb}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.flatMap((group) => group.items).map((tech) => (
                      <span key={tech} className="rounded-full border border-hairline px-2.5 py-1 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {item.live && (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs text-background transition hover:opacity-85"
                      >
                        Live demo
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                    <a
                      href={item.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-xs transition hover:bg-foreground hover:text-background"
                    >
                      GitHub
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                  {item.liveNote && <p className="mt-3 text-xs text-muted">{item.liveNote}</p>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
