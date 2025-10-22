"use client";

import { socialCopy } from "@/copy/Social";
import useCloseModal from "@/hooks/useCloseModal";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const copy = socialCopy;
  const infosRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!infosRef.current) return;

    const focusableSelectors = "button, [href], input, select, textarea";
    const focusableElements = Array.from(
      infosRef.current?.querySelectorAll(focusableSelectors)
    );
    focusableElements.forEach((el) => {
      if (!isOpen) {
        el.setAttribute("tabIndex", "-1");
      } else {
        el.removeAttribute("tabIndex");
      }
    });
  }, [isOpen]);

  useCloseModal(infosRef, isOpen, () => setIsOpen(false));

  return (
    <footer id="contact" className="pt-17 pb-6 sm:pt-28">
      <div className="container">
        <div
          className="bg-gray-1 bg-[url('/images/noise.webp')] bg-repeat 
          bg-blend-overlay"
        >
          {/* GRID WRAPPER */}
          <div className="grid lg:grid-cols-10">
            {/* TITLE */}
            <div
              className="p-3 border-b
             border-black/10 lg:p-6 lg:col-start-1 lg:col-end-8"
            >
              <h3 className="fontDisplay title_gradient_black">
                ALGO EM MENTE?
                <br />
                VAMOS CONVERSAR.
              </h3>
            </div>

            {/* CONTACT */}
            <div
              className="p-3 min-h-48 flex flex-col place-content-between border-b
             border-black/10 lg:border-l lg:p-6 lg:col-start-8 lg:col-end-11"
            >
              <p className="fontWorksDisplay title_gradient_black">contato</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
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

            {/* INFOS/LINKS */}
            <div className="relative flex flex-col place-content-between gap-6 m-3 overflow-hidden lg:m-6 lg:col-start-1 lg:col-end-8">
              {/* LINKS/LOGO */}
              <div className="flex justify-between">
                <ul className="flex flex-col gap-2">
                  {copy.map(({ key, name, url }) => (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block pr-6 group"
                      >
                        <span className="inline-block fontWorksDisplay title_gradient_black group-hover:translate-x-6 group-focus-visible:translate-x-6 transition-transform duration-300 ease-in-out">
                          {name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  aria-hidden="true"
                  className="max-w-15 max-h-fit lg:max-w-none"
                  href="/"
                >
                  <Image
                    src={`/svg/logo-allan-coding-black.svg`}
                    width={99}
                    height={44}
                    alt=""
                  />
                </Link>
              </div>

              {/* COPY */}
              <div className="flex flex-col-reverse justify-start gap-3 min-h-34.5 lg:min-h-auto lg:flex-row lg:justify-between lg:items-center">
                {/* TEXT */}

                <p className="fontCopyInfos text-gray-7">
                  Allan Silva &copy; 2025
                </p>

                {/* INFOS */}
                <div>
                  <div className="relative ">
                    <button
                      aria-controls="infos-modal"
                      onClick={() => setIsOpen(true)}
                      className={clsx(
                        "cursor-pointer fontCopyInfos text-gray-7",
                        {
                          "pointer-events-none": isOpen,
                        }
                      )}
                      type="button"
                    >
                      infos & créditos
                    </button>
                  </div>
                </div>
              </div>

              {/* MODAL */}
              <div
                id="infos-modal"
                aria-hidden={!isOpen}
                tabIndex={isOpen ? 0 : -1}
                ref={infosRef}
                role="dialog"
                aria-modal={isOpen}
                className={clsx(
                  "absolute bottom-16 left-0 p-6 space-y-6 z-40 shadow-md transition-transform duration-300 ease-in-out bg-white lg:right-0 lg:left-auto lg:bottom-8",
                  {
                    "translate-x-0": isOpen,
                    "-translate-x-[200%]": !isOpen,
                  }
                )}
              >
                <div className="absolute right-6 top-6 fontCopyInfos text-gray-7 ">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer"
                  >
                    fechar
                  </button>
                </div>
                <div className="fontCopyInfos text-gray-7">
                  <p className="font-medium mb-1">01-fonts</p>
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
                <div className="fontCopyInfos text-gray-7">
                  <p className="font-medium mb-1">02-infos</p>
                  <p className="max-w-[40ch]">
                    Projetado no figma, desenvolvido com Next.JS | Tailwind |
                    GSAP | Lenis, imagens 3d feitas no blender
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="border-t border-black/10 lg:border-t-0 lg:border-l lg:col-start-8 lg:col-end-11">
              <Image
                className="w-full h-full object-cover"
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
