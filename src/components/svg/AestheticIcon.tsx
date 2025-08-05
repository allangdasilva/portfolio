"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
gsap.registerPlugin(useGSAP);

export default function AestheticIcon() {
  const svgRef = React.useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".circle_path",
        {
          strokeDasharray: 74,
          strokeDashoffset: 74,
        },
        {
          strokeDashoffset: 0,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power4.out",
        }
      );
      gsap.from(svgRef.current, {
        opacity: 0,
        filter: "blur(1px)",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power4.out",
      });
    },
    { scope: svgRef }
  );

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="38"
      fill="none"
    >
      <circle
        className="circle_path"
        cx="20.5"
        cy="12.5"
        r="11.5"
        stroke="#fff"
        strokeWidth="2"
        transform="rotate(-90 20.5 12.5)"
      />
      <circle
        className="circle_path"
        cx="29.5"
        cy="25.5"
        r="11.5"
        stroke="#fff"
        strokeWidth="2"
        transform="rotate(32.402 29.5 25.5)"
      />
      <circle
        className="circle_path"
        cx="12.5"
        cy="25.5"
        r="11.5"
        stroke="#fff"
        strokeWidth="2"
        transform="rotate(148.389 12.5 25.5)"
      />
    </svg>
  );
}
