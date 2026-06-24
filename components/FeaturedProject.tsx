import { ArrowUpRight } from "lucide-react";
import { featured } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

export default function FeaturedProject() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHeader label="Featured Project" />

        <Reveal>
          <article className="card corner overflow-hidden">
            {/* header */}
            <div className="relative border-b border-[color:var(--border)] p-8 sm:p-10">
              <div
                className="pointer-events-none absolute -left-24 -top-16 h-72 w-96 opacity-70"
                style={{
                  background:
                    "radial-gradient(ellipse, hsl(213 20% 30% / 0.22) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <div className="relative flex flex-wrap items-start justify-between gap-5">
                <div>
                  <span className="badge">
                    <span className="dot" />
                    {featured.status}
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(40px,7vw,68px)] italic leading-none text-[color:var(--text)]">
                    {featured.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-[16px] font-light leading-relaxed text-[hsl(0_0%_75%)]">
                    {featured.description}
                  </p>
                </div>
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex-none"
                >
                  Visit
                  <ArrowUpRight className="btn-arr" size={14} strokeWidth={1.75} />
                </a>
              </div>
            </div>

            {/* detail blocks */}
            <div className="grid sm:grid-cols-2">
              {featured.blocks.map((b, i) => (
                <div
                  key={b.title}
                  className={[
                    "p-8 sm:p-9",
                    "border-[color:var(--border)]",
                    i % 2 === 0 ? "sm:border-r" : "",
                    i >= 2 ? "border-t" : "",
                    i === 1 ? "border-t sm:border-t-0" : "",
                  ].join(" ")}
                >
                  <p className="eyebrow flex items-center gap-3">
                    <span className="mono text-[color:var(--accent-lo)]">
                      0{i + 1}
                    </span>
                    {b.title}
                  </p>
                  <p className="mt-3 text-[15px] font-light leading-[1.8] text-[hsl(0_0%_73%)]">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>

            {/* tech footer */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-[color:var(--border)] p-7 sm:px-9">
              <span className="eyebrow mr-1">Stack</span>
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="border border-[color:var(--border)] px-3 py-1.5 font-[family-name:var(--font-sans)] text-[11px] tracking-wide text-[color:var(--muted)] transition-colors hover:border-[color:var(--accent-lo)] hover:text-[color:var(--accent)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
