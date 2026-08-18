import { GradientBlobs } from "@/components/GradientBlobs";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { RevealEmail } from "@/components/RevealEmail";
import { cta, site } from "@/content/site";

export function NewProject() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-hairline">
      <GradientBlobs />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-sm text-muted">{cta.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl text-[clamp(2.25rem,7vw,6rem)] font-medium leading-[0.9] tracking-[-0.04em]">
            {cta.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <RevealEmail email={site.email} />
        </Reveal>
      </div>

      <Marquee duration={35} className="relative border-y border-hairline py-6">
        {cta.words.map((word) => (
          <span
            key={word}
            className="mx-6 whitespace-nowrap text-[clamp(1.5rem,4vw,3rem)] tracking-tight text-muted md:mx-10"
          >
            {word}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
