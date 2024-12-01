"use client";
import { motion } from "framer-motion";

const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const anim = (variants = {}, custom?: number) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns: number = 5;

  return (
    <div className="stairs">
      <motion.div {...anim(opacity)} className="transition-background" />
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      {children}
    </div>
  );
}

// --------------------------------------------------------------------

// // export default function PageTransition({ children }) {

//      return (
//       <>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         transition={{ duration: 0.6 }} // No delay here since the effect handles it
//       >
//         {children}
//       </motion.div>

//        <motion.div
//         initial={{ scaleY: 0 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 1 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="slide-in"
//       />

//        <motion.div
//         initial={{ scaleY: 1 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 0 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="slide-out"
//       />
//       </>
//      )
// }

// ---------------------------------------------------------------------

// import { motion } from "framer-motion";

// // eslint-disable-next-line react/prop-types
// export default function Transition({ children }) {
//   // Return a motion-wrapped component with the transition animations
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }} // Starting animation (fade-in and slight scale)
//       animate={{ opacity: 1, scale: 1 }} // Final state (fully visible)
//       exit={{ opacity: 0, scale: 0.95 }} // Exit animation (fade-out and scale back)
//       transition={{ duration: 0.5 }} // Animation timing
//     >
//       {children}
//     </motion.div>
//   );
// }
