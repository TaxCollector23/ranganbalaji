"use client";

import { motion } from "framer-motion";
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
      </div>
    </section>
  );
}
