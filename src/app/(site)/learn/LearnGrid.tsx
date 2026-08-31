"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { articles, categories } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { cn } from "@/lib/utils";

export default function LearnGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery =
        !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="relative max-w-md mx-auto mb-8">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles"
          className="w-full rounded-pill border border-neutral-700 bg-neutral-800 py-3 pl-11 pr-4 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-pill px-4 py-2 text-body1 font-medium border transition-colors",
              category === cat
                ? "bg-primary-dark text-neutral-900 border-primary-dark"
                : "border-neutral-700 text-neutral-400 hover:text-base-white hover:border-neutral-500"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      ) : (
        <p className="text-center text-body1 text-neutral-400 py-10">
          No articles match your search.
        </p>
      )}
    </div>
  );
}
