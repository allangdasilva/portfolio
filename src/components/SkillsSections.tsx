"use client";

import Image from "next/image";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="container pt-[24px] pb-[180px] flex flex-col items-center gap-20 bg-gray-10"
    >
      <h2 className="text-center uppercase title-gradient-white">
        Eu Construo Sites
        <br />
        na Junção de
      </h2>
      <div className="flex flex-wrap items-end justify-center gap-y-10 gap-x-32">
        <div className="flex flex-col items-center basis-full gap-2 text-white">
          <Image
            src={`/svg/performance-icon.svg`}
            width={42}
            height={42}
            alt="Performance icon"
          />
          <p>performance</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <Image
            src={`/svg/aesthetic-icon.svg`}
            width={42}
            height={38}
            alt="Aesthetic icon"
          />
          <p>estética</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <Image
            src={`/svg/strategy-icon.svg`}
            width={42}
            height={42}
            alt="Strategy icon"
          />
          <p>estratégia</p>
        </div>
      </div>
    </section>
  );
}
