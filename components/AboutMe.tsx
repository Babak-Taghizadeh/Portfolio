/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Avatar from "@/public/assets/Babi.jpg";
import { IoCloudDownload } from "react-icons/io5";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center gap-5">
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
      <div className="text-lg">
        <p>
          Hey there, I'm <strong>Babak Taghizadeh</strong>! 🌟 As a frontend
          developer, I've been on an exciting journey for about a year now,
          crafting delightful digital experiences that come to life with just a
          few clicks and keystrokes. It all started with a childhood curiosity
          that grew into a burning passion for technology and creativity.
        </p>
        {/* <p>
          My time at Platinco, a cozy little company, allowed me to dive
          headfirst into frontend development. With tools like{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Tailwind</strong> in hand, I've been busy building websites
          that not only look great but also feel amazing to use. Whether it's
          wrangling code or collaborating seamlessly with my team using{" "}
          <strong>TypeScript</strong>, <strong>Git</strong>, and{" "}
          <strong>GitHub</strong>, every day brings a new challenge and an
          opportunity to grow.
        </p> */}
        <p>
          "I'm extremely passionate about joining a talented team where I can
          contribute my skills and learn from others. Additionally, I'm fluent
          in Persian, Turkish, and English, which allows me to effectively
          communicate and collaborate with colleagues from diverse backgrounds."
        </p>

        <p>
          What truly lights me up is the chance to blend my love for creativity
          with the power of technology. Whether I'm designing user-friendly
          interfaces or optimizing performance with the latest RESTful APIs, I'm
          always striving to create solutions that bring joy and make a positive
          impact.
        </p>

        <p>
          Beyond the screen, you'll often find me eagerly exploring the latest
          tech trends or diving into passion projects that fuel my curiosity. I
          firmly believe in the transformative power of technology to shape a
          better world, and I'm committed to playing my part in that journey.
        </p>

        <p>
          With a heart full of enthusiasm and a mind buzzing with ideas, I'm
          excited to continue this journey as a frontend developer. Let's
          connect and create something magical together! ✨
        </p>
      </div>
    </div>
  );
}
