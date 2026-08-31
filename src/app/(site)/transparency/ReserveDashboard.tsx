"use client";

import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const RESERVE_COMPOSITION = [
  { name: "Bitcoin", value: 34, color: "#F7931A" },
  { name: "Ethereum", value: 22, color: "#627EEA" },
  { name: "Stablecoins", value: 26, color: "#49CC68" },
  { name: "Other assets", value: 18, color: "#84FB7F" },
];

function formatUSD(value: number) {
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

export default function ReserveDashboard() {
  const [seconds, setSeconds] = useState(0);
  const [assets] = useState(4_812_390_221);
  const [liabilities] = useState(4_798_112_004);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s + 1) % 30);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
        <h3 className="text-h4 font-semibold text-base-white">Reserve dashboard</h3>
        <span className="inline-flex items-center gap-2 text-body2 text-neutral-400">
          <RefreshCcw size={13} className="text-primary-dark animate-spin [animation-duration:3s]" />
          Updated {seconds}s ago · refreshes every 30s
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <div>
            <p className="text-body1 text-neutral-400 mb-1">Total client assets</p>
            <p className="text-h1 font-semibold text-base-white tabular-nums">
              {formatUSD(assets)}
            </p>
          </div>
          <div>
            <p className="text-body1 text-neutral-400 mb-1">Total client liabilities</p>
            <p className="text-h1 font-semibold text-primary-dark tabular-nums">
              {formatUSD(liabilities)}
            </p>
          </div>
          <p className="text-body2 text-neutral-400 max-w-sm">
            Assets held meet or exceed liabilities owed to clients at all
            times — figures shown are illustrative for demonstration purposes.
          </p>
        </div>

        <div>
          <div className="h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={RESERVE_COMPOSITION}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="62%"
                  outerRadius="90%"
                  paddingAngle={2}
                  stroke="none"
                >
                  {RESERVE_COMPOSITION.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#12161F",
                    border: "1px solid #2A303D",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
            {RESERVE_COMPOSITION.map((entry) => (
              <span key={entry.name} className="inline-flex items-center gap-2 text-body2 text-neutral-400">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                {entry.name} · {entry.value}%
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
