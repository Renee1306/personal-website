import { Reveal } from "@/components/Reveal";
import { about, disciplines } from "@/content/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-sm text-muted">{about.eyebrow}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-4xl text-[clamp(2rem,5.5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.03em]">
          {about.headline}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-10 text-2xl tracking-tight md:text-3xl">{about.greeting}</p>
      </Reveal>

      <div className="mt-6 max-w-2xl space-y-5">
        {about.paragraphs.map((paragraph, i) => (
          <Reveal key={paragraph} delay={0.12 + i * 0.05}>
            <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <ul className="mt-20 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((discipline, i) => (
            <li key={discipline} className="border-t border-hairline pt-4">
              <span className="text-sm text-muted">0{i + 1}</span>
              <p className="mt-2 text-xl tracking-tight">{discipline}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
