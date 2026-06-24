import { about } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHeader label="About" />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          {/* narrative */}
          <Reveal className="space-y-5">
            {about.narrative.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-[17px] font-light leading-[1.88] text-[hsl(0_0%_75%)]"
              >
                {p}
              </p>
            ))}
          </Reveal>

          {/* facts panel */}
          <Reveal delay={0.1}>
            <div className="card corner p-7">
              <Fact label="Location">
                <span className="text-[15px] text-[color:var(--text)]">
                  {about.location}
                </span>
              </Fact>

              <Divider />

              <Fact label="Focus">
                <ul className="mt-2 space-y-2">
                  {about.focus.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-[15px] text-[color:var(--text)]"
                    >
                      <span className="h-1 w-1 flex-none rounded-full bg-[color:var(--accent)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Fact>

              <Divider />

              <Fact label="Current Goal">
                <p className="mt-1 text-[15px] font-light leading-relaxed text-[hsl(0_0%_75%)]">
                  {about.goal}
                </p>
              </Fact>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Divider() {
  return <div className="my-5 h-px w-full bg-[color:var(--border)]" />;
}
