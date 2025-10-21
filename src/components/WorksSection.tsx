"use client";

import { worksCopy } from "@/copy/Works";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { worksAnimation } from "@/animations/worksAnimation";

export default function WorksSection() {
  const copy = worksCopy;
  const worksRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const worksListRef = React.useRef<HTMLLIElement[]>([]);
  const linksRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !titleRef.current ||
        worksListRef.current.length === 0 ||
        !linksRef.current
      )
        return;

      worksAnimation({
        titleElement: titleRef.current,
        worksListElement: worksListRef.current,
        linksElement: linksRef.current,
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
            className="fontDisplay overflow-hidden *:block *:w-fit"
          >
            <span className="title">TRABALHOS</span>
            <span className="title">SELECIONADOS</span>
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
                } max-[640px]:flex-col max-[640px]:gap-4`}
                key={key}
              >
                <div className="w-full max-w-fit">
                  <h2 className="fontWorksDisplay title_gradient_white">
                    {project}
                  </h2>
                </div>
                <div className="relative w-full h-72 bg-gray-2">
                  <p
                    className={`absolute fontWorksSubDisplay title_gradient_black top-4.5 mix-blend-difference ${
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
          <div className="flex gap-6 flex-wrap w-fit" ref={linksRef}>
            <a className="fontLinks linkBase group" href={``}>
              ver mais
              <span className="linkDecoration"></span>
            </a>
            <a className="fontLinks linkBase group" href={``}>
              currículo
              <span className="linkDecoration"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
