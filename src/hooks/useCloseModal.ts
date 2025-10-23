"use client";

import { useEffect } from "react";

export default function useCloseModal<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  isOpen: boolean,
  onClose: () => void
) {
  // CLOSE OUTSIDECLICK
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (ref.current && ref.current.contains(target)) return;

      onClose();
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [ref, isOpen, onClose]);

  // FOCUS TRAP
  useEffect(() => {
    if (!ref.current || !isOpen) return;

    const focusableSelectors = "button, [href], input, select, textarea";
    const focusableElements = Array.from(
      ref.current.querySelectorAll<HTMLElement>(focusableSelectors)
    );

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    firstEl?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, isOpen]);
}
