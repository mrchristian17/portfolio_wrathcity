import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

import MountainImage from "../assets/mountain-dcm.jpeg";

type Props = {};

function Intro({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, my name is Daniel Moreno.",
      "var degree = 'B.S. Computer Science';",
      "<UniversityOfTexasAtElPaso />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* TODO - add Image tag from "mext/image" */}
      <Image
        className="relative rounded-full mx-auto object-cover"
        src={MountainImage}
        height={150}
        width={150}
        alt="Linkedin pic"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#00c04b" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
