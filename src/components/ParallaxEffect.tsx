"use client";

import { useState, useEffect } from "react";
import { MouseParallax } from "react-just-parallax";

export default function ParallaxEffect() {
  return (
    <div className="absolute z-10 flex flex-col items-center">
      <MouseParallax>
        {/* <p>I&apos;m reacting to mouse move</p> */}
        <BackgroundCircles />
      </MouseParallax>

      {/* <ScrollParallax>
        <p>I&apos;m reacting to scroll</p>
      </ScrollParallax> */}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BackgroundCircles = ({ parallaxRef }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#38BDF8] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#38BDF8] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#38BDF8] to-[#fff] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#38BDF8] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#38BDF8] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#38BDF8] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};

/*
<div
className={`relative w-[50px] h-[50px] -ml-1 -mt-36 bg-[#23272F] rounded-full transition-transform duration-500 ease-out ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
}`}
>
<FaReact className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#58C4DC] text-4xl" />
</div>

<div
className={`w-[50px] h-[50px] -ml-1 -mt-32 bg-[#001E2B] rounded-full transition-transform duration-500 ease-out ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
}`}
>
<DiMongodb className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00ED64] text-4xl" />
</div>

<div
className={`hidden w-[50px] h-[50px] -ml-1 mt-[12.9rem] bg-white rounded-full xl:block transit transition-transform duration-500 ease-out ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
}`}
>
<SiNextdotjs className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-4xl" />
</div>

<div
className={`w-[50px] h-[50px] -ml-1.5 mt-52 bg-black rounded-full transition-transform duration-500 ease-out ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
}`}
>
<FaNodeJs className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#2C682C] text-4xl" />
</div>

        
<div
className={`w-[50px] h-[50px] -ml-3 -mt-3 bg-white rounded-full transition-transform duration-500 ease-out ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
}`}
>
<SiTypescript className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#3178C6] text-2xl" />
</div>

<div
className={`w-[50px] h-[50px] -ml-3 -mt-3 bg-black rounded-full transition-transform duration-500 ease-out ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
}`}
>
<IoLogoJavascript className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F7DF1E] text-2xl" />
</div>
*/
