"use client";

import { ParallaxProvider } from "react-scroll-parallax";

import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default Providers;
