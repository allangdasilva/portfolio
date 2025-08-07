import gsap from "gsap";

interface WorksAnimationParams {
  titleElement: HTMLHeadingElement;
  worksListElement: HTMLLIElement[];
  linksElement: HTMLDivElement;
}

export function worksAnimation({
  titleElement,
  worksListElement,
  linksElement,
}: WorksAnimationParams) {
  gsap.from(titleElement.querySelectorAll(".title"), {
    scrollTrigger: {
      trigger: titleElement,
      start: "top 90%",
      end: "70% 60%",
      scrub: 1.5,
    },
    opacity: 0.4,
    xPercent: -100,
    stagger: 0.2,
    ease: "expo.out",
  });

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

  gsap.from(linksElement, {
    scrollTrigger: {
      trigger: linksElement,
      start: "top 80%",
      end: "70% 80%",
      scrub: 1.5,
    },
    opacity: 0.4,
    xPercent: -100,
    ease: "expo.out",
  });
}
