import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHeader label="Projects" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card corner group block overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[color:var(--border)]">
                  <Image
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-[22px] italic leading-tight text-[color:var(--text)]">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 text-[14px] font-light leading-relaxed text-[hsl(0_0%_60%)]">
                      {p.tagline}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 flex-none text-[color:var(--muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]"
                    size={16}
                    strokeWidth={1.5}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
