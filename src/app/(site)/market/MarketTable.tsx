"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Search } from "lucide-react";
import { assets, type Asset } from "@/data/assets";
import { AssetRowDesktop, AssetRowMobile } from "@/components/AssetRow";
import { cn } from "@/lib/utils";

type SortKey = keyof Pick<
  Asset,
  "rank" | "price" | "change24h" | "change7d" | "marketCap" | "volume"
>;

const PAGE_SIZE = 8;

const COLUMNS: { key: SortKey; label: string; className?: string }[] = [
  { key: "rank", label: "Rank" },
  { key: "price", label: "Price" },
  { key: "change24h", label: "24h %" },
  { key: "change7d", label: "7d %", className: "hidden lg:table-cell" },
  { key: "marketCap", label: "Market cap", className: "hidden lg:table-cell" },
  { key: "volume", label: "Volume", className: "hidden xl:table-cell" },
];

export default function MarketTable() {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = q
      ? assets.filter(
          (a) => a.name.toLowerCase().includes(q) || a.ticker.toLowerCase().includes(q)
        )
      : assets;

    return [...rows].sort((a, b) => {
      const diff = a[sortKey] - b[sortKey];
      return sortAsc ? diff : -diff;
    });
  }, [query, sortKey, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortAsc((v) => !v);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
    setPage(1);
  };

  return (
    <div>
      <div className="relative max-w-sm mb-6">
        <Search
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search assets"
          className="w-full rounded-pill border border-neutral-700 bg-neutral-800 py-2.5 pl-10 pr-4 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
        />
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-neutral-700 text-left">
              <th className="py-3 pl-2 text-body2 font-medium text-neutral-400">#</th>
              <th className="py-3 text-body2 font-medium text-neutral-400">Asset</th>
              {COLUMNS.slice(1).map((col) => (
                <th key={col.key} className={cn("py-3 text-body2 font-medium text-neutral-400", col.className)}>
                  <button
                    onClick={() => toggleSort(col.key)}
                    className="inline-flex items-center gap-1 hover:text-base-white transition-colors"
                  >
                    {col.label}
                    <ArrowUpDown size={12} />
                  </button>
                </th>
              ))}
              <th className="py-3 pr-2 hidden md:table-cell text-body2 font-medium text-neutral-400">
                Last 16h
              </th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((asset) => (
              <AssetRowDesktop asset={asset} key={asset.ticker} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked list */}
      <div className="sm:hidden">
        {pageRows.map((asset) => (
          <AssetRowMobile asset={asset} key={asset.ticker} />
        ))}
      </div>

      {pageRows.length === 0 && (
        <p className="py-10 text-center text-body1 text-neutral-400">
          No assets match &ldquo;{query}&rdquo;.
        </p>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "w-9 h-9 rounded-full text-body1 font-medium transition-colors",
                p === page
                  ? "bg-primary-dark text-neutral-900"
                  : "text-neutral-400 hover:text-base-white hover:bg-neutral-800"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
