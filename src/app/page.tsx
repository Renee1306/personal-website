import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { Toolkit } from "@/components/sections/Toolkit";
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
      <Toolkit />
      <NewProject />
      <Footer />
    </main>
  );
}
