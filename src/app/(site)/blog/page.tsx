import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — CryptoTrade",
  description: "News and updates from CryptoTrade.",
};

export default function BlogPage() {
  return (
    <section className="bg-neutral-900">
      <div className="container-page py-14 sm:py-20">
        <Reveal>
          <h1 className="text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance max-w-xl">
            News & media
          </h1>
          <p className="mt-4 text-paragraph text-neutral-400 max-w-xl">
            Product updates, transparency reports and company news.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal delay={(i % 2) * 0.06} key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-neutral-700 bg-neutral-800 overflow-hidden hover:border-neutral-600 transition-colors h-full"
              >
                <div className={cn("h-40 bg-gradient-to-br", post.gradient)} />
                <div className="p-6">
                  <p className="text-body2 text-neutral-400">
                    {post.date} · {post.author}
                  </p>
                  <h2 className="mt-2 text-h4 font-semibold text-base-white group-hover:text-primary-dark transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-body1 text-neutral-400">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
