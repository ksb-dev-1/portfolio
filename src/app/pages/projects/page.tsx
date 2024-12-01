"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import HeroBG from "../../../../public/assets/hero-bg.svg";

import PageTransition from "@/components/animations/PageTransition";
import Carousel from "@/components/Carousel";
import FuzzyOverlay from "@/components/FuzzyOverlay";

import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";

const ProjectsPage = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openCarousel = () => setIsCarouselOpen(true);
  const closeCarousel = () => setIsCarouselOpen(false);

  return (
    <>
      <PageTransition>
        <div className="relative min-h-screen w-screen flex flex-col items-center justify-center bg-secondary pt-[calc(80px+10rem)] pb-[2rem] sm:pt-0 sm:pb-0">
          <Image
            src={HeroBG}
            alt="Hero"
            fill
            className="absolute object-cover"
          />
          <div className="absolute z-10 max-w-6xl w-full flex flex-col px-4">
            {/* <h1 className="font-extrabold text-2xl mb-8 uppercase">ProjectsPage</h1> */}
            <div className="grid grid-clos-1 md:grid-cols-2 w-full gap-8">
              <div className="p-8 bg-tertiary rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-primary font-bold text-xl">Codify</h2>
                  <div className="flex items-center">
                    <span
                      className="text-2xl cursor-pointer hover:text-primary"
                      onClick={() => openCarousel()}
                    >
                      <IoMdImages />
                    </span>
                    <span className="text-2xl ml-8 cursor-pointer hover:text-primary">
                      <FaGithub />
                    </span>
                    <span className="text-2xl ml-8 cursor-pointer hover:text-primary">
                      <FaGlobeAmericas />
                    </span>
                  </div>
                </div>
                <div className="relative h-[200px] lg:h-[250px] w-full rounded-xl overflow-hidden bg-secondary">
                  <FuzzyOverlay />
                  <IoPlayCircleOutline className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl cursor-pointer hover:text-primary" />
                </div>
              </div>
              <div className="p-8 bg-tertiary rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-primary font-bold text-xl">Jooble</h2>
                  <div className="flex items-center">
                    <span
                      className="text-2xl cursor-pointer hover:text-primary"
                      onClick={() => openCarousel()}
                    >
                      <IoMdImages />
                    </span>
                    <span className="text-2xl ml-8 cursor-pointer hover:text-primary">
                      <FaGithub />
                    </span>
                    <span className="text-2xl ml-8 cursor-pointer hover:text-primary">
                      <FaGlobeAmericas />
                    </span>
                  </div>
                </div>
                <div className="relative h-[200px] lg:h-[250px] w-full rounded-xl overflow-hidden bg-secondary">
                  <FuzzyOverlay />
                  <IoPlayCircleOutline className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl cursor-pointer hover:text-primary" />
                </div>
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
