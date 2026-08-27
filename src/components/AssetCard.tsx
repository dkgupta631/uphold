import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Asset } from "@/data/assets";
import { formatCurrency } from "@/data/assets";
import { cn } from "@/lib/utils";
import AssetIcon from "./AssetIcon";

export default function AssetCard({ asset }: { asset: Asset }) {
  const positive = asset.change24h >= 0;
  return (
    <div className="shrink-0 w-[220px] rounded-2xl border border-neutral-700 bg-neutral-800 p-5 hover:border-neutral-600 transition-colors">
      <div className="flex items-center gap-3">
        <AssetIcon ticker={asset.ticker} color={asset.color} />
        <div>
          <p className="text-body1 font-medium text-base-white">{asset.name}</p>
          <p className="text-body2 text-neutral-400">{asset.ticker}</p>
        </div>
      </div>
      <div className="mt-5 flex items-end justify-between">
        <span className="text-h4 font-semibold text-base-white">
          {formatCurrency(asset.price)}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 text-body2 font-medium",
            positive ? "text-up-green" : "text-down-red"
          )}
        >
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {Math.abs(asset.change24h).toFixed(2)}%
        </span>
      </div>
    </div>
  );
}
