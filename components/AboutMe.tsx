import Image from "next/image";
import Avatar from "@/public/Babak.jpg";
import { IoCloudDownload } from "react-icons/io5";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col items-center gap-5 xl:flex-row xl:px-24 xl:items-start"
    >
      <div className="flex flex-col items-center gap-5 xl:w-1/2">
        <Image
          src={Avatar}
          width={400}
          alt="avatar"
          className="rounded-full"
        />
        <Link href="/Babak-Taghizadeh-CV.pdf" className="btn btn-secondary">
          Download CV
          <IoCloudDownload size={20} color="aqua" />
        </Link>
      </div>
      <div className="flex flex-col gap-3 text-lg xl:w-2/3">
        <p>
          Hey there, I'm <strong>Babak Taghizadeh</strong>! 🌟 As a frontend
          developer, I've been on an exciting journey for about two years now,
          crafting delightful digital experiences that come to life with just a
          few clicks and keystrokes. It all started with a childhood curiosity
          that grew into a burning passion for technology and creativity.
        </p>
        <hr />
        <p>
          I'd like to join a talented team where I can
          contribute my skills and learn from others. Additionally, I'm fluent
          in <strong>English, Turkish, and Persian</strong>, which allows me to
          effectively communicate and collaborate with colleagues from diverse
          backgrounds.
        </p>
        <hr />
        <p>
          What truly lights me up is the chance to create solutions that bring
          joy and make a positive impact.
        </p>
        <hr />
        <p>
          With a heart full of enthusiasm and a mind buzzing with ideas, I'm
          excited to continue this journey as a frontend developer. Let's
          connect and create something magical together! ✨
        </p>
      </div>
    </div>
  );
}
