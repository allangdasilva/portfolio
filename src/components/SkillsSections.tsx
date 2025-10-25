"use client";

import Image from "next/image";
import { skillsCopy } from "@/copy/Skills";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { skillsAnimation } from "@/animations/skillsAnimation";
import clsx from "clsx";
import useEaseIn from "@/hooks/useEaseIn";
import { transitionEaseIn } from "@/types/classes";

export default function SkillsSection() {
  const copy = skillsCopy;
  const skillsSectionRef = React.useRef<HTMLElement | null>(null);
  const skillsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const skillsListRef = React.useRef<HTMLDivElement[] | []>([]);

  // GSAP ANIMATION
  useGSAP(
    () => {
      if (skillsListRef.current.length === 0) return;

      skillsAnimation({
        skillsListElement: skillsListRef.current,
        skillsWrapperElement: skillsWrapperRef.current,
      });
    },
    { scope: skillsSectionRef }
  );

  // EASE IN
  const { ref: titleRef, visible: titleVisible } =
    useEaseIn<HTMLHeadingElement>();

  return (
    <section
      ref={skillsSectionRef}
      id="skills"
      className="py-17 overflow-hidden sm:py-28"
    >
      <div className="container flex flex-col items-center gap-11.5 sm:gap-23">
        {/* TITLE */}
        <h2
          ref={titleRef}
          className={clsx(
            `${transitionEaseIn} fontDisplay textLinearWhite uppercase text-center *:block`,
            { "opacity-100": titleVisible }
          )}
        >
          <span className="title">Eu construo sites</span>
          <span className="title">ao reunir</span>
        </h2>

        {/* SKILLS */}
        <div
          ref={skillsWrapperRef}
          className="grid grid-cols-1 justify-items-center gap-y-9 gap-x-20 sm:grid-cols-2"
        >
          {copy.map(({ key, image, name }, index) => (
            <div
              ref={(el) => {
                if (el) skillsListRef.current[index] = el;
              }}
              key={key}
              className={clsx("grid justify-items-center gap-2", {
                "sm:col-span-full": index === 0,
              })}
            >
              <Image
                className="block dark:hidden"
                src={image.src.light}
                alt=""
                width={image.width}
                height={image.height}
              />
              <Image
                className="hidden dark:block"
                src={image.src.black}
                alt=""
                width={image.width}
                height={image.height}
              />
              <p className="fontLinks text-gray-1">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
