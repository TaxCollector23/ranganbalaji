import { ArrowUpRight } from "lucide-react";
import { socials } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function SocialLinks() {
  return (
    <section className="section" aria-label="Social links">
      <div className="wrap">
        <div className="grid gap-4 sm:grid-cols-2">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card corner group flex items-center gap-4 p-6 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center border border-[color:var(--border-hi)] bg-[hsl(213_10%_6%)] text-[color:var(--accent)] transition-colors group-hover:border-[color:var(--accent-lo)] group-hover:text-[color:var(--accent-hi)]">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="eyebrow block">{s.label}</span>
                    <span className="mt-1 block truncate font-[family-name:var(--font-sans)] text-[15px] font-medium text-[color:var(--text)]">
                      {s.handle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="flex-none text-[color:var(--muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
