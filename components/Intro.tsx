import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

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
      <h1>
        <BackgroundCircles />
        <span>{text}</span>
        <Cursor cursorColor="#00c04b" />
      </h1>
    </div>
  );
}

export default Intro;
