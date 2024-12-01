import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

export default function HamburgerButton({
  toggleSideNav,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggleSideNav: any;
}) {
  return (
    <div className="md:hidden grid h-screen place-content-center">
      <AnimatedHamburgerButton toggleSideNav={toggleSideNav} />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedHamburgerButton = ({ toggleSideNav }: { toggleSideNav: any }) => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => {
          setActive((pv) => !pv);
          toggleSideNav();
        }}
        className="relative h-12 w-12 rounded-full transition-colors bg-white/10 hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-0.5 w-6 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-0.5 w-6 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-0.5 w-4 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 5px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 5px)",
    },
  },
};
