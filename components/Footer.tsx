import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="wrap">
        <Reveal className="foot-inner">
          <div className="foot-links">
            <a href={`mailto:${site.email}`} className="foot-link">
              <Mail size={13} strokeWidth={1.6} />
              Email
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="foot-link"
            >
              <Github size={13} strokeWidth={1.6} />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="foot-link"
            >
              <Linkedin size={13} strokeWidth={1.6} />
              LinkedIn
            </a>
            <Link href="/socials" className="foot-link">
              All socials
            </Link>
          </div>
          <p className="foot-copy mono">© {new Date().getFullYear()} Rangan Balaji</p>
        </Reveal>
      </div>
    </footer>
  );
}
