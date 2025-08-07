import gsap from "gsap";
import { SplitText } from "@/lib/gsap";

export function heroAnimation({
  titleElement,
  descElement,
}: {
  titleElement: HTMLHeadingElement;
  descElement: HTMLDivElement;
}) {
  const titleSplit = new SplitText(titleElement, {
    type: "chars, words",
    tag: "span",
    wordsClass: "word",
    charsClass: "char",
  });

  titleSplit.chars.forEach((char) => {
    char.classList.add("title_gradient_white");
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
    descElement,
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
      ease: "expo.out",
    },
    "-=0.4"
  );
}
