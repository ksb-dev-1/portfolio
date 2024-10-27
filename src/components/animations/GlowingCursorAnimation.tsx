"use client";

import { useState, useEffect } from "react";

export default function GlowingCursorAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track the mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute z-20 w-full h-screen flex items-center justify-center">
      <div
        className="absolute bg-primary blur-xl rounded-full opacity-75 pointer-events-none"
        style={{
          left: `${position.x - 25}px`,
          top: `${position.y - 25}px`,
          width: "50px",
          height: "50px",
          transition: "transform 0.1s ease",
        }}
      ></div>
    </div>
  );
}
