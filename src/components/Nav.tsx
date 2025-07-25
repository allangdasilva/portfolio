"use client";

import { navCopy } from "@/copy/Nav";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const copy = navCopy;

  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-gradient-to-b from-black/40 to-transparent max-[640px]:from-black/60">
      <div className="container w-full flex justify-between items-center gap-6 py-6 max-sm:flex-col max-sm:gap-2">
        <Link
          className="inline-block py-3 font-maragsa text-3xl leading-[1] text-white"
          href={"/"}
        >
          Allan Silva
        </Link>
        <ul className="flex justify-between gap-6 max-[400px]:flex-col max-[400px]:items-center max-[400px]:gap-1">
          {copy.map(({ key, id, name }) => (
            <li key={key}>
              <a className="link-style group" href={`#${id}`}>
                {name}
                <span className="link-decoration"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
