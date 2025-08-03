"use client";

import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React from "react";
gsap.registerPlugin(SplitText, useGSAP);

export default function HeroSection() {
  const heroRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const descRef = React.useRef(null);

  useGSAP(
    () => {
      document.querySelectorAll(".gsap-init").forEach((el) => {
        el.classList.remove("gsap-init");
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
        xPercent: -100,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.06,
        opacity: 0,
      });
      gsap.fromTo(
        descRef.current,
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          delay: 2.2,
          ease: "expo.out",
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-[100px] pb-20 flex bg-gray-10 
      max-[640px]:pt-38 max-[400px]:pt-50"
    >
      <div className="container flex flex-col items-center">
        <div className="pb-20 pt-15">
          <h1
            ref={titleRef}
            className="main_title text-center gsap-init [&_.word]:whitespace-nowrap 
            [&_.char]:inline-block"
            suppressHydrationWarning
          >
            FRONT-END DEVELOPER & <br className="max-sm:hidden" /> UI/UX
            DESIGNER
          </h1>
        </div>

        <div
          className="flex flex-col items-center gap-6 gsap-init clip-path"
          ref={descRef}
        >
          <div className="flex gap-6">
            <div className="relative w-[98px] h-[41px]">
              <Image
                src={"/svg/logo-allan-coding-white.svg"}
                fill
                alt="Logo Allan Coding"
                priority
                className="object-contain"
              />
            </div>
            <p className="relative paragraph text-gray-1">
              Disponível <br /> para trabalho
              <span className="absolute top-1/2 -translate-1/2 -left-3.5 size-2 bg-green-1 rounded-full"></span>
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-[40ch] text-gray-1 paragraph text-center">
            <p>Olá! Sou Allan, desenvolvedor front-end e UI/UX designer.</p>
            <p>
              Há cerca de 1 ano venho mergulhando de cabeça nesse universo, se
              você tem um projeto em mente, me chama — vamos realizá-lo juntos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
