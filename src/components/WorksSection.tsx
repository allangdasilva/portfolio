"use client";

import { worksCopy } from "@/copy/Works";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { worksAnimation } from "@/animations/worksAnimation";
import clsx from "clsx";
import Image from "next/image";
import useEaseIn from "@/hooks/useEaseIn";
import { transitionEaseIn } from "@/types/classes";

export default function WorksSection() {
  const copy = worksCopy;

  const worksSectionRef = React.useRef<HTMLElement | null>(null);
  const worksListRef = React.useRef<HTMLLIElement[] | []>([]);

  const [visibleItems, setVisibleItems] = React.useState(4);
  const [isLoading, setIsLoading] = React.useState(false);

  // HANDLE VISIBLE ITEMS
  const handleVisibleItems = () => {
    if (isLoading) return;

    const amountItems = visibleItems + 4;
    const hasMore = amountItems < copy.length;

    setIsLoading(true);

    setTimeout(() => {
      setVisibleItems(hasMore ? amountItems : copy.length);
      setIsLoading(false);
    }, 1500);
  };

  const endWorks = visibleItems >= copy.length;

  // GSAP ANIMATION
  useGSAP(
    () => {
      if (!worksListRef.current.length) return;

      worksAnimation({ worksListElement: worksListRef.current });
    },
    { scope: worksSectionRef, dependencies: [visibleItems] }
  );

  // EASE IN
  const { ref: titleRef, visible: titleVisible } =
    useEaseIn<HTMLHeadingElement>();
  const { ref: buttonsRef, visible: buttonsVisible } =
    useEaseIn<HTMLDivElement>();

  return (
    <section ref={worksSectionRef} id="works" className="py-17 sm:py-28">
      <div className="container flex flex-col gap-11.5 sm:gap-23">
        {/* TITLE */}
        <div>
          <h2
            ref={titleRef}
            className={clsx(
              `${transitionEaseIn} fontDisplay textLinearWhite uppercase overflow-hidden *:block *:w-fit`,
              {
                "opacity-100": titleVisible,
              }
            )}
          >
            <span className="title">Projetos</span>
            <span className="title">Selecionados</span>
          </h2>
        </div>

        {/* WORKS */}
        <div>
          <ul className="flex flex-col gap-6.5 overflow-hidden sm:gap-11.5">
            {copy
              .slice(0, visibleItems)
              .map(
                ({ key, project, description, url, logo, bgColor }, index) => (
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
                      <h3
                        className={clsx(
                          "fontWorksDisplay textLinearWhite uppercas sm:max-w-[12ch]",
                          {
                            "text-right sm:text-left": index % 2 === 0,
                            "sm:text-right": index % 2 !== 0,
                          }
                        )}
                      >
                        {project}
                      </h3>
                    </div>

                    {/* WORKS CONTENT */}
                    <a
                      className="relative w-full h-75 p-6 flex items-center justify-center bg-gray-2 group"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: bgColor }}
                    >
                      <p
                        style={{ color: `${description.color}` }}
                        className={clsx(
                          "absolute top-2 right-3 fontWorksSubDisplay sm:top-5 sm:right-6",
                          {
                            "left-3 sm:left-6": index % 2 !== 0,
                            "mix-blend-difference": key === 3,
                          }
                        )}
                      >
                        {description.text}
                      </p>
                      <Image
                        className={clsx(
                          "transition-transform duration-400 [cubic-bezier(0.85,0.09,0.15,0.91)] group-hover:scale-105 group-focus-visible:scale-105",
                          {
                            "mix-blend-difference": key === 3,
                          }
                        )}
                        src={logo.src}
                        width={logo.width}
                        height={logo.height}
                        alt={logo.alt}
                      />
                    </a>
                  </li>
                )
              )}
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
        <div
          ref={buttonsRef}
          className={clsx(
            `${transitionEaseIn} flex gap-6 flex-wrap w-fit fontLinks text-gray-1`,
            {
              "opacity-100": buttonsVisible,
            }
          )}
        >
          <button
            onClick={handleVisibleItems}
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
    </section>
  );
}
