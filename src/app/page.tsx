"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";

//public
import ProfileImage from "../../public/assets/profile-image-1.jpg";

//components
import DownloadCVButton from "@/components/DownloadCVButton";
import RevealAnimation from "@/components/animations/RevealAnimation";
import SkillsPageNew from "@/components/SkillsPageNew";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { ScrollParallax } from "react-just-parallax";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        id="home"
        className="relative min-h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden lg:overflow-hidden pt-36 pb-16 border-b-2 border-tertiary lg:py:0 bg-secondary"
      >
        <div className="max-w-6xl w-full h-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-8">
          <div className="sm:max-w-2xl h-full lg:h-auto mt-32 lg:mt-0 flex flex-col items-center justify-center lg:block">
            <RevealAnimation>
              <p className="text-3xl sm:text-4xl font-extrabold pb-4">
                Hey, I&apos;am Kedar
              </p>
            </RevealAnimation>

            <div className="mt-2">
              <RevealAnimation>
                <p className="text-xl lg:text-2xl pb-2">
                  An aspiring
                  <span className="ml-2 font-bold text-primary">
                    Full Stack Developer
                  </span>
                </p>
              </RevealAnimation>
            </div>

            <div className="mt-4">
              <RevealAnimation>
                <p className="lg:text-lg text-center lg:text-start">
                  I&apos;m a self-taught full stack developer with two years of
                  experience building projects using MERN stack. I&apos;ve
                  developed several web applications and eager to contribute and
                  grow in a professional environment.
                </p>
              </RevealAnimation>
            </div>

            <DownloadCVButton />
          </div>

          <motion.div
            className="relative h-60 w-60 lg:h-80 lg:w-80 rounded-full lg:mb-32 ml-6 sm:ml-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: "linear",
            }}
          >
            <div className="absolute top-[20%] right-0 h-60 w-60 lg:h-72 lg:w-72 border-2 border-primary">
              {/* <div className="absolute top-12 -right-8 h-20 w-20 lg:h-24 lg:w-24 border-2 border-white"></div> */}
              <div className="absolute top-24 lg:top-28 -left-8 h-28 w-36 lg:h-36 lg:w-44 border-2 border-white"></div>
              {/* <MouseParallax> */}
              {/* <div className="-right-0 -top-12 absolute h-48 w-48 lg:h-56 lg:w-56 bg-[rgba(56,189,248,0.25)]">
                <div className="absolute h-44 w-44 lg:h-52 lg:w-52 bg-[rgba(56,189,248,0.4)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> */}
              <ScrollParallax>
                <motion.div
                  className="absolute right-12 -top-12 h-48 w-40 lg:h-56 lg:w-48 bg-slate-200 border-8 border-secondary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: [180, 360] }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.3,
                    delay: 0.3,
                  }}
                >
                  <Image
                    src={ProfileImage}
                    alt="profile image"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
              </ScrollParallax>
              {/* </div>
              </div> */}
              {/* </MouseParallax> */}
            </div>
          </motion.div>
        </div>
      </div>
      <SkillsPageNew />
      <Projects />
      <Contact />
    </>
  );
}
