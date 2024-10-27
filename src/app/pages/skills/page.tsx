"use client";

import Image from "next/image";
//import { MouseParallax } from "react-just-parallax";

//import { motion } from "framer-motion";
//import HeroBG from "../../../../public/assets/hero-bg.svg";

import PageTransition from "@/components/animations/PageTransition";

// const skills = [
//   {
//     name: "HTML",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   },
//   {
//     name: "CSS",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   },
//   {
//     name: "Javascript",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   },
//   {
//     name: "Typescript",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
//   },
//   {
//     name: "React.js",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
//   },
//   {
//     name: "Next.js",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
//   },
//   {
//     name: "Framer Motion",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
//   },
//   {
//     name: "Prisma",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
//   },
//   {
//     name: "MongoDB",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//   },
//   {
//     name: "Express.js",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
//   },
//   {
//     name: "Git",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
//   },
//   {
//     name: "Sass",
//     imgURL:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
//   },
// ];

export default function Skills() {
  return (
    <PageTransition>
      <div className="relative h-screen w-screen flex justify-center bg-secondary pt-28 sm:pt-36 pb-16 overflow-hidden">
        <div className="max-w-6xl w-full flex items-center justify-between  px-4 sm:px-8">
          <div>
            <h1 className="font-bold text-2xl">
              Technologies i use to build web applications
            </h1>
          </div>
          <NestedCircles />
        </div>
      </div>
    </PageTransition>
  );
}

const NestedCircles = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Outer Circle */}
          <div className="relative w-[500px] h-[500px] rounded-full border border-[#2f3c5d] flex items-center justify-center">
            {/* 2nd Circle */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[#2f3c5d] flex items-center justify-center">
              {/* 3rd Circle */}
              <div className="absolute w-[300px] h-[300px] rounded-full border border-[#2f3c5d] flex items-center justify-center">
                {/* 4th Circle */}
                <div className="absolute w-[200px] h-[200px] rounded-full border border-[#2f3c5d] flex items-center justify-center">
                  {/* 5th Circle */}
                  <div className="absolute w-[100px] h-[100px] rounded-full border border-[#2f3c5d] flex items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-[25px] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt="Git"
                height={50}
                width={50}
              />
              <span>Git</span>
            </div>
            <div className="absolute top-[calc(500px-445px)] right-[25px] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                alt="Sass"
                height={50}
                width={50}
              />
              <span>Sass</span>
            </div>
            <div className="absolute -bottom-[25px] flex flex-col items-center">
              <div className="relative h-[50px] w-[50px] bg-white rounded-full">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  alt="Framer"
                  height={30}
                  width={30}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <span>Express.js</span>
            </div>
            <div className="absolute top-[calc(500px-445px)] left-[25px] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                height={50}
                width={50}
              />
              <span>MongoDB</span>
            </div>
            <div className="absolute top-[calc(500px-275px)] -left-[25px] flex flex-col items-center">
              <div className="relative h-[50px] w-[50px] bg-white rounded-full">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                  alt="Framer"
                  height={30}
                  width={30}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <span>Prisma</span>
            </div>
            <div className="absolute top-[375px] left-[25px] flex flex-col items-center">
              <div className="relative h-[50px] w-[50px] bg-white rounded-full">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                  alt="Framer"
                  height={30}
                  width={30}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <span>Framer</span>
            </div>
            <div className="absolute top-[225px] right-[225px] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                height={50}
                width={50}
              />
              <span>Next.js</span>
            </div>
            <div className="absolute top-[375px] right-[25px] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React.js"
                height={50}
                width={50}
              />
              <span>React.js</span>
            </div>
            <div className="absolute top-[75px] right-[calc(500px-275px)] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="CSS"
                height={50}
                width={50}
              />
              <span>CSS</span>
            </div>
            <div className="absolute top-[150px] right-[calc(500px-400px)] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="Javascript"
                height={50}
                width={50}
              />
              <span>Javascript</span>
            </div>
            <div className="absolute top-[300px] right-[calc(500px-350px)] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind"
                height={50}
                width={50}
              />
              <span>Tailwind</span>
            </div>
            <div className="absolute top-[300px] right-[calc(500px-200px)] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="Typescript"
                height={50}
                width={50}
              />
              <span>Typescript</span>
            </div>
            <div className="absolute top-[150px] right-[calc(500px-150px)] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="HTML"
                height={50}
                width={50}
              />
              <span>HTML</span>
            </div>
            <div className="absolute top-[calc(500px-275px)] -right-[25px] flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                alt="Redux"
                height={50}
                width={50}
              />
              <span>Redux</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
