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
              className={`flex  items-center gap-6 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              key={key}
            >
              <div>
                <h2>{project}</h2>
                <p>{description}</p>
              </div>

              <div className="w-full h-72 bg-gray-2"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
