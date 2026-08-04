import { projects } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHeader label="Featured Projects" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card corner group block overflow-hidden"
              >
                {/* Browser frame mockup */}
                <div className="border-b border-[color:var(--border)] bg-[hsl(0_0%_10%)]">
                  <div className="flex items-center gap-2.5 px-4 py-3">
                    <span className="flex gap-1.5">
                      <span className="h-[10px] w-[10px] rounded-full bg-[hsl(0_0%_25%)]" />
                      <span className="h-[10px] w-[10px] rounded-full bg-[hsl(0_0%_25%)]" />
                      <span className="h-[10px] w-[10px] rounded-full bg-[hsl(0_0%_25%)]" />
                    </span>
                    <span className="ml-2 font-[family-name:var(--font-mono)] text-[11px] tracking-wide text-[hsl(0_0%_40%)]">
                      {new URL(p.href).hostname}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Title and tagline */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] font-semibold leading-tight text-[color:var(--text)]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[14px] font-light leading-relaxed text-[hsl(0_0%_60%)]">
                    {p.tagline}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
