import { Reveal } from "@/components/Reveal";
import { HackathonDeck } from "@/components/HackathonDeck";
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

      <Reveal delay={0.15} className="mt-16">
        <HackathonDeck items={hackathons.items} />
      </Reveal>
    </section>
  );
}
