import { IconType } from "react-icons";
import { SiInstagram, SiLinkedin, SiGmail, SiGithub, SiTelegram } from "react-icons/si";

interface BridgesType {
  link: string;
  logo: IconType;
}

export const Contact = () => {
  const bridges: BridgesType[] = [
    {
      link: "https://www.instagram.com/babak__taghizadeh?igsh=MXR2NXJtdTZjYmhpMQ==",
      logo: SiInstagram,
    },
    {
      link: "https://www.linkedin.com/in/babak-taghizadeh/",
      logo: SiLinkedin,
    },
    {
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=babak.tz98@gmail.com",
      logo: SiGmail,
    },
    {
      link: "https://github.com/Babak-Taghizadeh",
      logo: SiGithub,
    },
    {
      link: "https://telegram.me/babak_tz",
      logo: SiTelegram,
    }
  ];

  return (
      <ul className="flex flex-col justify-evenly items-center gap-8">
      {/* <h1 className="text-center text-2xl font-extrabold">Contact with me:</h1> */}
        {bridges.map((Item, index) => {
          return (
            <li key={index}>
              <a href={Item.link} target="_blank" rel="noopener noreferrer"><Item.logo size={30} /></a>
            </li>
          )
        })}
      </ul>
  );
};
