"use client";

import { useState } from "react";

export default function CoinIcon({
  ticker,
  color,
  size = 32,
}: {
  ticker: string;
  color: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex items-center justify-center rounded-full font-semibold shrink-0"
        style={{
          width: size,
          height: size,
          backgroundColor: `${color}22`,
          color,
          fontSize: size * 0.34,
        }}
      >
        {ticker.slice(0, 1)}
      </div>
    );
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <img
        src={`/assets/images/coins/${ticker}.svg`}
        alt={ticker}
        width={size}
        height={size}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
