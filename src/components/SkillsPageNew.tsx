import Link from "next/link";
import Image from "next/image";

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
];

const SkillsPageNew = () => {
  return (
    <div
      id="skills"
      className="relative min-h-screen w-screen flex justify-center bg-secondary py-16 border-b-2 border-tertiary overflow-hidden"
    >
      <div className="relative max-w-6xl w-full h-fit px-4 lg:px-8 overflow-hidden">
        <h1 className="font-bold text-2xl mb-8">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-tertiary">
          {iconsArray.map(({ icon, name, href }) => (
            <div key={name} className="relative h-40 overflow-hidden">
              <Image
                src={icon}
                alt="html"
                // height={100}
                // width={100}
                fill
                className="object-cover"
              />
              <Link
                className="absolute top-0 left-0 right-0 bottom-0 bg-[rgb(11,17,32,0.99)] h-40 flex flex-col items-center justify-center hover:bg-[rgb(11,17,32,0.9)] ransition duration-500"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={icon} alt="html" height={50} width={50} />
                <span className="inline-block mt-2">{name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPageNew;
