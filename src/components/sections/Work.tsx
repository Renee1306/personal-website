import { Reveal } from "@/components/Reveal";
import { PhotoStack } from "@/components/PhotoStack";
import { work } from "@/content/site";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-sm text-muted">/experience</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-3xl text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-[1] tracking-[-0.03em]">
          What I&apos;ve shipped, and where.
        </h2>
      </Reveal>

      <div className="relative mt-20">
        {/* Spine. Sits on the left on mobile and down the centre from lg up. */}
        <div
          aria-hidden
          className="absolute bottom-0 left-4 top-0 w-px bg-hairline lg:left-1/2 lg:-translate-x-1/2"
        />

        <ol className="space-y-12 lg:space-y-6">
          {work.map((item, i) => {
            const photoOnLeft = i % 2 === 1;
            return (
              <li key={item.title + item.org} className="relative">
                {/* Numbered node on the spine */}
                <span
                  aria-hidden
                  className="absolute left-4 top-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-surface text-xs text-muted ring-1 ring-hairline lg:left-1/2"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="grid items-center gap-6 pl-12 lg:grid-cols-2 lg:gap-14 lg:pl-0">
                  {/* Text card */}
                  <Reveal
                    delay={0.05}
                    className={
                      photoOnLeft ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"
                    }
                  >
                    <article className="rounded-3xl border border-hairline bg-surface p-6 md:p-8">
                      <p className="text-sm text-muted">{item.years}</p>
                      <h3 className="mt-2 text-2xl tracking-tight">{item.title}</h3>
                      <p className="mt-1 text-muted">{item.org}</p>

                      <p className="mt-5 leading-relaxed text-muted">{item.blurb}</p>

                      <ul className="mt-5 space-y-3">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-hairline px-3 py-1 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>

                  {/* Photo stack, or nothing when this role has no photos */}
                  {item.images && item.images.length > 0 && (
                    <Reveal
                      delay={0.1}
                      className={
                        photoOnLeft ? "lg:order-1 lg:pr-10" : "lg:order-2 lg:pl-10"
                      }
                    >
                      <PhotoStack photos={item.images} label={`${item.org} photos`} />
                    </Reveal>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
