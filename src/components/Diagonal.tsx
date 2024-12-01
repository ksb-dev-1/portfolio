"use client";

import { useState, useEffect } from "react";

import { useParallax } from "react-scroll-parallax";

import { MdKeyboardArrowUp } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";

export default function Diagonal() {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });

  const spinnerSize = 500;
  const radius = spinnerSize / 2;

  const icons = [
    {
      icon: <RiJavascriptFill />,
      angle: 315,
      color: "#58C4DC",
      background: "#23272F",
    },
    {
      icon: <RiNextjsFill />,
      angle: 225,
      color: "#FFFFFF",
      background: "#000000",
    },
    { icon: <SiRedux />, angle: 135, color: "#764ABC", background: "#FFFFFF" },
    {
      icon: <BiLogoTypescript />,
      angle: 45,
      color: "#3178C6",
      background: "#FFFFFF",
    },
    { icon: <SiPrisma />, angle: 270, color: "#0C344B", background: "#FFFFFF" },
    { icon: <FaNodeJs />, angle: 180, color: "#53A245", background: "#0D121C" },
    { icon: <SiMongodb />, angle: 90, color: "#00ED64", background: "#001E2B" },
    { icon: <FaReact />, angle: 0, color: "#58C4DC", background: "#23272F" },
  ];

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 16); // Approx 60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-screen flex justify-center bg-secondary">
      <div className="max-w-6xl w-full flex flex-col px-4 lg:px-8">
        <div className="flex items-center mb-32">
          <h1 className="relative font mr-4 font-extrabold text-4xl text-primary">
            Skills
          </h1>
          {/* <h1 className="absolute left-[calc(50%-55.175px)] bg-secondary px-4 font-extrabold text-xl lg:text-2xl text-primary uppercase">
            Skills
          </h1> */}
          <p className="relative w-full h-[1px] bg-primary"></p>
        </div>

        <div
          ref={parallax.ref}
          className="spinner flex flex-col justify-center items-center"
        >
          <div className="h-20 w-20 bg-secondary border-2 border-primary rounded-full relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
              <MdKeyboardArrowUp />
            </span>
          </div>

          {icons.map(({ icon, angle }) => {
            const radians = (angle * Math.PI) / 180;
            const x = radius * Math.cos(radians);
            const y = radius * Math.sin(radians);

            return (
              <div
                key={angle}
                className={`bg-secondary border-2 border-primary icon h-20 w-20 rounded-full`}
                style={{
                  //backgroundColor: `${background}`,
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                }}
              >
                <span
                  className={`text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                  //style={{ color: `${color}` }}
                >
                  {icon}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
