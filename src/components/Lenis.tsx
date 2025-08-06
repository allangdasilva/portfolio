"use client";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import React, { PropsWithChildren } from "react";

export default function Lenis({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      options={{
        duration: 1.4,
        gestureOrientation: "vertical",
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
