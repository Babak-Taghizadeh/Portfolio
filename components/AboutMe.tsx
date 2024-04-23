/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Avatar from "@/public/assets/Babi.jpg";
import { IoCloudDownload } from "react-icons/io5";

export default function AboutMe() {
  return (
    <div id="about" className="flex flex-col items-center gap-5">
      <Image
        src={Avatar}
        width={300}
        height={200}
        alt="avatar"
        className="rounded-lg"
      />
      <button className="btn btn-secondary">
        Download CV
        <IoCloudDownload size={20} color="aqua" />
      </button>
      <div className="flex flex-col gap-3 text-lg">
        <p>
          Hey there, I'm <strong>Babak Taghizadeh</strong>! 🌟 As a frontend
          developer, I've been on an exciting journey for about two years now,
          crafting delightful digital experiences that come to life with just a
          few clicks and keystrokes. It all started with a childhood curiosity
          that grew into a burning passion for technology and creativity.
        </p>
        <hr />
        <p>
          I'm extremely passionate about joining a talented team where I can
          contribute my skills and learn from others. Additionally, I'm fluent
          in <strong>English, Turkish, and Persian</strong>, which allows me to effectively
          communicate and collaborate with colleagues from diverse backgrounds.
        </p>
        <hr />
        <p>
          What truly lights me up is the chance to create solutions that bring joy and make a positive
          impact.
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
