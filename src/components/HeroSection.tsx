"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex items-center bg-[url(/images/hero-bg.jpg)] bg-center bg-cover bg-no-repeat">
      <div className="container flex justify-between">
        <div>
          <h1 className="font-humane text-[12.5rem] leading-[0.8] align-bottom">
            <span className="block font-maragsa text-2xl mb-5">
              UI/UX Designer &
            </span>
            FRONT-END <br />
            DEVELOPER
          </h1>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-6">
            <div className="relative w-[98px] h-[41px]">
              <Image
                src={"/svg/logo-white-eixo-x.svg"}
                fill
                alt="Logo Allan Coding"
                priority
                className="object-contain"
              />
            </div>
            <p className="font-josefin text-xl leading-6">
              Disponível <br /> para trabalho
            </p>
          </div>
          <p className="font-josefin text-xl leading-6 max-w-[40ch]">
            Sou um desenvolvedor front-end e UI/UX Designer. tenho expêriencia
            em projeto freelance, gosto de futebol e de ler livros.
          </p>
        </div>
      </div>
    </section>
  );
}
