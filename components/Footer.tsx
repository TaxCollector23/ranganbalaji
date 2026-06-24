import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Footer() {
  return (
    <footer className="section" id="contact">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(32px,5vw,52px)] italic leading-none text-[color:var(--text)]">
            {site.name}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="btn"
            >
              <Mail size={14} strokeWidth={1.6} />
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Github size={14} strokeWidth={1.6} />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Linkedin size={14} strokeWidth={1.6} />
              LinkedIn
            </a>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[color:var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-[family-name:var(--font-serif)] text-[15px] font-light italic text-[color:var(--muted)]">
              Built with curiosity and a focus on creating useful things.
            </p>
            <p className="mono text-[11px] text-[hsl(0_0%_28%)]">
              © {new Date().getFullYear()} Rangan Balaji
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
