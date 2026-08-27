import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Asset } from "@/data/assets";
import { formatCompact, formatCurrency } from "@/data/assets";
import { cn } from "@/lib/utils";
import AssetIcon from "./AssetIcon";
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

export function AssetRowDesktop({ asset }: { asset: Asset }) {
  return (
    <tr className="border-b border-neutral-800 hover:bg-neutral-800/60 transition-colors">
      <td className="py-4 pl-2 text-body1 text-neutral-400 tabular-nums">{asset.rank}</td>
      <td className="py-4">
        <div className="flex items-center gap-3">
          <AssetIcon ticker={asset.ticker} color={asset.color} size={32} />
          <div>
            <p className="text-body1 font-medium text-base-white">{asset.name}</p>
            <p className="text-body2 text-neutral-400">{asset.ticker}</p>
          </div>
        </div>
      </td>
      <td className="py-4 text-body1 font-medium text-base-white tabular-nums">
        {formatCurrency(asset.price)}
      </td>
      <td className="py-4">
        <ChangeTag value={asset.change24h} />
      </td>
      <td className="py-4 hidden lg:table-cell">
        <ChangeTag value={asset.change7d} />
      </td>
      <td className="py-4 hidden lg:table-cell text-body1 text-neutral-400 tabular-nums">
        ${formatCompact(asset.marketCap)}
      </td>
      <td className="py-4 hidden xl:table-cell text-body1 text-neutral-400 tabular-nums">
        ${formatCompact(asset.volume)}
      </td>
      <td className="py-4 pr-2 hidden md:table-cell w-[100px] h-[44px]">
        <Sparkline data={asset.sparkline} positive={asset.change7d >= 0} />
      </td>
    </tr>
  );
}

export function AssetRowMobile({ asset }: { asset: Asset }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-neutral-800">
      <div className="flex items-center gap-3">
        <AssetIcon ticker={asset.ticker} color={asset.color} size={32} />
        <div>
          <p className="text-body1 font-medium text-base-white">{asset.name}</p>
          <p className="text-body2 text-neutral-400">{asset.ticker}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-body1 font-medium text-base-white tabular-nums">
          {formatCurrency(asset.price)}
        </span>
        <ChangeTag value={asset.change24h} />
      </div>
    </div>
  );
}
