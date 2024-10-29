import { useEffect, useRef } from "react";
import Image from "next/image";

// import NextAuth from "../../public/assets/svg/nextauth.svg";
// import ReactQuery from "../../public/assets/svg/react-query.svg";
// import FramerMotion from "../../public/assets/svg/framer-motion.svg";
// import Tailwind from "../../public/assets/svg/tailwind-css.svg";
// import Sass from "../../public/assets/svg/sass.svg";
// import Prisma from "../../public/assets/svg/prisma.svg";
// import Zod from "../../public/assets/svg/zod.svg";
// import ReactHookForm from "../../public/assets/svg/react-hook-form.svg";

import { motion, useInView, useAnimation } from "framer-motion";

const iconsArray = [
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
    name: "Framer Motion",
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
  { icon: "/assets/svg/zod.svg", name: "Zod", href: "https://zod.dev/" },
  {
    icon: "/assets/svg/react-hook-form.svg",
    name: "React Hook Form",
    href: "https://www.react-hook-form.com/",
  },
];

const SkillsPageNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
    // else {
    //   animationControl.start("hidden");
    // }
  }, [isInView, animationControl]);

  return (
    <div
      id="skills"
      className="relative min-h-screen w-screen flex justify-center bg-tertiary py-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full h-fit px-4 lg:px-8">
        <h1 className="font-bold text-2xl mb-8 uppercase">Skills</h1>
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {iconsArray.map(({ icon, name, href }, i) => (
            <motion.a
              key={name}
              className="bg-secondary h-40 flex flex-col items-center justify-center hover:outline hover:outline-[#38BDF8]"
              variants={{
                hidden: { opacity: 0, x: i % 2 === 0 ? -100 : 100, y: -100 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
              initial="hidden"
              animate={animationControl}
              transition={{
                type: "spring",
                stiffness: 150,
                duration: 0.3,
                delay: i * 0.05,
              }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={icon} alt="html" height={50} width={50} />
              <span className="inline-block mt-2">{name}</span>
            </motion.a>
          ))}
          {/* <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={HTML} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">HTML</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={CSS} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">CSS</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={Javascript} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Javscript</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={Typescript} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Typescript</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={ReactJS} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">React.js</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={NextJS} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Next.js</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={ExpressJS} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Express.js</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={Redux} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Redux Toolkit</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={NextAuth} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">NextAuth.js</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={ReactQuery} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">React Query</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={FramerMotion} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Framer Motion</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={Tailwind} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Tailwind</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={Sass} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Sass</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={Prisma} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Prisma</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={Zod} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">Zod</span>
          </div>
          <div className="bg-secondary h-40 flex flex-col items-center justify-center">
            <Image src={ReactHookForm} alt="html" height={50} width={50} />
            <span className="inline-block mt-2">React Hook Form</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SkillsPageNew;
