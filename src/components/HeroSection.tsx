"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full hero-pt pb-[180px] flex bg-[url(/images/hero-bg.webp)] bg-center bg-cover bg-no-repeat bg-gray-10">
      <div className="container flex justify-between max-lg:flex-col max-lg:gap-8">
        <div>
          <h1 className="title-responsive title-gradient-white h-[432px] max-[1280px]:h-[388px] max-[1024px]:h-auto">
            <span className="title-span mb-4">UI/UX Designer &</span>
            FRONT-END <br />
            DEVELOPER
          </h1>
        </div>
        <div className="flex flex-col justify-between max-lg:gap-4">
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
            <p className="relative font-josefin font-light text-xl leading-6 text-gray-1">
              Disponível <br /> para trabalho
              <span className="absolute top-1/2 -translate-1/2 -left-4 size-2 bg-green-1 rounded-full"></span>
            </p>
          </div>
          <div className="flex flex-col gap-2 font-josefin text-xl leading-6 max-w-[40ch] text-gray-1">
            <p>Olá! Sou Allan, desenvolvedor front-end e UI/UX designer.</p>
            <p>
              Há cerca de 1 ano venho mergulhando de cabeça nesse universo, meu
              foco é transformar ideias em interfaces bonitas, funcionais e
              intuitivas.
            </p>
            <p>
              Se você tem um projeto em mente, me chama — vamos realizá-lo
              juntos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
