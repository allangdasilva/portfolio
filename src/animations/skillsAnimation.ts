import gsap from "gsap";

interface SkillsAnimationParams {
  skillsWrapperElement: HTMLDivElement | null;
  skillsListElement: HTMLDivElement[] | [];
}

export function skillsAnimation({
  skillsWrapperElement,
  skillsListElement,
}: SkillsAnimationParams) {
  gsap.from(skillsListElement, {
    scrollTrigger: {
      trigger: skillsWrapperElement,
      start: "top 80%",
      end: "top 40%",
      once: true,
      scrub: 1.5,
    },
    yPercent: 200,
    opacity: 0,
    stagger: 0.2,
    filter: "blur(2px)",
    ease: "expo.out",
  });
}
