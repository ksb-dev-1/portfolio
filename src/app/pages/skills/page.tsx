"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// components
import ParticlesBackground from "@/components/animations/ParticlesBackground";
import PageTransition from "@/components/animations/PageTransition";

// 3rd party
import { motion } from "framer-motion";

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

const SkillsPage = () => {
  const [activeIndex, setActiveIndex] = useState(-1); // Initially, no box is active

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * iconsArray.length);
      setActiveIndex(randomIndex); // Set a random box to active
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <PageTransition>
      <div className="relative w-screen flex items-center justify-center bg-secondary pt-[calc(79.2px+2rem)] pb-[2rem] sm:pt-[calc(79.2px+4rem)] sm:pb-[4rem]">
        <ParticlesBackground count={100} />
        <div className="relative max-w-6xl w-full flex flex-col px-4">
          <h1 className="font-bold text-xl mb-4 sm:mb-8 uppercase">Skills</h1>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {iconsArray.map(({ icon, name, href }, i) => (
              <div
                key={name}
                className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden border-2 border-tertiary"
              >
                <Image
                  src={icon}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain rounded-xl"
                />
                <motion.a
                  className={`absolute top-0 left-0 right-0 bottom-0 ${
                    activeIndex === i
                      ? "bg-[rgb(11,17,32,0.8)]"
                      : "bg-[rgb(11,17,32,1)]"
                  } hover:bg-tertiary w-full h-32 md:h-40 rounded-xl flex flex-col items-center justify-center transition duration-500`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={icon} alt={name} height={50} width={50} />
                  <span className="inline-block mt-2 text-xs md:text-base">
                    {name}
                  </span>
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
