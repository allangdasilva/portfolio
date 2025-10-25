"use client";

import { useEffect, useRef, useState } from "react";

export default function useEaseIn<T extends HTMLElement>() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, visible };
}
