"use client";

import { navCopy } from "@/copy/Nav";
import Link from "next/link";

export default function Nav() {
  const copy = navCopy;

  return (
    <nav className="fixed w-full top-0 left-0">
      <div className="container w-full flex justify-between items-center gap-6 py-6 max-sm:flex-col max-sm:gap-2">
        <Link
          className="inline-block py-3 font-maragsa text-3xl leading-[1.625rem] text-white"
          href={"/"}
        >
          Allan Silva
        </Link>
        <ul className="flex justify-between gap-6 max-[332px]:flex-col max-[332px]:items-center max-[332px]:gap-1">
          {copy.map(({ key, id, name }) => (
            <li className="font-josefin text-xl text-gray-1" key={key}>
              <a
                className="relative inline-block py-3 pr-6 leading-6 tracking-[0.18em] group"
                href={`#${id}`}
              >
                {name}
                <span className="link"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
