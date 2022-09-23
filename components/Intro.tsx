import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#00c04b" />
      </h1>
    </div>
  );
}

export default Intro;
