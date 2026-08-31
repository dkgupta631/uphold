import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} — CryptoTrade Blog` : "Blog — CryptoTrade" };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <section className="bg-neutral-900">
      <div className="container-page pt-10 pb-20 sm:pt-16 sm:pb-24 max-w-3xl">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-body1 text-neutral-400 hover:text-base-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
          <p className="text-body2 text-neutral-400">
            {post.date} · {post.author}
          </p>
          <h1 className="mt-3 text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance">
            {post.title}
          </h1>
          <div className={cn("mt-8 h-56 rounded-2xl bg-gradient-to-br", post.gradient)} />
          <p className="mt-8 text-paragraph text-neutral-300">{post.excerpt}</p>
          <div className="mt-6 space-y-5 text-body1 text-neutral-400">
            <p>
              This is placeholder post content for demonstration purposes. In
              a production build, this section would contain the full post
              body, formatted with headings, images and links.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
