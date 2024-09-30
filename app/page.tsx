import AboutMe from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="mb-4 mt-20 flex min-h-screen flex-col items-center gap-10 rounded-2xl bg-primary py-20 px-14">
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
