import { useEffect, useRef, forwardRef, Dispatch, SetStateAction } from "react";
//import Image from "next/image";
import Link from "next/link";

import { links } from "./Header";

import { motion, useInView, useAnimation } from "framer-motion";

//import HeroBG from "../../public/assets/hero-bg.svg";

interface SideNavProps {
  isSideNavOpen: boolean;
  setIsSideNavOpen: Dispatch<SetStateAction<boolean>>;
  closeSideNav: () => void;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const SideNav = forwardRef<HTMLDivElement, SideNavProps>(
  ({ isSideNavOpen, setIsSideNavOpen, closeSideNav, setActive }, ref) => {
    const animRef = useRef(null);
    const isInView = useInView(animRef);

    const animationControl = useAnimation();

    useEffect(() => {
      if (isInView) {
        animationControl.start("visible");
      } else {
        animationControl.start("hidden");
      }
    }, [isInView, animationControl]);

    return (
      <div
        ref={ref}
        className={`fixed top-20 left-0 right-0 bottom-0 bg-primary z-40 ${
          isSideNavOpen
            ? "translate-y-0 scale-100"
            : "translate-y-[120%] scale-0"
        } transition`}
      >
        {/* <Image
          src={HeroBG}
          alt="Hero"
          fill
          className="absolute z-50 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />

        <div className="absolute z-[60] top-0 left-0 right-0 bottom-0 bg-[rgba(56,189,248,0.75)]"></div> */}

        <nav className="absolute z-[70] top-0 left-0 right-0 bottom-0 text-white flex flex-col items-center justify-center font-extrabold text-4xl">
          {links.map((link, i) => {
            return (
              <motion.div
                ref={animRef}
                key={i}
                className="my-4"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -100,
                    y: 0,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  },
                }}
                initial="hidden"
                animate={animationControl}
                exit="hidden"
                transition={{
                  duration: 0.3,
                  ease: "linear",
                  delay: i * 0.1,
                }}
                onClick={() => {
                  closeSideNav();
                  setIsSideNavOpen(false);
                  setActive(false);
                }}
              >
                <Link href={link.href}>{link.name}</Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    );
  }
);

SideNav.displayName = "SideNav";
export default SideNav;
