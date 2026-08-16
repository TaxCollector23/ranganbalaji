import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProject, projects } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.short,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const host = new URL(project.href).hostname.replace(/^www\./, "");

  return (
    <main className="page">
      <div className="wrap">
        <Reveal>
          <Link href="/" className="back-link">
            <ArrowLeft size={13} strokeWidth={1.6} />
            Back
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="page-title">{project.name}</h1>
          <p className="page-sub">{project.short}</p>
        </Reveal>

        <Reveal delay={0.1} className="page-body">
          <p className="page-p">{project.what}</p>

          <h2 className="page-h2">Why I built it</h2>
          <p className="page-p">{project.why}</p>

          <div className="page-links">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Open full site
              <ArrowUpRight size={13} strokeWidth={1.6} className="btn-arr" />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Github size={13} strokeWidth={1.6} />
                GitHub
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.14} className="embed">
          <div className="embed-bar">
            <span className="embed-dots" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span className="embed-host mono">{host}</span>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="embed-open mono"
            >
              Open
              <ArrowUpRight size={12} strokeWidth={1.7} />
            </a>
          </div>
          <iframe
            src={project.href}
            title={`${project.name} live preview`}
            className="embed-frame"
            loading="lazy"
            allow="clipboard-write; fullscreen"
          />
        </Reveal>
      </div>
    </main>
  );
}
