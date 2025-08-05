"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
gsap.registerPlugin(useGSAP);

export default function StrategyIcon() {
  const svgRef = React.useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".circle_01_path",
        {
          scale: 0.4,
        },
        {
          scale: 1,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        ".circle_02_path",
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
      gsap.fromTo(
        ".circle_03_path",
        {
          strokeDasharray: 108,
          strokeDashoffset: 108,
        },
        {
          strokeDashoffset: 0,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        ".lines_path",
        {
          strokeDasharray: 16,
          strokeDashoffset: 16,
        },
        {
          rotate: 0,
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
      height="42"
      fill="none"
    >
      <g stroke="#fff" strokeWidth="2">
        <circle
          className="circle_02_path"
          cx="21"
          cy="21"
          r="10"
          transform="rotate(-90 21 21)"
        />
        <circle className="circle_01_path" cx="21" cy="21" r="1" />
        <circle
          className="circle_03_path"
          cx="17"
          cy="17"
          r="17"
          transform="matrix(0 -1 -1 0 38 38)"
        />
        <path className="lines_path" d="M0 21h8M42 21h-8M21 42v-8M21 0v8" />
      </g>
    </svg>
  );
}
