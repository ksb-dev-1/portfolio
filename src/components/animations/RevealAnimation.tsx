"use client";

//import { useEffect, useRef } from "react";
import {
  motion,
  //useInView,
  //useAnimation
} from "framer-motion";

interface Props {
  children: JSX.Element;
}

export default function RevealAnimation({ children }: Props) {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  // const mainControls = useAnimation();
  // const slideControls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //     slideControls.start("visible");
  //   }
  // }, [isInView, mainControls, slideControls]);

  return (
    <div
      //ref={ref}
      className="w-fit relative overflow-hidden"
    >
      <motion.div
        // variants={{
        //   hidden: { opacity: 0, y: "100%" },
        //   visible: { opacity: 1, y: 0 },
        // }}
        // initial="hidden"
        // animate={mainControls}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        {children}
      </motion.div>

      <motion.div
        // variants={{
        //   hidden: { left: 0 },
        //   visible: { left: "100%" },
        // }}
        // initial="hidden"
        // animate={slideControls}
        // transition={{ duration: 1, ease: "anticipate" }}
        initial={{ left: 0 }}
        animate={{ left: "100%" }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-primary
         z-20"
      />
    </div>
  );
}
