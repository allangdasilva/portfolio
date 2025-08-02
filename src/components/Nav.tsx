"use client";

import { navCopy } from "@/copy/Nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const copy = navCopy;

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-b from-black/40 to-transparent max-[640px]:from-black/60">
      <div className="container w-full flex justify-between items-center gap-6 py-6 max-sm:flex-col max-sm:gap-2">
        <Link className="inline-block" href={"/"}>
          <Image
            src={`/svg/logo-a-coding-white.svg`}
            alt="Logo Allan Coding"
            width={38}
            height={52}
          />
        </Link>
        <ul className="flex justify-between gap-6 max-[400px]:flex-col max-[400px]:items-center max-[400px]:gap-1">
          {copy.map(({ key, id, name }) => (
            <li key={key}>
              <a className="link_text link_style group" href={`#${id}`}>
                {name}
                <span className="link_decoration"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
