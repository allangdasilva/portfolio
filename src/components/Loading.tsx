"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Loading() {
  const loadingWrapperRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const elements = loadingWrapperRef.current?.querySelectorAll(".box_bg");

      if (!elements) return;

      gsap.to(elements, {
        yPercent: -100,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
      });
    },
    { scope: loadingWrapperRef }
  );

  return (
    <div ref={loadingWrapperRef}>
      <div className="box_bg fixed top-0 left-0 w-full h-screen z-99        pointer-events-none bg-gray-8"></div>
      <div className="box_bg fixed top-0 left-0 w-full h-screen z-98        pointer-events-none bg-gray-7"></div>
      <div className="box_bg fixed top-0 left-0 w-full h-screen z-97        pointer-events-none bg-gray-5"></div>
    </div>
  );
}
