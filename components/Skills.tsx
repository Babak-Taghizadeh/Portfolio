import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFramer,
  SiJavascript,
  SiSass,
  SiReact,
  SiGithub,
} from "react-icons/si";

export const Skills = () => {
  const icons: IconType[] = [
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiSass,
    SiTailwindcss,
    SiFramer,
    SiGit,
    SiGithub,
  ];

  return (
    <div
    id="skills" >
      <h1 className="text-center text-2xl font-extrabold">Skills:</h1>
      <ul className="grid grid-cols-3 gap-6 mt-2">
        {icons.map((Item, index) => {
          return (
            <li key={index} className="rounded-2xl bg-neutral p-5">
              <Item size={50} color="white" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
