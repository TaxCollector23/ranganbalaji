import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on the things I build and why I build them.",
};

export default function BlogIndex() {
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
          <h1 className="page-title">Blog</h1>
          <p className="page-sub">Notes on the things I build and why.</p>
        </Reveal>

        <ul className="post-list">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={0.1 + i * 0.05} className="post-item">
              <Link href={`/blog/${post.slug}`} className="post-row">
                <span className="post-date mono">{post.date}</span>
                <span className="post-main">
                  <span className="post-title">{post.title}</span>
                  <span className="post-summary">{post.summary}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </main>
  );
}
