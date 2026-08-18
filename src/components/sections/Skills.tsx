import { Reveal } from "@/components/Reveal";
import { skills } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-sm text-muted">{skills.eyebrow}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-3xl text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-[1] tracking-[-0.03em]">
          {skills.headline}
        </h2>
      </Reveal>

      <ul className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, i) => (
          <Reveal key={group.group} delay={Math.min(i, 5) * 0.04}>
            <li className="border-t border-hairline pt-5">
              <p className="text-sm text-muted">{group.group}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline px-3 py-1.5 text-sm transition hover:bg-foreground hover:text-background"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
