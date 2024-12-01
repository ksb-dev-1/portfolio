"use client";

import Image from "next/image";
import { motion } from "framer-motion";

//public
import HeroBG from "../../public/assets/hero-bg.svg";
import ProfileImage from "../../public/assets/profile-image-1.jpg";

//components
import DownloadCVButton from "@/components/DownloadCVButton";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { MouseParallax } from "react-just-parallax";
// import SkillsPage from "@/components/SkillsPage";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="relative min-h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden lg:overflow-hidden pt-36 pb-16 lg:py:0"
      >
        <Image
          src={HeroBG}
          alt="Hero"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="max-w-6xl w-full h-full flex flex-col-reverse lg:flex-row items-center justify-between px-4">
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

          <div className="relative h-60 w-60 lg:h-80 lg:w-80 rounded-full lg:mb-32 ml-6 sm:ml-0">
            <motion.div
              className="absolute top-[20%] right-0 h-60 w-60 lg:h-72 lg:w-72 border-2 border-primary rounded-xl"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute top-24 lg:top-28 -left-8 h-28 w-36 lg:h-36 lg:w-44 bg-secondary rounded-xl"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                  delay: 0.15,
                }}
              >
                <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-white rounded-xl"></div>
              </motion.div>
              <MouseParallax>
                <motion.div
                  className="absolute right-12 -top-12 h-48 w-40 lg:h-56 lg:w-48 bg-slate-200 border-8 border-secondary rounded-2xl overflow-hidden"
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
                    src={ProfileImage}
                    alt="profile image"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-2xl"
                  />
                </motion.div>
              </MouseParallax>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <SkillsPage /> */}
    </>
  );
}
