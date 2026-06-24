import { interests } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

export default function Interests() {
  return (
    <section className="section" id="interests">
      <div className="wrap">
        <SectionHeader label="Areas of Interest" />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="card corner group h-full p-7">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center border border-[color:var(--border-hi)] bg-[hsl(213_10%_6%)] text-[color:var(--accent)] transition-colors group-hover:border-[color:var(--accent-lo)] group-hover:text-[color:var(--accent-hi)]">
                    <Icon size={19} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-[family-name:var(--font-sans)] text-[15px] font-medium text-[color:var(--text)] transition-colors group-hover:text-[color:var(--accent-hi)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-light leading-[1.7] text-[hsl(0_0%_58%)]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
