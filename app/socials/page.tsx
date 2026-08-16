import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { socials } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Socials",
  description: "Where to find me and how to get in touch.",
};

export default function SocialsPage() {
  return (
    <main className="page">
      <div className="wrap wrap-narrow">
        <Reveal>
          <Link href="/" className="back-link">
            <ArrowLeft size={13} strokeWidth={1.6} />
            Back
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="page-title">Socials</h1>
          <p className="page-sub">The best ways to reach me.</p>
        </Reveal>

        <ul className="social-list">
          {socials.map((s, i) => {
            const Icon = s.icon;
            const inner = (
              <>
                <span className="social-left">
                  <Icon size={17} strokeWidth={1.6} className="social-icon" />
                  <span className="social-label">{s.label}</span>
                </span>
                <span className="social-handle mono">{s.handle}</span>
              </>
            );
            return (
              <Reveal
                as="li"
                key={s.label}
                delay={0.1 + i * 0.05}
                className="social-item"
              >
                {s.href ? (
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="social-row"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="social-row social-static">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
