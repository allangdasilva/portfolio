"use client";

import Image from "next/image";
import { skillsCopy } from "@/copy/Skills";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { skillsAnimation } from "@/animations/skillsAnimation";

export default function SkillsSection() {
  const copy = skillsCopy;
  const skillsRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const skillsContentRef = React.useRef<HTMLDivElement>(null);
  const skillsListRef = React.useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      if (
        !titleRef.current ||
        !skillsContentRef.current ||
        skillsListRef.current.length === 0
      )
        return;

      skillsAnimation({
        titleElement: titleRef.current,
        skillsContentElement: skillsContentRef.current,
        skillsListElement: skillsListRef.current,
      });
    },
    { scope: skillsRef }
  );
  return (
    <section
      ref={skillsRef}
      id="skills"
      className=" py-40 bg-gray-10 overflow-hidden"
    >
      <div className="container flex flex-col items-center gap-15">
        <h2 ref={titleRef} className="fontDisplay text-center *:block">
          <span className="title">EU CONSTRUO SITES</span>
          <span className="title">AO REUNIR</span>
        </h2>
        <div
          ref={skillsContentRef}
          className="flex flex-wrap items-end justify-center gap-y-7.5 gap-x-32"
        >
          {copy.map((skill, index) => (
            <div
              ref={(el) => {
                if (el) skillsListRef.current[index] = el;
              }}
              key={skill.key}
              className={`flex flex-col items-center gap-2 text-white
            ${index === 0 ? "basis-full" : ""}`}
            >
              <Image
                src={skill.image.src}
                alt={skill.image.alt}
                width={skill.image.width}
                height={skill.image.height}
              />
              <p className="fontLinks">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
