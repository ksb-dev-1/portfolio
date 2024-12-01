"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const DURATION = 0.3;
const STAGGER = 0.03;

export default function FlipAnimation({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative overflow-hidden"
    >
      <Link href={href}>
        <span>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </span>
        <span className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </span>
      </Link>
    </motion.div>
  );
}
