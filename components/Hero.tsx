"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/data";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-glow" aria-hidden />

        <motion.p className="hero-eye" {...fade(0.1)}>
          Builder • Developer • Student
        </motion.p>

        <motion.h1 className="hero-name" {...fade(0.22)}>
          Rangan Balaji
        </motion.h1>

        <motion.div className="hero-div" {...fade(0.38)} aria-hidden>
          <div className="hdline" />
          <div className="hddot" />
        </motion.div>

        <motion.p className="hero-headline" {...fade(0.46)}>
          {site.headline}
        </motion.p>

        <motion.p className="hero-bio" {...fade(0.58)}>
          {site.intro}
          <span className="cursor" aria-hidden />
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3"
          {...fade(0.72)}
        >
          <a href="#work" className="btn btn-solid">
            View My Work
            <ArrowRight className="btn-arr" size={14} strokeWidth={1.75} />
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
