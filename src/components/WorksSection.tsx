"use client";

import { worksCopy } from "@/copy/Works";

export default function WorksSection() {
  const copy = worksCopy;
  return (
    <section className="flex flex-col gap-20 container py-[180px]">
      <div>
        <h2 className="inline-block">
          <span className="title-gradient-responsive title-set-height leading-[0.9] ">
            TRABALHOS
          </span>
          <br />
          <span className="title-span mt-1 text-end">Selecionados</span>
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
                <h2 className="inline-block font-humane text-[6rem] leading-[0.85] bg-gradient-to-b from-white to-gray-1 bg-clip-text text-transparent max-[640px]:text-[4rem]">
                  {project}
                </h2>
                <p className="font-maragsa leading-[1] -translate-y-2 text-white max-[640px]:translate-y-0">
                  {description}
                </p>
              </div>

              <div className="w-full h-72 bg-gray-2"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6 flex-wrap">
        <a className="link-style group" href={``}>
          ver mais
          <span className="link-decoration"></span>
        </a>
        <a className="link-style group" href={``}>
          currículo
          <span className="link-decoration"></span>
        </a>
      </div>
    </section>
  );
}
