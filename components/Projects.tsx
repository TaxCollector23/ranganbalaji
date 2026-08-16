import Link from "next/link";
import { projects } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHeader label="Selected work" />

        <ul className="work-list">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.04} className="work-item">
              <Link href={`/${p.slug}`} className="work-row group">
                <span className="work-main">
                  <span className="work-name">{p.name}</span>
                  <span className="work-desc">{p.short}</span>
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="work-arrow"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
