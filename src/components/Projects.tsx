"use client";

// import { useState, useRef } from "react";
import Link from "next/link";

// components
// import Carousel from "@/components/Carousel";

import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const Projects = () => {
  // const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false);
  // const carouselRef = useRef<HTMLDivElement>(null);

  // const openCarousel = () => setIsCarouselOpen(true);
  // const closeCarousel = () => setIsCarouselOpen(false);

  return (
    <>
      <div
        id="projects"
        className="relative w-screen flex justify-center bg-[#0A0A0A] overflow-hidden"
      >
        <div className="relative max-w-6xl w-full flex flex-col px-4 py-[4rem]">
          <h1 className="font-bold text-3xl mb-4 sm:mb-8 text-center sm:text-start">
            Projects
          </h1>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Codify */}
            <div className="flex flex-col bg-secondary p-4 sm:p-8">
              <h1 className="font-bold text-primary text-xl mb-8 rounded-tr-xl rounded-tl-xl">
                Codify
              </h1>
              <p>
                Codify is your go-to platform for mastering JavaScript. We make
                learning interactive and enjoyable, turning coding into a fun
                and rewarding experience.
              </p>
              <div className="mt-8">
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  Next.js
                </span>
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  Typescript
                </span>
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  MongoDB
                </span>
                <span className="cursor-pointer text-primary">more...</span>
              </div>
              <div className="mt-4 flex items-center">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary rounded-[50px] flex items-center hover:text-secondary hover:bg-white transition"
                >
                  <FaGithub />
                  <span className="mx-2">GitHub</span>
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary rounded-[50px] flex items-center hover:text-secondary hover:bg-white ml-4"
                >
                  <FaGlobeAmericas />
                  <span className="ml-2">Live</span>
                </Link>
              </div>
            </div>

            {/* Jooble */}
            <div className="flex flex-col bg-secondary p-4 sm:p-8">
              <h1 className="font-bold text-primary text-xl mb-8 rounded-tr-xl rounded-tl-xl">
                Jooble
              </h1>
              <p>
                Codify is your go-to platform for mastering JavaScript. We make
                learning interactive and enjoyable, turning coding into a fun
                and rewarding experience.
              </p>
              <div className="mt-8">
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  Next.js
                </span>
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  Typescript
                </span>
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  MongoDB
                </span>
                <span className="cursor-pointer text-primary">more...</span>
              </div>
              <div className="mt-4 flex items-center">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary rounded-[50px] flex items-center hover:text-secondary hover:bg-white transition"
                >
                  <FaGithub />
                  <span className="mx-2">GitHub</span>
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary rounded-[50px] flex items-center hover:text-secondary hover:bg-white ml-4"
                >
                  <FaGlobeAmericas />
                  <span className="ml-2">Live</span>
                </Link>
              </div>
            </div>

            {/* MERN Auth */}
            <div className="flex flex-col bg-secondary p-4 sm:p-8">
              <h1 className="font-bold text-primary text-xl mb-8 rounded-tr-xl rounded-tl-xl">
                MERN Auth
              </h1>
              <p>
                Codify is your go-to platform for mastering JavaScript. We make
                learning interactive and enjoyable, turning coding into a fun
                and rewarding experience.
              </p>
              <div className="mt-8">
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  Next.js
                </span>
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  Typescript
                </span>
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  MongoDB
                </span>
                <span className="cursor-pointer text-primary">more...</span>
              </div>
              <div className="mt-4 flex items-center">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary rounded-[50px] flex items-center hover:text-secondary hover:bg-white transition"
                >
                  <FaGithub />
                  <span className="mx-2">GitHub</span>
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary rounded-[50px] flex items-center hover:text-secondary hover:bg-white ml-4"
                >
                  <FaGlobeAmericas />
                  <span className="ml-2">Live</span>
                </Link>
              </div>
            </div>

            {/* Remix */}
            <div className="flex flex-col bg-secondary p-4 sm:p-8">
              <h1 className="font-bold text-primary text-xl mb-8 rounded-tr-xl rounded-tl-xl">
                Remix Project
              </h1>
              <p>
                Codify is your go-to platform for mastering JavaScript. We make
                learning interactive and enjoyable, turning coding into a fun
                and rewarding experience.
              </p>
              <div className="mt-8">
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  Next.js
                </span>
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  Typescript
                </span>
                <span className="px-4 py-2 text-xs rounded-[50px] border border-tertiary mr-2 mb-2 sm:mb-4 inline-block">
                  MongoDB
                </span>
                <span className="cursor-pointer text-primary">more...</span>
              </div>
              <div className="mt-4 flex items-center">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary rounded-[50px] flex items-center hover:text-secondary hover:bg-white transition"
                >
                  <FaGithub />
                  <span className="mx-2">GitHub</span>
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary rounded-[50px] flex items-center hover:text-secondary hover:bg-white ml-4"
                >
                  <FaGlobeAmericas />
                  <span className="ml-2">Live</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Carousel
        ref={carouselRef}
        isCarouselOpen={isCarouselOpen}
        closeCarousel={closeCarousel}
      /> */}
    </>
  );
};

export default Projects;
