"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// 3rd party
import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

interface Icon {
  icon: string;
  name: string;
  href: string;
}

const iconsArray: Icon[] = [
  {
    icon: "/assets/svg/html.svg",
    name: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: "/assets/svg/css.svg",
    name: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "/assets/svg/javascript.svg",
    name: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "/assets/svg/typescript.svg",
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    icon: "/assets/svg/react-js.svg",
    name: "React.js",
    href: "https://react.dev/",
  },
  {
    icon: "/assets/svg/next-js.svg",
    name: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    icon: "/assets/svg/mongo-db.svg",
    name: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    icon: "/assets/svg/express-js.svg",
    name: "Express.js",
    href: "https://expressjs.com/",
  },
  {
    icon: "/assets/svg/redux.svg",
    name: "Redux Toolkit",
    href: "https://redux-toolkit.js.org/",
  },
  {
    icon: "/assets/svg/nextauth.svg",
    name: "NextAuth.js",
    href: "https://next-auth.js.org/",
  },
  {
    icon: "/assets/svg/react-query.svg",
    name: "React Query",
    href: "https://tanstack.com/",
  },
  {
    icon: "/assets/svg/framer-motion.svg",
    name: "Framer",
    href: "https://www.framer.com/motion/",
  },
  {
    icon: "/assets/svg/tailwind-css.svg",
    name: "Tailwind",
    href: "https://tailwindcss.com/",
  },
  {
    icon: "/assets/svg/sass.svg",
    name: "Sass",
    href: "https://sass-lang.com/",
  },
  {
    icon: "/assets/svg/prisma.svg",
    name: "Prisma",
    href: "https://www.prisma.io/",
  },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(-1); // Initially, no box is active

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * iconsArray.length);
      setActiveIndex(randomIndex); // Set a random box to active
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      id="skills"
      className="relative w-screen flex items-center justify-center bg-secondary"
    >
      {/* <ParticlesBackground count={100} /> */}
      <div className="relative max-w-6xl w-full flex flex-col px-4 py-[2rem] sm:py-[4rem]">
        <h1 className="font-extrabold text-4xl mb-8 text-center sm:text-start">
          Skills
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5">
          {iconsArray.map(({ icon, name, href }, i) => (
            <div
              key={name}
              className="relative w-full h-32 md:h-40 overflow-hidden"
            >
              <Image
                src={icon}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain rounded-xl"
              />
              <motion.a
                className={`absolute top-0 left-0 right-0 bottom-0 w-full h-32 md:h-40 flex flex-col items-center justify-center transition duration-500
                  ${
                    activeIndex === i && i % 2 === 0
                      ? "bg-[rgba(23,23,23,0.8)]"
                      : ""
                  }
                    ${
                      activeIndex === i && i % 2 !== 0
                        ? "bg-[rgba(68,68,68,0.8)]"
                        : ""
                    }
                      ${
                        activeIndex !== i && i % 2 === 0
                          ? "bg-[rgba(23,23,23,1)] hover:bg-[rgba(23,23,23,0.6)]"
                          : ""
                      }
                    ${
                      activeIndex !== i && i % 2 !== 0
                        ? "bg-[rgba(68,68,68,1)] hover:bg-[rgba(68,68,68,0.6)]"
                        : ""
                    }
                `}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {activeIndex !== i && (
                  <div className="relative">
                    <ScrollParallax>
                      <div className="flex flex-col items-center">
                        <div className="relative w-[50px] h-[50px]">
                          <Image
                            src={icon}
                            alt={name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                        <span className="inline-block mt-2 text-xs md:text-base">
                          {name}
                        </span>
                      </div>
                    </ScrollParallax>
                  </div>
                )}
                {/* <div className="relative">
                  <ScrollParallax>
                    <div className="flex flex-col items-center">
                      <div className="relative w-[50px] h-[50px]">
                        <Image
                          src={icon}
                          alt={name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain"
                        />
                      </div>
                      <span className="inline-block mt-2 text-xs md:text-base">
                        {name}
                      </span>
                    </div>
                  </ScrollParallax>
                </div> */}
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
