"use client";

import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText, useGSAP);

export default function HeroSection() {
  useGSAP(() => {
    // const titleSplit = new SplitText("#hero_title", { type: "chars, word" });
    // gsap.from(titleSplit.chars, {
    //   yPercent: 130,
    //   opacity: 0,
    //   stagger: 0.06,
    //   duration: 1,
    //   ease: "expo.out",
    // });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full pt-[100px] pb-40 flex bg-gray-10 bg-red-700"
    >
      <div className="container flex flex-col items-center gap-40">
        <div className="mt-20">
          <h1
            id="hero_title"
            className="main_title title-gradient-white text-center"
          >
            FRONT-END DEVELOPER & <br />
            UI/UX DESIGNER
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6">
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
