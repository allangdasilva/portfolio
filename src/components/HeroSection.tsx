"use client";

import Image from "next/image";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { heroAnimation } from "@/animations/heroAnimation";
import { removeGsapInit } from "@/helper/removeGsapInit";

export default function HeroSection() {
  const heroRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const descRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      removeGsapInit(heroRef);

      if (!titleRef.current || !descRef.current) return;

      heroAnimation({
        titleElement: titleRef.current,
        descElement: descRef.current,
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-[100px] pb-20 flex bg-gray-10 
      max-[640px]:pt-[149.5px] max-[400px]:pt-[195px]"
    >
      <div className="container flex flex-col items-center">
        <div className="pb-20 pt-15">
          <h1
            ref={titleRef}
            className="main_title text-center [&_.word]:whitespace-nowrap 
            [&_.char]:inline-block gsap_init will-change-transform"
            suppressHydrationWarning
          >
            FRONT-END DEVELOPER & <br className="max-sm:hidden" /> UI/UX
            DESIGNER
          </h1>
        </div>

        <div
          className="flex flex-col items-center gap-6 gsap_init clip-path 
          will-change-auto clip_desc"
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
