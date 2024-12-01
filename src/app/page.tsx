"use client";

import Image from "next/image";
import { motion } from "framer-motion";

//components
import DownloadCVButton from "@/components/DownloadCVButton";
import RevealAnimation from "@/components/animations/RevealAnimation";
import ParticlesBackground from "@/components/animations/ParticlesBackground";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { MouseParallax } from "react-just-parallax";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="relative w-screen flex items-center justify-center bg-[#0A0A0A]"
      >
        <ParticlesBackground count={100} />
        <div className="relative max-w-6xl w-full h-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 pt-[calc(79.2px+2rem)] pb-[2rem] sm:pt-[calc(79.2px+4rem)] sm:pb-[4rem]">
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

          <div className="relative h-60 w-60 lg:h-80 lg:w-80 lg:mb-32 ml-6 sm:ml-0">
            <motion.div
              className="absolute top-[30%] right-0 h-56 w-56 lg:h-72 lg:w-72 rounded-full border-2 border-primary"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute top-16 lg:top-20 -left-8 sm:-left-16 h-36 w-36 lg:h-48 lg:w-48 rounded-full border-2 border-white"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                  delay: 0.15,
                }}
              >
                {/* <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-white"></div> */}
              </motion.div>
              <MouseParallax>
                <motion.div
                  className="absolute right-6 -top-12 h-44 w-44 lg:h-56 lg:w-56 rounded-full bg-slate-200 overflow-hidden"
                  initial={{ opacity: 0, y: -200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.3,
                    delay: 0.3,
                  }}
                >
                  <Image
                    src="/assets/profile-image-1.jpg"
                    alt="profile image"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </motion.div>
              </MouseParallax>
            </motion.div>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
