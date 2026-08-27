import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { cn } from "@/lib/utils";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/learn/${article.slug}`}
      className="group flex flex-col rounded-2xl border border-neutral-700 bg-neutral-800 overflow-hidden hover:border-neutral-600 transition-colors"
    >
      <div className={cn("h-36 bg-gradient-to-br", article.gradient)} />
      <div className="flex flex-col flex-1 p-5">
        <span className="w-fit rounded-pill bg-neutral-700 px-2.5 py-1 text-tag font-medium uppercase tracking-wide text-primary-dark">
          {article.category}
        </span>
        <h3 className="mt-3 text-h4 font-semibold text-base-white group-hover:text-primary-dark transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-body1 text-neutral-400 flex-1">{article.excerpt}</p>
        <div className="mt-4 flex items-center gap-1.5 text-body2 text-neutral-400">
          <Clock size={13} />
          {article.readTime}
        </div>
      </div>
    </Link>
  );
}
