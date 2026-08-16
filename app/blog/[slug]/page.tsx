import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPost, posts } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="page">
      <div className="wrap wrap-narrow">
        <Reveal>
          <Link href="/blog" className="back-link">
            <ArrowLeft size={13} strokeWidth={1.6} />
            Blog
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="post-date mono">{post.date}</p>
          <h1 className="page-title">{post.title}</h1>
        </Reveal>

        <Reveal delay={0.1} className="page-body">
          {post.body.map((para, i) => (
            <p key={i} className="page-p">
              {para}
            </p>
          ))}
        </Reveal>
      </div>
    </main>
  );
}
