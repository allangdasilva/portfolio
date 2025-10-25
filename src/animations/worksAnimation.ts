import gsap from "gsap";

interface WorksAnimationParams {
  worksListElement: HTMLLIElement[] | [];
}

export function worksAnimation({ worksListElement }: WorksAnimationParams) {
  worksListElement.forEach((work, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: work,
        start: "top 80%",
        end: "70% 60%",
        scrub: 1.5,
      },
    });
    tl.from(work, {
      opacity: 0.4,
      xPercent: index % 2 === 0 ? -100 : 100,
      ease: "expo.out",
    });
  });
}
