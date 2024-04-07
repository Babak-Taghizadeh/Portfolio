import AboutMe from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="mx-4 my-20 flex min-h-screen flex-col items-center gap-10 rounded-2xl bg-primary p-5">
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
