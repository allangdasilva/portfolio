"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
gsap.registerPlugin(useGSAP);

export default function PerformanceIcon() {
  const svgRef = React.useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".circle_path",
        {
          strokeDasharray: 130,
          strokeDashoffset: 130,
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
        ".arc_path",
        {
          strokeDasharray: 80,
          strokeDashoffset: 80,
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
          strokeDasharray: 18,
          strokeDashoffset: 18,
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
      height="42"
      fill="none"
    >
      <path
        className="pointer_path"
        stroke="#fff"
        strokeWidth="2"
        d="M19.646 22.465a2 2 0 1 0 2.723-2.93 2 2 0 0 0-2.723 2.93Zm0 0L13.508 28.5"
      />
      <circle
        className="circle_path"
        cx="21"
        cy="21"
        r="20"
        stroke="#fff"
        strokeWidth="2"
        transform="rotate(90 21 21)"
      />
      <g stroke="#fff" strokeWidth="2">
        <path
          className="lines_path"
          d="M1 21h8m-8 0h8M21 1v8m0-8v8M41 21h-8m8 0h-8"
        />
      </g>
      <path
        className="arc_path"
        stroke="#fff"
        strokeWidth="2"
        d="M9.876 32.5A15.953 15.953 0 0 1 5 21c0-8.837 7.163-16 16-16s16 7.163 16 16c0 4.514-1.87 8.591-4.876 11.5"
      />
    </svg>
  );
}
