"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Loading() {
  useGSAP(() => {
    gsap.to(".box_bg", {
      yPercent: -100,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      onComplete: () => {
        console.log("teste");
      },
    });
  });

  return (
    <>
      <div className="box_bg fixed top-0 left-0 w-full h-screen z-[99]        pointer-events-none bg-gray-10"></div>
      <div className="box_bg fixed top-0 left-0 w-full h-screen z-[98]        pointer-events-none bg-gray-8"></div>
      <div className="box_bg fixed top-0 left-0 w-full h-screen z-[97]        pointer-events-none bg-gray-6"></div>
    </>
  );
}
