"use client";

import { socialCopy } from "@/copy/Social";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const copy = socialCopy;
  const infosRef = React.useRef<HTMLDivElement>(null);

  function handleInfos() {
    infosRef.current?.classList.toggle("hidden");
  }

  return (
    <footer id="contact" className="pt-20 pb-6 bg-gray-10">
      <div className="container">
        <div
          className="bg-gray-1 bg-[url('/images/noise.webp')] bg-repeat 
          bg-blend-overlay"
        >
          <div className="flex max-lg:flex-col">
            <div
              className="basis-full p-6 border-r border-b
             border-black/10 max-lg:border-r-0"
            >
              <h3 className="fontDisplay title_gradient_black">
                ALGO EM MENTE?
                <br />
                VAMOS CONVERSAR.
              </h3>
            </div>

            <div
              className="basis-full max-w-1/3 min-w-fit flex flex-col 
            justify-between p-6 text-gray-9 border-b border-black/10 
            max-lg:space-y-8 max-lg:max-w-full"
            >
              <p className="fontWorksDisplay w-fit">contato</p>
              <div className="space-x-6">
                <a
                  href="mailto:allandasilva33@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fontLinks linkBase group z-10"
                  style={{ color: "var(--gray-9)" }}
                >
                  email
                  <span
                    className="linkDecoration"
                    style={{ backgroundColor: "#0000001f" }}
                  ></span>
                </a>
                <a
                  href="https://wa.me/5511976447685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fontLinks linkBase group z-10"
                  style={{ color: "var(--gray-9)" }}
                >
                  whatsapp
                  <span
                    className="linkDecoration"
                    style={{ backgroundColor: "#0000001f" }}
                  ></span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex max-lg:flex-col">
            <div
              className="flex justify-between flex-wrap p-6 basis-full overflow-hidden
              gap-y-37 border-r border-black/10 max-lg:border-r-0 max-lg:gap-8"
            >
              <div className="basis-1/2 space-y-3">
                <ul className="flex flex-col">
                  {copy.map(({ key, name, url }) => (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block fontWorksDisplay title_gradient_black hover:scale-95 focus:scale-95 transition-all"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="basis-1/2 flex justify-end items-start 
                max-lg:hidden"
              >
                <Link href="/">
                  <Image
                    src={`/svg/logo-allan-coding-black.svg`}
                    width={99}
                    height={44}
                    alt="Logo Allan Coding"
                  />
                </Link>
              </div>

              <div
                className="basis-full self-end flex flex-wrap justify-between 
                gap-1 text-gray-7 fontCopyInfos max-sm:flex-col"
              >
                <p>Allan Silva &copy; 2025</p>
                <div className="relative flex justify-end flex-1 max-sm:justify-start">
                  <div
                    ref={infosRef}
                    className="absolute top-0 right-0 p-6 space-y-6
                    -translate-y-[calc(100%+8px)] hidden z-40 shadow-md 
                    bg-white bg-[url('/images/noise.webp')] bg-blend-overlay 
                    bg-contain max-sm:p-3 max-sm:left-0 max-sm:space-y-3 copyInfosAnimation"
                  >
                    <div className="text-sm max-sm:text-xs">
                      <p className="font-medium">01-fonts</p>
                      <p>
                        <a
                          className="underline"
                          href="https://www.behance.net/dalerms"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          KRISHA
                        </a>{" "}
                        por Mukhiddinov
                      </p>
                      <p>
                        <a
                          className="underline"
                          href="https://fonts.google.com/specimen/DM+Sans?query=Colophon+Foundry"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          DM Sans
                        </a>{" "}
                        por Colophon Foundry
                      </p>
                    </div>
                    <div className="text-sm max-sm:text-xs">
                      <p className="font-medium">02-infos</p>
                      <p className="max-w-[40ch]">
                        Projetado no figma, desenvolvido com Next.JS | Tailwind
                        | GSAP | Lenis, imagens 3d feitas no blender
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleInfos}
                    className="cursor-pointer max-sm:text-start"
                  >
                    infos & créditos
                  </button>
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-center basis-full max-w-1/3 
              max-lg:max-w-full"
            >
              <Image
                src={"/images/david-bust.webp"}
                alt="Busto David 3d"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
