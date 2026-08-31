import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  return { title: article ? `${article.title} — CryptoTrade Learn` : "Learn — CryptoTrade" };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page pt-10 pb-14 sm:pt-16 sm:pb-20 max-w-3xl">
          <Reveal>
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 text-body1 text-neutral-400 hover:text-base-white mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Learn
            </Link>
            <span className="rounded-pill bg-neutral-800 border border-neutral-700 px-2.5 py-1 text-tag font-medium uppercase tracking-wide text-primary-dark">
              {article.category}
            </span>
            <h1 className="mt-4 text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-1.5 text-body2 text-neutral-400">
              <Clock size={13} />
              {article.readTime}
            </div>
            <div className={cn("mt-8 h-56 rounded-2xl bg-gradient-to-br", article.gradient)} />
            <p className="mt-8 text-paragraph text-neutral-300">{article.excerpt}</p>
            <div className="mt-6 space-y-5 text-body1 text-neutral-400">
              <p>
                This is placeholder article content for demonstration purposes.
                In a production build, this section would contain the full
                guide — structured with headings, examples and links to
                related Learn articles.
              </p>
              <p>
                Replace this copy with original, fact-checked educational
                content before publishing publicly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
