import { press } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Press() {
  return (
    <section className="section" id="press">
      <div className="wrap">
        <SectionHeader label="Press" />

        <ul className="work-list">
          {press.map((p, i) => (
            <Reveal as="li" key={p.href} delay={i * 0.04} className="work-item">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="work-row group"
              >
                <span className="work-main">
                  <span className="work-name">{p.outlet}</span>
                  <span className="work-desc">{p.title}</span>
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="work-arrow"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
