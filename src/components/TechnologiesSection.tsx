"use client";

import { technologiesCopy } from "@/copy/Technologies";
import useEaseIn from "@/hooks/useEaseIn";
import { transitionEaseIn } from "@/types/classes";
import clsx from "clsx";

export default function TechnologiesSection() {
  const { ref: titleRef, visible: titleVisible } =
    useEaseIn<HTMLHeadingElement>();
  const { ref: ulRef, visible: ulVisible } = useEaseIn<HTMLUListElement>();

  return (
    <section className="py-17 sm:py-28">
      <div className="container flex flex-col gap-11.5 sm:gap-23">
        {/* TITLE */}
        <h2
          ref={titleRef}
          className={clsx(
            `${transitionEaseIn} fontDisplay textLinearWhite uppercase`,
            {
              "opacity-100": titleVisible,
            }
          )}
        >
          Tecnologias
        </h2>

        {/* LIST */}
        <ul
          ref={ulRef}
          className={clsx(`${transitionEaseIn}`, {
            "opacity-100": ulVisible,
          })}
        >
          {technologiesCopy.map(({ key, title, description }, index) => (
            <li
              key={key}
              className={clsx(
                "grid gap-3 py-6 border-b border-gray-1/20 lg:grid-cols-10",
                {
                  "pt-0": index === 0,
                }
              )}
            >
              <h3 className="fontWorksDisplay textLinearWhite uppercase lg:col-span-5">
                {title}
              </h3>
              <p className="fontBody text-gray-1 max-w-[45ch] lg:col-span-5">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
