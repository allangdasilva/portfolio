"use client";

import { worksCopy } from "@/copy/Works";

export default function WorksSection() {
  const copy = worksCopy;

  return (
    <section
      id="works"
      className="flex flex-col gap-20 container py-[180px] bg-gray-10"
    >
      <div>
        <h2 className="inline-block">
          <span className="title-gradient-white">TRABALHOS</span>
          <br />
          <span className="text-end">Selecionados</span>
        </h2>
      </div>
      <div>
        <ul className="flex flex-col gap-[60px]">
          {copy.map(({ key, project, description, url }, index) => (
            <li
              className={`flex items-center gap-6 ${
                index % 2 === 0
                  ? "flex-row-reverse max-[640px]:items-start"
                  : "max-[640px]:items-end max-[640px]:text-end"
              } max-[640px]:flex-col max-[640px]:gap-4 `}
              key={key}
            >
              <div className="w-full max-w-fit">
                <h2 className="inline-block title-gradient-white">{project}</h2>
                <p className="text-white">{description}</p>
              </div>

              <div className="w-full h-72 bg-gray-2"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6 flex-wrap">
        <a className="group" href={``}>
          ver mais
          <span className="link-decoration"></span>
        </a>
        <a className="group" href={``}>
          currículo
          <span className="link-decoration"></span>
        </a>
      </div>
    </section>
  );
}
