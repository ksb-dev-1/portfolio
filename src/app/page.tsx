"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

//public
//import HeroBG from "../../public/assets/hero-bg.svg";
import ProfileImage from "../../public/assets/profile-image-1.jpg";

//components
import DownloadCVButton from "@/components/DownloadCVButton";
import RevealAnimation from "@/components/animations/RevealAnimation";
import SkillsPage from "@/components/SkillsPage";

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
        className="relative min-h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden lg:overflow-hidden pt-36 pb-16 lg:py:0"
      >
        {/* <Image
          src={HeroBG}
          alt="Hero"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        /> */}
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
            className="relative h-60 w-60 lg:h-80 lg:w-80 rounded-full lg:mb-32 ml-16 sm:ml-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: "linear",
            }}
          >
            <div className="absolute top-[20%] right-8 rounded-full h-60 w-60 lg:h-72 lg:w-72 border-2 border-primary">
              <div className="absolute top-12 -right-8 rounded-full h-20 w-20 lg:h-24 lg:w-24 border-2 border-white"></div>
              <div className="absolute top-36 -left-8 rounded-full h-32 w-32 lg:h-36 lg:w-36 border-2 border-white"></div>
              <ScrollParallax>
                <div className="-right-0 -top-12 absolute h-48 w-48 lg:h-56 lg:w-56 bg-[rgba(56,189,248,0.25)] rounded-full">
                  <div className="absolute h-44 w-44 lg:h-52 lg:w-52 bg-[rgba(56,189,248,0.4)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="absolute top-2 left-2 h-40 w-40 lg:h-48 lg:w-48 rounded-full bg-slate-200"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 0.3,
                      }}
                    >
                      <Image
                        src={ProfileImage}
                        alt="profile image"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
              </ScrollParallax>
            </div>
          </motion.div>
        </div>
      </div>
      <SkillsPage />
      <div className="h-screen w-screen bg-secondary"></div>
    </>
  );
}
