"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define the Particle type
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const generateParticles = (
  count: number,
  width: number,
  height: number
): Particle[] => {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 1, // Particle size between 2px and 7px
      delay: Math.random() * 2, // Random animation delay
    });
  }
  return particles;
};

const ParticlesBackground = ({ count = 50 }: { count: number }) => {
  // Declare the particles state with the Particle type
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Generate particles after confirming we're in the browser
      const width = window.innerWidth;
      const height = window.innerHeight;
      setParticles(generateParticles(count, width, height));

      // Handle resize events
      const handleResize = () => {
        setParticles(
          generateParticles(count, window.innerWidth, window.innerHeight)
        );
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [count]);

  return (
    <div className="absolute w-screen h-screen overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
          }}
          animate={{
            x: [particle.x, particle.x + Math.random() * 100 - 50, particle.x],
            y: [
              particle.y,
              particle.y + Math.random() * 100 - 50,
              particle.y + 100,
            ],
            opacity: [0, 0.5, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: particle.delay,
          }}
          style={{
            position: "absolute",
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            backgroundColor: `${
              i % 3 === 0 ? "#00bfff" : "rgba(255, 255, 255, 0.7)"
            }`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
