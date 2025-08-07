"use client";

import { worksCopy } from "@/copy/Works";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { worksAnimation } from "@/animations/worksAnimation";
import { removeGsapInit } from "@/helper/removeGsapInit";

export default function WorksSection() {
  const copy = worksCopy;
  const worksRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const worksListRef = React.useRef<HTMLLIElement[]>([]);
  const linksRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      removeGsapInit(worksRef);

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
            className="main_title overflow-hidden *:block *:w-fit gsap_init will-change-transform"
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
                } max-[640px]:flex-col max-[640px]:gap-4 gsap_init will-change-transform`}
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
          <div
            className="flex gap-6 flex-wrap w-fit gsap_init will-change-transform"
            ref={linksRef}
          >
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
