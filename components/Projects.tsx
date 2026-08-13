import { projects } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHeader label="Some of My Best Work" />

        <ol className="proj-list">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.05} className="proj-item">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-row group"
              >
                <span className="proj-index mono" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="proj-main">
                  <span className="proj-titleline">
                    <span className="proj-name">{p.name}</span>
                    <span className="proj-tag mono">{p.tag}</span>
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="proj-arrow"
                    />
                  </span>
                  <span className="proj-blurb">{p.blurb}</span>
                  <span className="proj-host mono">
                    {new URL(p.href).hostname.replace(/^www\./, "")}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
