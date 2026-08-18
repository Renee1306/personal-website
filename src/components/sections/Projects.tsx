import { Carousel } from "@/components/Carousel";
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

      <Reveal delay={0.1} className="mt-12">
        <Carousel slideClassName="w-[86vw] sm:w-[420px]">
          {projects.items.map((item) => (
            <article
              key={item.title}
              className="flex h-full min-h-[420px] flex-col justify-between rounded-3xl border border-hairline bg-surface p-8"
            >
              <div>
                <p className="text-sm text-accent">{item.award}</p>
                <h3 className="mt-4 text-3xl tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.year}</p>
                <p className="mt-6 leading-relaxed text-muted">{item.blurb}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-hairline px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </Carousel>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-16 max-w-xl text-lg leading-relaxed text-muted">{projects.body}</p>
      </Reveal>
    </section>
  );
}
