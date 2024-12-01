"use client";

import { useState, useRef } from "react";
import Link from "next/link";

// components
import ParticlesBackground from "@/components/animations/ParticlesBackground";
import PageTransition from "@/components/animations/PageTransition";
import Carousel from "@/components/Carousel";
// import FuzzyOverlay from "@/components/FuzzyOverlay";

import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
// import { IoMdImages } from "react-icons/io";
// import { IoPlayCircleOutline } from "react-icons/io5";

const ProjectsPage = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // const openCarousel = () => setIsCarouselOpen(true);
  const closeCarousel = () => setIsCarouselOpen(false);

  return (
    <>
      <PageTransition>
        <div className="relative h-fit w-screen flex justify-center bg-secondary pt-[calc(79.2px+2rem)] pb-[2rem] sm:pt-[calc(79.2px+4rem)] sm:pb-[4rem]">
          <ParticlesBackground count={100} />
          <div className="relative max-w-6xl w-full flex flex-col px-4">
            <h1 className="font-bold text-xl mb-4 sm:mb-8 uppercase">
              Projects
            </h1>
            <div className="flex flex-col border border-tertiary rounded-xl p-4 sm:p-8">
              <div className="flex flex-col">
                <h1 className="font-bold bg-primary text-secondary px-4 py-2 rounded-xl w-fit">
                  Codify
                </h1>
                <div className="mt-4 flex items-center">
                  <Link
                    href="#"
                    className="flex items-center hover:text-primary"
                  >
                    <FaGithub />
                    <span className="ml-2">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center hover:text-primary ml-8"
                  >
                    <FaGlobeAmericas />
                    <span className="ml-2">Live Demo</span>
                  </Link>
                </div>
              </div>
              <p className="font-bold mt-8 mb-4 bg-tertiary text-white px-4 py-2 rounded-xl w-fit capitalize">
                Technologies used
              </p>
              <div>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Next.js
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Typescript
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  MongoDB
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Tanstack Query
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Tailwind
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Prisma
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Auth.js
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Stripe
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Shadcn UI
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  React Hook Form
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Zod
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  React Hot Toast
                </span>
              </div>
            </div>

            <div className="flex flex-col border border-tertiary rounded-xl p-4 sm:p-8 mt-8">
              <div className="flex flex-col">
                <h1 className="font-bold bg-primary text-secondary px-4 py-2 rounded-xl w-fit">
                  Jooble
                </h1>
                <div className="mt-4 flex items-center">
                  <Link
                    href="#"
                    className="flex items-center hover:text-primary"
                  >
                    <FaGithub />
                    <span className="ml-2">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center hover:text-primary ml-8"
                  >
                    <FaGlobeAmericas />
                    <span className="ml-2">Live Demo</span>
                  </Link>
                </div>
              </div>
              <p className="font-bold mt-8 mb-4 bg-tertiary text-white px-4 py-2 rounded-xl w-fit capitalize">
                Technologies used
              </p>
              <div>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Next.js
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Typescript
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Tailwind
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Prisma
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Auth.js
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Stripe
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Shadcn UI
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  React Hook Form
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  Zod
                </span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl border border-tertiary mr-2 sm:mr-4 mb-2 sm:mb-4 inline-block">
                  React Hot Toast
                </span>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
      <Carousel
        ref={carouselRef}
        isCarouselOpen={isCarouselOpen}
        closeCarousel={closeCarousel}
      />
    </>
  );
};

export default ProjectsPage;
