"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  // Robust reveal: fade up when scrolled into view, but never leave content
  // stuck invisible — if the element is scrolled past quickly (or the page is
  // reloaded already scrolled down), reveal it immediately.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    const alreadyPast = rect.bottom <= 0;
    if (inView || alreadyPast) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Intersecting, or already scrolled above the top → show it.
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion[as] as any;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={false}
      animate={
        reduce
          ? { opacity: shown ? 1 : 0 }
          : { opacity: shown ? 1 : 0, y: shown ? 0 : y }
      }
      transition={{
        duration: 0.65,
        delay: shown ? delay : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
