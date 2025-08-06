"use client";

import Image from "next/image";
import { skillsCopy } from "@/copy/Skills";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React from "react";
gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

export default function SkillsSection() {
  const skillsRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const skillsContentRef = React.useRef(null);
  const skillsListRef = React.useRef<HTMLDivElement[]>([]);
  const copy = skillsCopy;

  useGSAP(
    () => {
      document.querySelectorAll(".gsap_init").forEach((el) => {
        el.classList.remove("gsap_init");
      });

      const titleSplit = new SplitText(titleRef.current, {
        type: "chars, words",
        tag: "span",
        wordsClass: "word",
        charsClass: "char",
      });
      titleSplit.chars.forEach((char) => {
        char.classList.add("title_gradient_white");
      });
      gsap.from(titleSplit.chars, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "70% 40%",
          scrub: 1.5,
        },
        xPercent: 100,
        ease: "expo.out",
        stagger: 0.06,
        opacity: 0,
      });

      gsap.from(skillsListRef.current, {
        scrollTrigger: {
          trigger: skillsContentRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1.5,
        },
        yPercent: 200,
        opacity: 0,
        stagger: 0.2,
        filter: "blur(2px)",
        ease: "expo.out",
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
        <h2
          ref={titleRef}
          className="main_title text-center overflow-visible gsap_init  
          [&_.word]:whitespace-nowrap [&_.char]:inline-block will-change-transform"
        >
          EU CONSTRUO SITES
          <br />
          AO REUNIR
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
            ${index === 0 ? "basis-full" : ""} gsap_init will-change-transform`}
            >
              <Image
                src={skill.image.src}
                alt={skill.image.alt}
                width={skill.image.width}
                height={skill.image.height}
              />
              <p className="link_text">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
