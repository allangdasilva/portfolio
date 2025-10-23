import { technologiesCopy } from "@/copy/Technologies";
import clsx from "clsx";

export default function TechnologiesSection() {
  return (
    <section className="py-17 sm:py-28">
      <div className="container flex flex-col gap-11.5 sm:gap-23">
        <h2 className="fontDisplay uppercase">Tecnologias</h2>
        <ul>
          {technologiesCopy.map(({ key, title, description }, index) => (
            <li
              key={key}
              className={clsx(
                "grid gap-3 py-6 border-b border-gray-1/20 lg:grid-cols-10",
                {
                  "pt-0": index === 0,
                }
              )}
            >
              <h3 className="fontWorksDisplay uppercase lg:col-span-5">
                {title}
              </h3>
              <p className="fontBody max-w-[45ch] lg:col-span-5">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
