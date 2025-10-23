"use client";

import { worksCopy } from "@/copy/Works";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { worksAnimation } from "@/animations/worksAnimation";
import clsx from "clsx";

export default function WorksSection() {
  const copy = worksCopy;
  const worksRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const worksListRef = React.useRef<HTMLLIElement[]>([]);
  const linksRef = React.useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     if (
  //       !titleRef.current ||
  //       worksListRef.current.length === 0 ||
  //       !linksRef.current
  //     )
  //       return;

  //     worksAnimation({
  //       titleElement: titleRef.current,
  //       worksListElement: worksListRef.current,
  //       linksElement: linksRef.current,
  //     });
  //   },
  //   { scope: worksRef }
  // );

  return (
    <section ref={worksRef} id="works" className="py-17 sm:py-28">
      <div className="container flex flex-col gap-11.5 sm:gap-23">
        {/* TITLE */}
        <div>
          <h2
            ref={titleRef}
            className="fontDisplay textLinearWhite uppercase overflow-hidden *:block *:w-fit"
          >
            <span className="title">TRABALHOS</span>
            <span className="title">SELECIONADOS</span>
          </h2>
        </div>

        {/* WORKS */}
        <div>
          <ul className="flex flex-col gap-6.5 overflow-hidden sm:gap-11.5">
            {copy.map(({ key, project, description, url }, index) => (
              <li
                ref={(el) => {
                  if (el) worksListRef.current[index] = el;
                }}
                className={clsx(
                  "flex flex-col justify-center gap-3 sm:gap-6 sm:flex-row sm:items-center",
                  {
                    "items-end": index % 2 === 0,
                    "items-start sm:flex-row-reverse": index % 2 !== 0,
                  }
                )}
                key={key}
              >
                {/* WORKS TITLE */}
                <div className="w-full max-w-fit">
                  <h3 className="fontWorksDisplay textLinearWhite uppercase">
                    {project}
                  </h3>
                </div>

                {/* WORKS CONTENT */}
                <a
                  className="relative w-full h-75 bg-gray-2"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    className={clsx(
                      "absolute fontWorksSubDisplay textLinearBlack uppercase top-6",
                      {
                        "right-6": index % 2 === 0,
                        "left-6": index % 2 !== 0,
                      }
                    )}
                  >
                    {description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 flex-wrap w-fit fontLinks text-gray-1"
            ref={linksRef}
          >
            <a className="linkBase group" href={``}>
              ver mais
              <span className="linkDecoration"></span>
            </a>
            <a className="linkBase group" href={``}>
              currículo
              <span className="linkDecoration"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
