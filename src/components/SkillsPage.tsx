"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useInView, useAnimation } from "framer-motion";

const skills = [
  {
    name: "HTML",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Javascript",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Typescript",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Framer Motion",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
  {
    name: "Prisma",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "MongoDB",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express.js",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Git",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Sass",
    imgURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView, animationControl]);

  return (
    <div
      id="skills"
      className="w-screen flex flex-col items-center justify-center bg-[#1a233a] py-16"
    >
      <div className="max-w-6xl w-full flex flex-col px-4 lg:px-8">
        {/* <div className="flex items-center mb-16">
          <h1 className="relative font mr-4 font-extrabold text-2xl text-primary uppercase">
            skills
          </h1>
          <p className="relative w-full h-[1px] bg-primary"></p>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(
            ({ name, imgURL }: { name: string; imgURL: string }, i) => {
              return (
                <motion.a
                  ref={ref}
                  target="_blank"
                  key={name}
                  className="h-[125px] sm:h-[150px]"
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0,
                      x: i % 2 === 0 ? 100 : -100,
                      y: -100,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  animate={animationControl}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.3,
                    delay: i * 0.1,
                  }}
                >
                  <div className="h-full w-full flex items-center justify-center bg-secondary cursor-pointer hover:bg-white hover:text-secondary transition">
                    <Image src={imgURL} alt="git" height={50} width={50} />
                    <p className="ml-4">{name}</p>
                  </div>
                </motion.a>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
