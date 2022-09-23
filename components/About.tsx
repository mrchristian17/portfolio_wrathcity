import React from "react";
import {motion} from "framer-motion";
import LinkedinImage from "../assets/linkedin-dcm.jpeg";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img 
      initial={{
        x:-200,
        opacity:0,
      }}
      transition={{duration: 1.2}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      src="https://media-exp1.licdn.com/dms/image/C4E03AQFne30vLTLqQQ/profile-displayphoto-shrink_800_800/0/1604020470706?e=1669248000&v=beta&t=NTSsSWX6Z389jH5NLrirozWuL2TBuvvV61dtXrikaeY" 
      className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
    </div>
  );
}
