import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { Hackathons } from "@/components/sections/Hackathons";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { NewProject } from "@/components/sections/NewProject";
import { Footer } from "@/components/sections/Footer";
import { SectionNav } from "@/components/SectionNav";

export default function Home() {
  return (
    <main>
      <SectionNav />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Hackathons />
      <Education />
      <Skills />
      <NewProject />
      <Footer />
    </main>
  );
}
