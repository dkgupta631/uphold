import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Asset } from "@/data/assets";
import { formatCompact, formatCurrency } from "@/data/assets";
import { cn } from "@/lib/utils";
import CoinIcon from "./CoinIcon";
import Sparkline from "./Sparkline";

function ChangeTag({ value }: { value: number }) {
  const positive = value >= 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-body1 font-medium tabular-nums",
        positive ? "text-up-green" : "text-down-red"
      )}
    >
      {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
      {Math.abs(value).toFixed(2)}%
    </span>
  );
}

export function AssetRowDesktop({
  asset,
  change,
  symbol,
  rate,
}: {
  asset: Asset;
  change: number;
  symbol: string;
  rate: number;
}) {
  return (
    <>
      <td className="py-4 pl-2">
        <div className="flex items-center gap-3">
          <CoinIcon ticker={asset.ticker} color={asset.color} size={32} />
          <div>
            <p className="text-body1 font-medium text-neutral-900">{asset.name}</p>
            <p className="text-body2 text-neutral-400">{asset.ticker}</p>
          </div>
        </div>
      </td>
      <td className="py-4 text-body1 font-medium text-neutral-900 tabular-nums">
        {formatCurrency(asset.price * rate, symbol)}
      </td>
      <td className="py-4">
        <div className="flex items-center gap-3">
          <ChangeTag value={change} />
          <div className="hidden md:block w-[72px] h-9 shrink-0">
            <Sparkline data={asset.sparkline} positive={change >= 0} />
          </div>
        </div>
      </td>
      <td className="py-4 hidden lg:table-cell text-body1 text-neutral-400 tabular-nums">
        {formatCompact(asset.marketCap * rate, symbol)}
      </td>
      <td className="py-4 hidden lg:table-cell text-body1 text-neutral-400 tabular-nums">
        {formatCompact(asset.volume * rate, symbol)}
      </td>
      <td className="py-4 hidden xl:table-cell text-body1 text-neutral-400 tabular-nums">
        {formatCompact(asset.supply)}
      </td>
      <td className="py-4 pr-2 text-right">
        <Link
          href="/get-started"
          className="inline-flex items-center rounded-pill bg-primary-dark/15 px-4 py-1.5 text-body2 font-semibold text-primary-light transition-transform hover:scale-[1.03] hover:bg-primary-dark/25 active:scale-[0.98]"
        >
          Transact
        </Link>
      </td>
    </>
  );
}

export function AssetRowMobile({
  asset,
  change,
  symbol,
  rate,
}: {
  asset: Asset;
  change: number;
  symbol: string;
  rate: number;
}) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-neutral-100">
      <div className="flex items-center gap-3">
        <CoinIcon ticker={asset.ticker} color={asset.color} size={32} />
        <div>
          <p className="text-body1 font-medium text-neutral-900">{asset.name}</p>
          <p className="text-body2 text-neutral-400">{asset.ticker}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-body1 font-medium text-neutral-900 tabular-nums">
          {formatCurrency(asset.price * rate, symbol)}
        </span>
        <ChangeTag value={change} />
      </div>
    </div>
  );
}
