"use client";

import { worksCopy } from "@/copy/Works";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React from "react";
gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

export default function WorksSection() {
  const copy = worksCopy;
  const worksRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const worksListRef = React.useRef<HTMLLIElement[]>([]);
  const linksRef = React.useRef(null);

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

      worksListRef.current.forEach((work, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: work,
            start: "top 80%",
            end: "70% 60%",
            scrub: 1.5,
          },
        });
        if (index % 2 === 0) {
          tl.from(work, {
            xPercent: -100,
            ease: "expo.out",
          });
        } else {
          tl.from(work, {
            xPercent: 100,
            ease: "expo.out",
          });
        }
      });

      gsap.from(linksRef.current, {
        scrollTrigger: {
          trigger: linksRef.current,
          start: "top 80%",
          end: "70% 80%",
          scrub: 1.5,
        },
        xPercent: -100,
        ease: "expo.out",
      });
    },
    { scope: worksRef }
  );

  return (
    <section ref={worksRef} id="works" className="py-20 bg-gray-10">
      <div className="container flex flex-col gap-16">
        <div>
          <h2
            ref={titleRef}
            className="main_title [&_.word]:whitespace-nowrap 
            [&_.char]:inline-block gsap_init"
          >
            TRABALHOS <br /> SELECIONADOS
          </h2>
        </div>
        <div>
          <ul className="flex flex-col gap-[60px] overflow-hidden">
            {copy.map(({ key, project, description, url }, index) => (
              <li
                ref={(el) => {
                  if (el) worksListRef.current[index] = el;
                }}
                className={`flex items-center gap-6 ${
                  index % 2 === 0
                    ? "max-[640px]:items-end max-[640px]:text-end"
                    : "flex-row-reverse max-[640px]:items-start"
                } max-[640px]:flex-col max-[640px]:gap-4 gsap_init`}
                key={key}
              >
                <div className="w-full max-w-fit">
                  <h2 className="works_title title_gradient_white">
                    {project}
                  </h2>
                </div>
                <div className="relative w-full h-72 bg-gray-2">
                  <p
                    className={`absolute works_subtitle title_gradient_black top-4.5 mix-blend-difference ${
                      index % 2 === 0 ? "right-6" : "left-6"
                    } `}
                  >
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 flex-wrap gsap_init" ref={linksRef}>
            <a className="link_text link_style group" href={``}>
              ver mais
              <span className="link_decoration"></span>
            </a>
            <a className="link_text link_style group" href={``}>
              currículo
              <span className="link_decoration"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
