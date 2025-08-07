import gsap from "gsap";

interface SkillsAnimationParams {
  titleElement: HTMLHeadingElement;
  skillsContentElement: HTMLDivElement;
  skillsListElement: HTMLDivElement[];
}

export function skillsAnimation({
  titleElement,
  skillsContentElement,
  skillsListElement,
}: SkillsAnimationParams) {
  gsap.from(titleElement, {
    scrollTrigger: {
      trigger: titleElement,
      start: "top 80%",
      end: "top 40%",
      scrub: 1.5,
    },
    opacity: 0.4,
  });

  gsap.from(skillsListElement, {
    scrollTrigger: {
      trigger: skillsContentElement,
      start: "top 80%",
      end: "top 40%",
      scrub: 1.5,
    },
    yPercent: 200,
    opacity: 0,
    stagger: 0.2,
    filter: "blur(2px)",
    ease: "expo.out",
  });
}
