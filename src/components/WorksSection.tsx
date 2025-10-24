"use client";

import { worksCopy } from "@/copy/Works";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { worksAnimation } from "@/animations/worksAnimation";
import clsx from "clsx";
import Image from "next/image";

export default function WorksSection() {
  const bgWorksRef = React.useRef<HTMLAnchorElement[] | []>([]);
  const copy = worksCopy;
  const worksRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const worksListRef = React.useRef<HTMLLIElement[]>([]);
  const linksRef = React.useRef<HTMLDivElement>(null);

  const [currentWorks, setCurrentWorks] = React.useState(4);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCurrentWorks = () => {
    if (isLoading) return;

    const nextCount = currentWorks + 4;
    const hasMore = nextCount < copy.length;

    setIsLoading(true);

    setTimeout(() => {
      setCurrentWorks(hasMore ? nextCount : copy.length);
      setIsLoading(false);
    }, 1500);
  };

  const endWorks = currentWorks >= copy.length;

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
            <span className="title">Projetos</span>
            <span className="title">Selecionados</span>
          </h2>
        </div>

        {/* WORKS */}
        <div>
          <ul className="flex flex-col gap-6.5 overflow-hidden sm:gap-11.5">
            {copy
              .slice(0, currentWorks)
              .map(({ key, project, url, logo, bgColor }, index) => (
                <>
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
                      className="relative w-full h-75 p-6 flex items-center justify-center bg-gray-2 group"
                      href={"#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: bgColor }}
                      ref={(el) => {
                        if (el) bgWorksRef.current[index] = el;
                      }}
                    >
                      <Image
                        className={clsx(
                          "transition-transform duration-400 [cubic-bezier(0.85,0.09,0.15,0.91)] group-hover:scale-105 group-focus-visible:scale-105",
                          {
                            "mix-blend-difference": project === "Photography",
                          }
                        )}
                        src={logo.src}
                        width={logo.width}
                        height={logo.height}
                        alt={logo.alt}
                      />
                    </a>
                  </li>
                </>
              ))}
            {isLoading && (
              <li
                aria-hidden="true"
                className="relative w-full h-75 bg-gray-9 dark:bg-gray-8"
              >
                <div className="workSkeleton"></div>
              </li>
            )}
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 flex-wrap w-fit fontLinks text-gray-1"
            ref={linksRef}
          >
            <button
              onClick={handleCurrentWorks}
              type="button"
              disabled={endWorks || isLoading}
              className={clsx("linkBase cursor-pointer group", {
                "opacity-20 pointer-events-none": endWorks || isLoading,
              })}
            >
              ver mais
              <span className="linkDecoration"></span>
            </button>
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
