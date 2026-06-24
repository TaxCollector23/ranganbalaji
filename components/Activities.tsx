import { activities } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

export default function Activities() {
  return (
    <section className="section" id="activities">
      <div className="wrap">
        <SectionHeader label="Activities & Leadership" />

        <div className="space-y-12">
          {activities.map((group, gi) => (
            <div key={group.group}>
              <Reveal>
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="font-[family-name:var(--font-sans)] text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text)]">
                    {group.group}
                  </h3>
                  <span className="mono text-[10px] text-[color:var(--accent-lo)]">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.title} delay={(gi * 0.04) + i * 0.05}>
                    <div className="card group h-full p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-[family-name:var(--font-sans)] text-[15px] font-medium leading-snug text-[color:var(--text)] transition-colors group-hover:text-[color:var(--accent-hi)]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mono mt-2 text-[10px] uppercase tracking-wide text-[color:var(--accent-lo)]">
                        {item.meta}
                      </p>
                      <p className="mt-4 text-[14px] font-light leading-[1.7] text-[hsl(0_0%_58%)]">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
