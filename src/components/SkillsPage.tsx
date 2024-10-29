import Image from "next/image";
import Link from "next/link";
import { ScrollParallax } from "react-just-parallax";

const Line = () => {
  return (
    <div className="hidden lg:block relative w-[2px] bg-primary mr-4">
      <span className="absolute h-3 w-3 top-[1.4rem] -right-[5.5px] bg-white rounded-full"></span>
      <span className="absolute h-3 w-3 top-[8.4rem] -right-[5.5px] bg-white rounded-full"></span>
      <span className="absolute h-3 w-3 top-[15.4rem] -right-[5.5px] bg-white rounded-full"></span>
      <span className="absolute h-3 w-3 top-[29.4rem] -right-[5.5px] bg-white rounded-full"></span>
      <span className="absolute h-3 w-3 top-[36.4rem] -right-[5.5px] bg-white rounded-full"></span>
      <span className="absolute h-3 w-3 top-[1.4rem] -right-[5.5px] bg-white rounded-full"></span>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="lg:mr-16 w-full sm:w-[600px] lg:w-[400px]">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="font-bold my-4 text-primary">
          Markup Language & Cascading Stylesheet
        </h2>
        <div className="grid grid-cols-2 w-full">
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            HTML
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            CSS
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="font-bold my-4 text-primary">Programming Languages</h2>
        <div className="grid grid-cols-2 w-full">
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Javascript
          </Link>
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Typescript
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="font-bold my-4 text-primary">Libraries</h2>
        <div className="grid grid-cols-2 w-full">
          <Link
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            React.js
          </Link>
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Tailwind
          </Link>
          <Link
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Redux Toolkit
          </Link>
          <Link
            href="https://tanstack.com/query/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Tanstack Query
          </Link>
          <Link
            href="https://zod.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Zod
          </Link>
          <Link
            href="https://www.prisma.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Prisma
          </Link>
          <Link
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Framer Motion
          </Link>
          <Link
            href="https://authjs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Auth.js
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="font-bold my-4 text-primary">Frameworks</h2>
        <div className="grid grid-cols-2 w-full">
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Next.js
          </Link>
          <Link
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Express.js
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="font-bold my-4 text-primary">Version Control</h2>
        <div className="grid w-full">
          <Link
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 py-3 bg-secondary mr-2 mb-2 hover:bg-primary hover:text-secondary transition"
          >
            Git
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div
      id="skills"
      className="relative min-h-screen w-screen flex justify-center bg-[#1a233a] py-16 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex-col-reverse lg:flex-row flex items-center lg:items-start justify-between  px-4 sm:px-8">
        <div className="flex ">
          <Line />
          <Technologies />
        </div>
        <div className="hidden sm:block">
          <NestedCircles />
        </div>
        <div className="block sm:hidden">
          <NestedCirclesForSmallScreen />
        </div>
      </div>
    </div>
  );
}

const NestedCircles = () => {
  return (
    <>
      <div className="flex items-center justify-center py-16">
        <div className="relative flex items-center justify-center">
          {/* Outer Circle */}
          <ScrollParallax>
            <div className="relative w-[500px] h-[500px] rounded-full border border-[#47577f] flex items-center justify-center">
              {/* 2nd Circle */}
              <div className="absolute w-[400px] h-[400px] rounded-full border border-[#47577f] flex items-center justify-center">
                {/* 3rd Circle */}
                <div className="absolute w-[300px] h-[300px] rounded-full border border-[#47577f] flex items-center justify-center">
                  {/* 4th Circle */}
                  <div className="absolute w-[200px] h-[200px] rounded-full border border-[#47577f] flex items-center justify-center">
                    {/* 5th Circle */}
                    <div className="absolute w-[100px] h-[100px] rounded-full border border-[#47577f] flex items-center justify-center"></div>
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
                {/* <span>Git</span> */}
              </div>
              <div className="absolute top-[calc(500px-445px)] right-[25px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                  alt="Sass"
                  height={50}
                  width={50}
                />
                {/* <span>Sass</span> */}
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
                {/* <span>Express.js</span> */}
              </div>
              <div className="absolute top-[calc(500px-445px)] left-[25px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  height={50}
                  width={50}
                />
                {/* <span>MongoDB</span> */}
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
                {/* <span>Prisma</span> */}
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
                {/* <span>Framer</span> */}
              </div>
              <div className="absolute top-[225px] right-[225px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  height={50}
                  width={50}
                />
                {/* <span>Next.js</span> */}
              </div>
              <div className="absolute top-[375px] right-[25px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React.js"
                  height={50}
                  width={50}
                />
                {/* <span>React.js</span> */}
              </div>
              <div className="absolute top-[75px] right-[calc(500px-275px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="CSS"
                  height={50}
                  width={50}
                />
                {/* <span>CSS</span> */}
              </div>
              <div className="absolute top-[150px] right-[calc(500px-400px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="Javascript"
                  height={50}
                  width={50}
                />
                {/* <span>Javascript</span> */}
              </div>
              <div className="absolute top-[300px] right-[calc(500px-350px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind"
                  height={50}
                  width={50}
                />
                {/* <span>Tailwind</span> */}
              </div>
              <div className="absolute top-[300px] right-[calc(500px-200px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="Typescript"
                  height={50}
                  width={50}
                />
                {/* <span>Typescript</span> */}
              </div>
              <div className="absolute top-[150px] right-[calc(500px-150px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML"
                  height={50}
                  width={50}
                />
                {/* <span>HTML</span> */}
              </div>
              <div className="absolute top-[calc(500px-275px)] -right-[25px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                  alt="Redux"
                  height={50}
                  width={50}
                />
                {/* <span>Redux</span> */}
              </div>
            </div>
          </ScrollParallax>
        </div>
      </div>
    </>
  );
};

const NestedCirclesForSmallScreen = () => {
  return (
    <>
      <div className="flex items-center justify-center py-16">
        <div className="relative flex items-center justify-center">
          {/* Outer Circle */}
          <ScrollParallax>
            <div className="relative w-[325px] h-[325px] rounded-full border border-[#47577f] flex items-center justify-center">
              {/* 2nd Circle */}
              <div className="absolute w-[265px] h-[265px] rounded-full border border-[#47577f] flex items-center justify-center">
                {/* 3rd Circle */}
                <div className="absolute w-[195px] h-[195px] rounded-full border border-[#47577f] flex items-center justify-center">
                  {/* 4th Circle */}
                  <div className="absolute w-[125px] h-[125px] rounded-full border border-[#47577f] flex items-center justify-center">
                    {/* 5th Circle */}
                    <div className="absolute w-[55px] h-[55px] rounded-full border border-[#47577f] flex items-center justify-center"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-[15px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">Git</span> */}
              </div>
              <div className="absolute top-[calc(350px-300px)] right-[15px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                  alt="Sass"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">Sass</span> */}
              </div>
              <div className="absolute -bottom-[15px] flex flex-col items-center">
                <div className="relative h-[30px] w-[30px] bg-white rounded-full">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt="Framer"
                    height={20}
                    width={20}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                {/* <span className="text-xs">Express.js</span> */}
              </div>
              <div className="absolute top-[calc(350px-310px)] left-[15px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">MongoDB</span> */}
              </div>
              <div className="absolute top-[calc(350px-175px)] -left-[15px] flex flex-col items-center">
                <div className="relative h-[30px] w-[30px] bg-white rounded-full">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                    alt="Framer"
                    height={20}
                    width={20}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                {/* <span className="text-xs">Prisma</span> */}
              </div>
              <div className="absolute top-[275px] left-[45px] flex flex-col items-center">
                <div className="relative h-[30px] w-[30px] bg-white rounded-full">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                    alt="Framer"
                    height={20}
                    width={20}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                {/* <span className="text-xs">Framer</span> */}
              </div>
              <div className="absolute top-[147px] right-[144px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">Next.js</span> */}
              </div>
              <div className="absolute top-[275px] right-[45px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React.js"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">React.js</span> */}
              </div>
              <div className="absolute top-[50px] right-[calc(350px-205px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="CSS"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">CSS</span> */}
              </div>
              <div className="absolute top-[100px] right-[calc(350px-300px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="Javascript"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">Javascript</span> */}
              </div>
              <div className="absolute top-[200px] right-[calc(350px-275px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">Tailwind</span> */}
              </div>
              <div className="absolute top-[200px] right-[calc(350px-145px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="Typescript"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">Typescript</span> */}
              </div>
              <div className="absolute top-[100px] right-[calc(350px-120px)] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">HTML</span> */}
              </div>
              <div className="absolute top-[calc(350px-190px)] -right-[15px] flex flex-col items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                  alt="Redux"
                  height={30}
                  width={30}
                />
                {/* <span className="text-xs">Redux</span> */}
              </div>
            </div>
          </ScrollParallax>
        </div>
      </div>
    </>
  );
};
