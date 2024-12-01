/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

// components
import ParticlesBackground from "@/components/animations/ParticlesBackground";
import Carousel from "@/components/Carousel";

import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const Projects = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // const openCarousel = () => setIsCarouselOpen(true);
  const closeCarousel = () => setIsCarouselOpen(false);

  return (
    <>
      <div
        id="projects"
        className="relative w-screen flex justify-center bg-secondary"
      >
        <ParticlesBackground count={100} />
        <div className="relative max-w-6xl w-full flex flex-col px-4 py-[2rem] sm:py-[4rem]">
          <h1 className="font-bold text-xl mb-4 sm:mb-8 uppercase">Projects</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col border border-tertiary rounded-xl">
              <h1 className="font-bold text-xl bg-tertiary text-white p-4 rounded-tr-xl rounded-tl-xl">
                Codify
              </h1>
              <div className="p-4 sm:p-8">
                <p>
                  Codify is your go-to platform for mastering JavaScript. We
                  make learning interactive and enjoyable, turning coding into a
                  fun and rewarding experience.
                </p>

                <div className="mt-8">
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    Next.js
                  </span>
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    Typescript
                  </span>
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    MongoDB
                  </span>
                  <span className="cursor-pointer text-primary">more...</span>
                </div>
                <div className="mt-4 flex items-center">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <FaGithub />
                    <span className="mx-2">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary ml-8"
                  >
                    <FaGlobeAmericas />
                    <span className="ml-2">Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col border border-tertiary rounded-xl">
              <h1 className="font-bold text-xl bg-tertiary text-white p-4 rounded-tr-xl rounded-tl-xl">
                Jooble
              </h1>
              <div className="p-4 sm:p-8">
                <p>
                  Codify is your go-to platform for mastering JavaScript. We
                  make learning interactive and enjoyable, turning coding into a
                  fun and rewarding experience.
                </p>

                <div className="mt-8">
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    Next.js
                  </span>
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    Typescript
                  </span>
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    MongoDB
                  </span>
                  <span className="cursor-pointer text-primary">more...</span>
                </div>
                <div className="mt-4 flex items-center">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <FaGithub />
                    <span className="mx-2">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary ml-8"
                  >
                    <FaGlobeAmericas />
                    <span className="ml-2">Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col border border-tertiary rounded-xl">
              <h1 className="font-bold text-xl bg-tertiary text-white p-4 rounded-tr-xl rounded-tl-xl">
                MERN Auth
              </h1>
              <div className="p-4 sm:p-8">
                <p>
                  Codify is your go-to platform for mastering JavaScript. We
                  make learning interactive and enjoyable, turning coding into a
                  fun and rewarding experience.
                </p>

                <div className="mt-8">
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    Next.js
                  </span>
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    Typescript
                  </span>
                  <span className="px-4 py-2 rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                    MongoDB
                  </span>
                  <span className="cursor-pointer text-primary">more...</span>
                </div>
                <div className="mt-4 flex items-center">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <FaGithub />
                    <span className="mx-2">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary ml-8"
                  >
                    <FaGlobeAmericas />
                    <span className="ml-2">Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        ref={carouselRef}
        isCarouselOpen={isCarouselOpen}
        closeCarousel={closeCarousel}
      />
    </>
  );
};

export default Projects;
