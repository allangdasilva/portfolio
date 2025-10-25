"use client";

import { socialCopy } from "@/copy/Social";
import useCloseModal from "@/hooks/useCloseModal";
import useEaseIn from "@/hooks/useEaseIn";
import { transitionEaseIn } from "@/types/classes";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const copy = socialCopy;
  const [isOpen, setIsOpen] = React.useState(false);
  const infosRef = React.useRef<HTMLDivElement>(null);

  // TAB NAVIGATION OFF
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

  // CLOSE MODAL
  useCloseModal(infosRef, isOpen, () => setIsOpen(false));

  // EASE IN
  const { ref: footerRef, visible: footerVisible } = useEaseIn<HTMLElement>();

  return (
    <footer
      ref={footerRef}
      id="contact"
      className={clsx(`${transitionEaseIn} pt-17 pb-6 sm:pt-28`, {
        "opacity-100": footerVisible,
      })}
    >
      <div className="container">
        <div
          className="bg-gray-1 bg-[url('/images/noise-light.jpg')] bg-repeat 
           dark:bg-[url('/images/noise-dark.webp')] dark:bg-blend-overlay"
        >
          {/* GRID WRAPPER */}
          <div className="grid lg:grid-cols-10">
            {/* TITLE */}
            <div className="p-3 border-b border-white/20 lg:p-6 lg:col-start-1 lg:col-end-8 dark:border-black/20">
              <h3 className="fontDisplay textLinearBlack uppercase">
                ALGO EM MENTE?
                <br />
                VAMOS CONVERSAR.
              </h3>
            </div>

            {/* CONTACT */}
            <div className="p-3 min-h-48 flex flex-col place-content-between border-white/20 border-b lg:border-l lg:p-6 lg:col-start-8 lg:col-end-11 dark:border-black/20">
              <h2 className="fontWorksDisplay textLinearBlack uppercase">
                contato
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2 fontLinks">
                <a
                  href="mailto:allandasilva33@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkBase group z-10"
                  style={{ color: "var(--gray-9)" }}
                >
                  email
                  <span
                    className="linkDecoration"
                    style={{ backgroundColor: "var(--gray-8)" }}
                  ></span>
                </a>
                <a
                  href="https://wa.me/5511976447685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkBase group z-10"
                  style={{ color: "var(--gray-9)" }}
                >
                  whatsapp
                  <span
                    className="linkDecoration"
                    style={{ backgroundColor: "var(--gray-8)" }}
                  ></span>
                </a>
              </div>
            </div>

            {/* INFOS/LINKS */}
            <div className="relative flex flex-col place-content-between gap-6 m-3 overflow-hidden lg:m-6 lg:col-start-1 lg:col-end-8">
              {/* LINKS/LOGO */}
              <div className="flex flex-wrap justify-between gap-6">
                <ul className="flex flex-col gap-2">
                  {copy.map(({ key, name, url }) => (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block pr-6 group"
                      >
                        <span className="inline-block fontWorksDisplay textLinearBlack uppercase group-hover:translate-x-6 group-focus-visible:translate-x-6 transition-transform duration-400 ease-[cubic-bezier(0.85,0.09,0.15,0.91)]">
                          {name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  aria-hidden="true"
                  className="max-w-15 max-h-7 transition-transform duration-400 ease-[cubic-bezier(0.85,0.09,0.15,0.91)] hover:scale-95 focus-visible:scale-95 lg:max-w-none lg:max-h-11"
                  href="/"
                >
                  <Image
                    className="block dark:hidden"
                    src={`/svg/logo-allan-coding-white.svg`}
                    width={99}
                    height={44}
                    alt=""
                  />
                  <Image
                    className="hidden dark:block"
                    src={`/svg/logo-allan-coding-black.svg`}
                    width={99}
                    height={44}
                    alt=""
                  />
                </Link>
              </div>

              {/* COPY */}
              <div className="flex flex-col-reverse justify-start gap-3 min-h-34.5 lg:min-h-auto">
                {/* TEXT */}

                <p className="fontCopyInfos text-gray-7">
                  Allan Coding &copy; 2025
                </p>

                {/* INFOS */}
                <div>
                  <div className="relative ">
                    <button
                      aria-controls="infos-modal"
                      onClick={() => setIsOpen(true)}
                      className={clsx(
                        "cursor-pointer fontCopyInfos text-gray-7 transition-colors duration-200 ease-[cubic-bezier(0.85,0.09,0.15,0.91)] hover:text-gray-10 focus-visible:text-gray-10",
                        {
                          "pointer-events-none text-gray-10": isOpen,
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
                  "absolute bottom-16 left-0 p-6 space-y-6 z-40 shadow-md -translate-x-[105%] transition-transform duration-400 ease-[cubic-bezier(0.85,0.09,0.15,0.91)] bg-white",
                  {
                    "translate-x-0": isOpen,
                  }
                )}
              >
                <div className="absolute right-6 top-6">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="fontCopyInfos text-gray-7 cursor-pointer transition-colors duration-200 ease-[cubic-bezier(0.85,0.09,0.15,0.91)] hover:text-gray-1 focus-visible:text-gray-1 dark:hover:text-gray-9 dark:focus-visible:text-gray-9"
                  >
                    fechar
                  </button>
                </div>
                <div className="fontCopyInfos text-gray-5">
                  <p className="font-medium mb-1">01-fonts</p>
                  <p>
                    <a
                      className="underline transition-colors duration-200 ease-[cubic-bezier(0.85,0.09,0.15,0.91)] hover:text-gray-1 focus-visible:text-gray-1 dark:hover:text-gray-9 dark:focus-visible:text-gray-9"
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
                      className="underline transition-colors duration-200 ease-[cubic-bezier(0.85,0.09,0.15,0.91)] hover:text-gray-1 focus-visible:text-gray-1 dark:hover:text-gray-9 dark:focus-visible:text-gray-9"
                      href="https://fonts.google.com/specimen/DM+Sans?query=Colophon+Foundry"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DM Sans
                    </a>{" "}
                    por Colophon Foundry
                  </p>
                </div>
                <div className="fontCopyInfos text-gray-5">
                  <p className="font-medium mb-1">02-infos</p>
                  <p className="max-w-[45ch]">
                    Projetado no figma, desenvolvido com Next.JS | Tailwind |
                    GSAP | Lenis, imagens 3d feitas no blender
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="border-t border-white/20 lg:border-t-0 lg:border-l lg:col-start-8 lg:col-end-11 dark:border-black/20">
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
