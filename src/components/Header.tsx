"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

//import { useHeaderScroll } from "@/hooks/useHeaderScroll";

import RevealAnimation from "./animations/RevealAnimation";
import FlipAnimation from "./animations/FlipAnimation";
import HamburgerButton from "./HamburgerButton";
import SideNav from "./SideNav";

import { FaGithub } from "react-icons/fa";

export const links = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const sideNavRef = useRef<HTMLDivElement>(null);
  const title = "KSB-DEV";

  //useHeaderScroll(headerRef);

  const toggleSideNav = () => setIsSideNavOpen((prev) => !prev);
  const closeSideNav = () => setIsSideNavOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSideNavOpen(false);
        setActive(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="fixed z-30 top-0 left-0 right-0 h-20 flex justify-center backdrop-blur-xl"
      >
        <div className="max-w-6xl w-full flex items-center justify-between px-4 sm:px-8">
          <div className="w-fit lg:max-w-[33.33%] lg:w-full">
            <RevealAnimation>
              <motion.div className="text-primary text-2xl font-extrabold">
                <FlipAnimation href="#home">{title}</FlipAnimation>
              </motion.div>
            </RevealAnimation>
          </div>

          <nav className="hidden md:flex items-center justify-center w-fit lg:max-w-[33.33%] lg:w-full">
            {links.map((link, i) => {
              return (
                <motion.div
                  key={i}
                  className="mx-4"
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: -100,
                  }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "linear",
                    delay: i * 0.1,
                  }}
                >
                  <FlipAnimation href={link.href}>{link.name}</FlipAnimation>
                </motion.div>
              );
            })}
          </nav>

          <div className="w-fit lg:max-w-[33.33%] lg:w-full flex items-center justify-end">
            <motion.a
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="hidden md:flex"
              href="https://github.com/"
              target="_blank"
              aria-label="github-link"
            >
              <FaGithub className="text-3xl mr-4 lg:mr-0 cursor-pointer hover:text-primary transition" />
            </motion.a>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <HamburgerButton
                active={active}
                setActive={setActive}
                toggleSideNav={toggleSideNav}
              />
            </motion.span>
          </div>
        </div>
      </div>
      <SideNav
        active={active}
        setActive={setActive}
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
        closeSideNav={closeSideNav}
        ref={sideNavRef}
      />
    </>
  );
}
