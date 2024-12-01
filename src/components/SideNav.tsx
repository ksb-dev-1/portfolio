import { useEffect, useRef, forwardRef } from "react";
import Link from "next/link";

import { motion, useInView, useAnimation } from "framer-motion";

import { IoMdClose } from "react-icons/io";

const links = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/pages/skills" },
  { name: "Projects", href: "/pages/projects" },
  { name: "Contact", href: "/pages/contact" },
];

interface SideNavProps {
  isSideNavOpen: boolean;
  closeSideNav: () => void;
}

const SideNav = forwardRef<HTMLDivElement, SideNavProps>(
  ({ isSideNavOpen, closeSideNav }, ref) => {
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
        className={`fixed top-0 left-0 right-0 bottom-0 backdrop-blur-2xl z-40 ${
          isSideNavOpen
            ? "translate-y-0 scale-100"
            : "translate-y-[120%] scale-0"
        }`}
      >
        <span
          className="text-white absolute top-6 right-4 z-[80] cursor-pointer"
          onClick={() => closeSideNav()}
        >
          <IoMdClose className="text-4xl" />
        </span>

        <nav className="absolute z-[70] top-0 left-0 right-0 bottom-0 text-white flex flex-col items-center justify-center font-bold text-4xl">
          {links.map((link, i) => {
            return (
              <motion.div
                ref={animRef}
                key={i}
                className="my-4 hover:text-primary"
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
                  type: "spring",
                  stiffness: 100,
                  duration: 0.3,
                  delay: i * 0.1,
                }}
                onClick={() => {
                  closeSideNav();
                }}
              >
                <Link href={link.href}>{link.name.toUpperCase()}</Link>
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
