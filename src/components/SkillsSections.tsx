"use client";

import Image from "next/image";
import { skillsCopy } from "@/copy/Skills";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { skillsAnimation } from "@/animations/skillsAnimation";
import clsx from "clsx";

export default function SkillsSection() {
  const copy = skillsCopy;
  const skillsRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const skillsContentRef = React.useRef<HTMLDivElement>(null);
  const skillsListRef = React.useRef<HTMLDivElement[]>([]);

  // useGSAP(
  //   () => {
  //     if (
  //       !titleRef.current ||
  //       !skillsContentRef.current ||
  //       skillsListRef.current.length === 0
  //     )
  //       return;

  //     skillsAnimation({
  //       titleElement: titleRef.current,
  //       skillsContentElement: skillsContentRef.current,
  //       skillsListElement: skillsListRef.current,
  //     });
  //   },
  //   { scope: skillsRef }
  // );
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-17 overflow-hidden sm:py-28"
    >
      <div className="container flex flex-col items-center gap-11.5 sm:gap-23">
        {/* TITLE */}
        <h2
          ref={titleRef}
          className="fontDisplay textLinearWhite uppercase text-center *:block"
        >
          <span className="title">EU CONSTRUO SITES</span>
          <span className="title">AO REUNIR</span>
        </h2>

        {/* SKILLS */}
        <div
          ref={skillsContentRef}
          className="grid grid-cols-1 justify-items-center gap-y-9 gap-x-20 sm:grid-cols-2"
        >
          {copy.map((skill, index) => (
            <div
              ref={(el) => {
                if (el) skillsListRef.current[index] = el;
              }}
              key={skill.key}
              className={clsx("grid justify-items-center gap-2", {
                "sm:col-span-full": index === 0,
              })}
            >
              <Image
                src={skill.image.src}
                alt={skill.image.alt}
                width={skill.image.width}
                height={skill.image.height}
              />
              <p className="fontLinks text-gray-1">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
