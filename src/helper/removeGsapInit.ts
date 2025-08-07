import React from "react";

export function removeGsapInit(ref: React.RefObject<HTMLElement | null>) {
  if (ref.current) {
    const elements = ref.current.querySelectorAll(".gsap_init");
    elements.forEach((el) => el.classList.remove("gsap_init"));
  }
}
