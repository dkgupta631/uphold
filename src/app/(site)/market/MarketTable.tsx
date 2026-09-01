"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpDown, Search } from "lucide-react";
import {
  assets,
  CURRENCY_RATES,
  CURRENCY_SYMBOLS,
  type Asset,
  type CategoryKey,
  type Currency,
  type Period,
} from "@/data/assets";
import { AssetRowDesktop, AssetRowMobile } from "@/components/AssetRow";
import SelectPill from "@/components/SelectPill";
import { cn } from "@/lib/utils";

type SortKey = "name" | "price" | "change" | "marketCap" | "volume" | "supply";

const PAGE_SIZE = 8;

const COLUMNS: { key: SortKey; label: string; className?: string }[] = [
  { key: "price", label: "Mid-market price" },
  { key: "change", label: "Change" },
  { key: "marketCap", label: "Market Cap", className: "hidden lg:table-cell" },
  { key: "volume", label: "Volume (24h)", className: "hidden lg:table-cell" },
  { key: "supply", label: "Supply", className: "hidden xl:table-cell" },
];

const CATEGORIES: { key: CategoryKey | "ALL"; label: string }[] = [
  { key: "ALL", label: "All assets" },
  { key: "MOST_BOUGHT", label: "Most bought" },
  { key: "RECENTLY_ADDED", label: "Recently added" },
  { key: "CRYPTO", label: "Cryptocurrencies" },
  { key: "FIAT", label: "FIAT" },
  { key: "UTILITY", label: "Utility Tokens" },
  { key: "COMMODITY", label: "Commodities" },
  { key: "STABLECOIN", label: "Stablecoins" },
];

const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: "1H", label: "1H" },
  { value: "1D", label: "1D" },
  { value: "1W", label: "1W" },
  { value: "1M", label: "1M" },
  { value: "1Y", label: "1Y" },
];

const CURRENCY_OPTIONS: { value: Currency; label: string }[] = [
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
  { value: "USD", label: "USD" },
];

function getSortValue(asset: Asset, key: SortKey, period: Period): number | string {
  switch (key) {
    case "name":
      return asset.name;
    case "price":
      return asset.price;
    case "change":
      return asset.changes[period];
    case "marketCap":
      return asset.marketCap;
    case "volume":
      return asset.volume;
    case "supply":
      return asset.supply;
  }
}

export default function MarketTable() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey | "ALL">("MOST_BOUGHT");
  const [period, setPeriod] = useState<Period>("1D");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [sortKey, setSortKey] = useState<SortKey>("marketCap");
  const [sortAsc, setSortAsc] = useState(false);
  const [page, setPage] = useState(1);

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = category === "ALL" ? assets : assets.filter((a) => a.categories.includes(category));
    if (q) {
      rows = rows.filter(
        (a) => a.name.toLowerCase().includes(q) || a.ticker.toLowerCase().includes(q)
      );
    }

    return [...rows].sort((a, b) => {
      const av = getSortValue(a, sortKey, period);
      const bv = getSortValue(b, sortKey, period);
      if (typeof av === "string" && typeof bv === "string") {
        return sortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      const diff = (av as number) - (bv as number);
      return sortAsc ? diff : -diff;
    });
  }, [query, category, sortKey, sortAsc, period]);

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

  const selectCategory = (key: CategoryKey | "ALL") => {
    setCategory(key);
    setPage(1);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-6">
        <h2 className="text-h2 sm:text-h1 font-semibold text-neutral-900">Market Prices</h2>
        <div className="relative w-full sm:w-72">
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
            className="w-full rounded-pill border border-neutral-200 bg-neutral-100/60 py-2.5 pl-10 pr-4 text-body1 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-primary-light transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const active = c.key === category;
            return (
              <button
                key={c.key}
                onClick={() => selectCategory(c.key)}
                className="relative rounded-pill px-4 py-2 text-body2 font-medium transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="category-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-pill bg-primary-dark"
                  />
                )}
                <span
                  className={cn(
                    "relative z-10",
                    active ? "text-base-white" : "text-neutral-600 hover:text-neutral-900"
                  )}
                >
                  {c.label}
                </span>
                {!active && (
                  <span className="absolute inset-0 rounded-pill border border-neutral-200" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <SelectPill value={period} options={PERIOD_OPTIONS} onChange={setPeriod} />
          <SelectPill value={currency} options={CURRENCY_OPTIONS} onChange={setCurrency} />
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 text-left">
              <th className="py-3 pl-2 text-body2 font-medium text-neutral-500">
                <button
                  onClick={() => toggleSort("name")}
                  className="inline-flex items-center gap-1 hover:text-neutral-900 transition-colors"
                >
                  Name
                  <ArrowUpDown size={12} />
                </button>
              </th>
              {COLUMNS.map((col) => (
                <th key={col.key} className={cn("py-3 text-body2 font-medium text-neutral-500", col.className)}>
                  <button
                    onClick={() => toggleSort(col.key)}
                    className="inline-flex items-center gap-1 hover:text-neutral-900 transition-colors"
                  >
                    {col.label}
                    <ArrowUpDown size={12} />
                  </button>
                </th>
              ))}
              <th className="py-3 pr-2" />
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout" initial={false}>
              {pageRows.map((asset) => (
                <motion.tr
                  key={asset.ticker}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                >
                  <AssetRowDesktop asset={asset} change={asset.changes[period]} symbol={symbol} rate={rate} />
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Mobile stacked list */}
      <div className="sm:hidden">
        {pageRows.map((asset) => (
          <AssetRowMobile
            asset={asset}
            change={asset.changes[period]}
            symbol={symbol}
            rate={rate}
            key={asset.ticker}
          />
        ))}
      </div>

      {pageRows.length === 0 && (
        <p className="py-10 text-center text-body1 text-neutral-500">
          {query
            ? `No assets match "${query}".`
            : "No assets in this category yet."}
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
                  ? "bg-primary-dark text-base-white"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
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
