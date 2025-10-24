"use client";

import { navCopy } from "@/copy/Nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const copy = navCopy;

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-linear-to-b from-white/60 to-transparent dark:from-black/60">
      <div className="container w-full flex flex-col justify-between items-center gap-3 py-6 sm:flex-row sm:gap-6">
        <Link href={"/"}>
          <Image
            className="block max-w-7 sm:max-w-none dark:hidden"
            src={`/svg/logo-a-coding-black.svg`}
            alt="Allan Coding"
            width={38}
            height={52}
          />
          <Image
            className="hidden max-w-7 sm:max-w-none dark:block"
            src={`/svg/logo-a-coding-white.svg`}
            alt="Allan Coding"
            width={38}
            height={52}
          />
        </Link>
        <ul className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:gap-6">
          {copy.map(({ key, id, name }) => (
            <li key={key}>
              <a
                className="fontLinks linkBase text-gray-1 group"
                href={`#${id}`}
              >
                {name}
                <span className="linkDecoration"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
