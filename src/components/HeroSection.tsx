"use client";

import Image from "next/image";
import React from "react";
import { useGSAP } from "@/lib/gsap";
import { heroAnimation } from "@/animations/heroAnimation";

export default function HeroSection() {
  const heroRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const descRef = React.useRef<HTMLDivElement>(null);

  useGSAP();
  // () => {
  //   if (!titleRef.current || !descRef.current) return;

  //   heroAnimation({
  //     titleElement: titleRef.current,
  //     descElement: descRef.current,
  //   });
  // },
  // { scope: heroRef }

  return (
    <section ref={heroRef} className="pt-48.5 sm:pt-25">
      <div className="container flex flex-col items-center justify-center gap-8 pt-3 pb-17 sm:pb-28 sm:gap-14">
        {/* TITLE */}
        <div className="relative py-9 sm:py-14">
          <h1
            ref={titleRef}
            className="fontDisplay text-center textLinearWhite uppercase mix-blend-difference [&_.word]:whitespace-nowrap 
            [&_.char]:inline-block "
          >
            Dev Front-End & <br className="hidden sm:block" /> Ui/Ux Designer
          </h1>
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/images/david-bust-hero.webp')] bg-center bg-contain bg-no-repeat -z-10"
          ></span>
        </div>

        {/* TEXT */}
        <div className="flex flex-col items-center gap-6" ref={descRef}>
          <div className="flex gap-6">
            <Image
              src={"/svg/logo-allan-coding-white.svg"}
              alt="Allan Coding"
              priority
              width={98}
              height={43}
            />
            <p className="relative fontBody text-gray-1">
              Disponível <br /> para trabalho
              <span className="absolute top-1/2 -translate-1/2 -left-3.5 size-2 bg-green-1 rounded-full"></span>
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-[45ch] fontBody text-gray-1 text-center">
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
