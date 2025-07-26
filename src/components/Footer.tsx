"use client";

import { socialCopy } from "@/copy/Social";
import Image from "next/image";

export default function Footer() {
  const copy = socialCopy;
  return (
    <footer>
      <div className="container py-6">
        <div className="bg-gray-1 bg-[url('/images/noise.png')] bg-repeat bg-blend-overlay">
          <div className="flex max-[1024px]:flex-col">
            <div className="basis-full p-6 border-r-[1px] border-b-[1px] border-black/20 max-[1024px]:border-r-0">
              <h3 className="font-humane text-[11rem] leading-[0.88] uppercase title-gradient-black translate-y-2 max-[768px]:text-[6.8rem] max-[460px]:text-[6rem]">
                Algo em mente?
                <br />
                Vamos Conversar.
              </h3>
            </div>

            <div className="basis-full max-w-1/3 min-w-fit flex flex-col justify-between p-6 text-spacing text-gray-9 border-b-[1px] border-black/20 max-[1024px]:space-y-8 max-[1024px]:max-w-full">
              <p className="pt-2 max-[1024px]:p-0">contato</p>
              <div className="space-x-6 pb-3 max-[1024px]:p-0">
                <a href="" className="link-style group z-10">
                  email
                  <span className="link-decoration bg-white/80"></span>
                </a>
                <a href="" className="link-style group z-10">
                  whatsapp
                  <span className="link-decoration bg-white/80"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex max-[1024px]:flex-col">
            <div className="flex justify-between flex-wrap gap-y-20 p-6 basis-full border-r-[1px] border-black/40 max-[1024px]:border-r-0">
              <div className="basis-1/2 space-y-3">
                <h4 className="font-maragsa text-xl text-white">Confira</h4>
                <ul className="flex flex-col gap-2">
                  {copy.map(({ key, id, name, url }) => (
                    <li key={key}>
                      <a
                        className="uppercase font-humane text-6xl title-gradient-black leading-[0.8]"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="basis-1/2 flex justify-end items-start max-[1024px]:hidden">
                <Image
                  src={`/svg/logo-black-eixo-x.svg`}
                  width={99}
                  height={40}
                  alt="Logo Allan Coding"
                />
              </div>

              <div className="basis-full flex justify-between font-josefin font-light text-gray-7">
                <p>Allan Silva 2025</p>
                <p>info & créditos</p>
              </div>
            </div>

            <div className="bg-red-700 basis-full max-w-1/3">
              {/* Imagem Logo */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
