import gsap from "gsap";
import { SplitText } from "@/lib/gsap";

export function heroAnimation({
  titleElement,
  descriptionElement,
}: {
  titleElement: HTMLHeadingElement;
  descriptionElement: HTMLDivElement;
}) {
  const titleSplit = new SplitText(titleElement, {
    type: "chars, words",
    tag: "span",
    wordsClass: "word",
    charsClass: "char",
  });

  titleSplit.chars.forEach((char) => {
    char.classList.add("textLinearHero", "mix-blend-difference");
  });

  const tl = gsap.timeline();
  tl.from(titleSplit.chars, {
    yPercent: 100,
    duration: 0.6,
    ease: "expo.out",
    stagger: 0.06,
    opacity: 0,
    delay: 0.6,
  }).to(
    descriptionElement,
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
      ease: "circ.in",
    },
    "-=0.6"
  );
}
