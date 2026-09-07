import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { press } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Press",
  description: "Places where I've been featured.",
};

export default function PressPage() {
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
          <h1 className="page-title">Press</h1>
          <p className="page-sub">Where I've been featured.</p>
        </Reveal>

        <ul className="work-list">
          {press.map((p, i) => (
            <Reveal
              as="li"
              key={p.href}
              delay={0.1 + i * 0.05}
              className="work-item"
            >
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
    </main>
  );
}
