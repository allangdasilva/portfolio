"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full hero-pt pb-[180px] flex bg-[url(/images/hero-bg.avif)] bg-center bg-cover bg-no-repeat ">
      <div className="container flex justify-between max-lg:flex-col max-lg:gap-8">
        <div>
          <h1 className="title-gradient-responsive h-[432px] max-[1280px]:h-[388px] max-[1024px]:h-auto">
            <span className="block font-maragsa text-2xl mb-4 text-white">
              UI/UX Designer &
            </span>
            FRONT-END <br />
            DEVELOPER
          </h1>
        </div>
        <div className="flex flex-col justify-between max-lg:gap-2">
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
            <p className="font-josefin font-light text-xl leading-6 text-gray-1">
              Disponível <br /> para trabalho
            </p>
          </div>
          <p className="font-josefin text-xl leading-6 max-w-[40ch] text-gray-1">
            Sou um desenvolvedor front-end e UI/UX Designer. tenho expêriencia
            em projeto freelance, gosto de futebol e de ler livros.
          </p>
        </div>
      </div>
    </section>
  );
}
