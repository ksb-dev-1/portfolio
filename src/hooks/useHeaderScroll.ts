"use client";

//import { useSearchParams } from "next/navigation";

import { useEffect, RefObject } from "react";

export const useHeaderScroll = (
  headerRef: RefObject<HTMLDivElement>
  //headerInnerRef: RefObject<HTMLDivElement>
): void => {
  //const searchParams = useSearchParams();
  //const theme = searchParams.get("theme") || "light";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current!.style.backdropFilter = "blur(50px)";
        //headerRef.current!.style.transition = "all 0.5s ease";
        //headerRef.current!.style.backgroundColor = "#1a233a";
      } else {
        headerRef.current!.style.backdropFilter = "none";
        //headerRef.current!.style.transition = "all 0.5s ease";
        //headerRef.current!.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);
};
