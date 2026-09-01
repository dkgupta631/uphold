export type Period = "1H" | "1D" | "1W" | "1M" | "1Y";

export type CategoryKey =
  | "MOST_BOUGHT"
  | "RECENTLY_ADDED"
  | "CRYPTO"
  | "FIAT"
  | "UTILITY"
  | "COMMODITY"
  | "STABLECOIN";

export interface Asset {
  rank: number;
  name: string;
  ticker: string;
  color: string;
  price: number;
  changes: Record<Period, number>;
  marketCap: number;
  volume: number;
  supply: number;
  sparkline: number[];
  categories: CategoryKey[];
}

function spark(seed: number, trendUp: boolean): number[] {
  const points: number[] = [];
  let v = 50;
  for (let i = 0; i < 16; i++) {
    const drift = trendUp ? 1.2 : -1.2;
    v += Math.sin(i * seed) * 6 + drift;
    points.push(Math.max(10, Math.min(90, v)));
  }
  return points;
}

function deriveChanges(change24h: number, change7d: number): Record<Period, number> {
  return {
    "1H": Number((change24h / 18).toFixed(2)),
    "1D": change24h,
    "1W": change7d,
    "1M": Number((change7d * 2.6).toFixed(2)),
    "1Y": Number((change7d * 9.4).toFixed(2)),
  };
}

interface RawAsset {
  rank: number;
  name: string;
  ticker: string;
  color: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume: number;
  supply: number;
  seed: number;
  trendUp: boolean;
  categories: CategoryKey[];
}

const RAW_ASSETS: RawAsset[] = [
  { rank: 1, name: "Bitcoin", ticker: "BTC", color: "#F7931A", price: 96_412.32, change24h: 2.14, change7d: 6.02, marketCap: 1_904_000_000_000, volume: 42_100_000_000, supply: 19_800_000, seed: 0.9, trendUp: true, categories: ["MOST_BOUGHT", "CRYPTO"] },
  { rank: 2, name: "Ethereum", ticker: "ETH", color: "#627EEA", price: 3_412.87, change24h: -1.32, change7d: 3.41, marketCap: 410_500_000_000, volume: 18_700_000_000, supply: 120_300_000, seed: 0.7, trendUp: false, categories: ["MOST_BOUGHT", "CRYPTO"] },
  { rank: 3, name: "Tether", ticker: "USDT", color: "#26A17B", price: 1.0, change24h: 0.01, change7d: -0.02, marketCap: 118_000_000_000, volume: 61_300_000_000, supply: 118_000_000_000, seed: 0.2, trendUp: true, categories: ["CRYPTO", "STABLECOIN"] },
  { rank: 4, name: "XRP", ticker: "XRP", color: "#25A768", price: 2.31, change24h: 4.87, change7d: 12.5, marketCap: 132_400_000_000, volume: 5_900_000_000, supply: 57_300_000_000, seed: 1.1, trendUp: true, categories: ["MOST_BOUGHT", "CRYPTO"] },
  { rank: 5, name: "BNB", ticker: "BNB", color: "#F3BA2F", price: 642.19, change24h: 0.94, change7d: -2.11, marketCap: 93_200_000_000, volume: 1_800_000_000, supply: 145_100_000, seed: 0.5, trendUp: true, categories: ["MOST_BOUGHT", "CRYPTO"] },
  { rank: 6, name: "Solana", ticker: "SOL", color: "#14F195", price: 187.44, change24h: -3.42, change7d: -5.88, marketCap: 88_100_000_000, volume: 3_400_000_000, supply: 470_100_000, seed: 1.4, trendUp: false, categories: ["MOST_BOUGHT", "CRYPTO"] },
  { rank: 7, name: "USD Coin", ticker: "USDC", color: "#2775CA", price: 1.0, change24h: 0.0, change7d: 0.01, marketCap: 41_200_000_000, volume: 6_800_000_000, supply: 41_200_000_000, seed: 0.15, trendUp: true, categories: ["MOST_BOUGHT", "CRYPTO", "STABLECOIN"] },
  { rank: 8, name: "Cardano", ticker: "ADA", color: "#0033AD", price: 0.68, change24h: 1.76, change7d: 4.22, marketCap: 24_100_000_000, volume: 620_000_000, supply: 35_400_000_000, seed: 0.8, trendUp: true, categories: ["RECENTLY_ADDED", "CRYPTO"] },
  { rank: 9, name: "Dogecoin", ticker: "DOGE", color: "#C2A633", price: 0.312, change24h: -0.56, change7d: 1.09, marketCap: 45_900_000_000, volume: 1_500_000_000, supply: 147_200_000_000, seed: 1.0, trendUp: false, categories: ["RECENTLY_ADDED", "CRYPTO"] },
  { rank: 10, name: "Avalanche", ticker: "AVAX", color: "#E84142", price: 41.62, change24h: 2.98, change7d: 8.14, marketCap: 17_000_000_000, volume: 540_000_000, supply: 408_600_000, seed: 0.6, trendUp: true, categories: ["MOST_BOUGHT", "CRYPTO"] },
  { rank: 11, name: "TRON", ticker: "TRX", color: "#FF060A", price: 0.184, change24h: 0.42, change7d: -1.14, marketCap: 15_900_000_000, volume: 410_000_000, supply: 86_400_000_000, seed: 0.35, trendUp: true, categories: ["RECENTLY_ADDED", "CRYPTO"] },
  { rank: 12, name: "Chainlink", ticker: "LINK", color: "#2A5ADA", price: 22.87, change24h: -2.05, change7d: -4.67, marketCap: 14_500_000_000, volume: 480_000_000, supply: 634_400_000, seed: 0.95, trendUp: false, categories: ["CRYPTO"] },
  { rank: 13, name: "Polkadot", ticker: "DOT", color: "#E6007A", price: 6.14, change24h: 1.11, change7d: 2.9, marketCap: 8_900_000_000, volume: 210_000_000, supply: 1_450_000_000, seed: 0.55, trendUp: true, categories: ["RECENTLY_ADDED", "CRYPTO"] },
  { rank: 14, name: "Litecoin", ticker: "LTC", color: "#345D9D", price: 98.76, change24h: 0.68, change7d: -0.32, marketCap: 7_400_000_000, volume: 380_000_000, supply: 75_000_000, seed: 0.42, trendUp: true, categories: ["RECENTLY_ADDED", "CRYPTO"] },
  { rank: 15, name: "Polygon", ticker: "MATIC", color: "#8247E5", price: 0.512, change24h: -1.94, change7d: -3.55, marketCap: 5_100_000_000, volume: 190_000_000, supply: 9_950_000_000, seed: 1.2, trendUp: false, categories: ["RECENTLY_ADDED", "CRYPTO"] },
];

export const assets: Asset[] = RAW_ASSETS.map((raw) => ({
  rank: raw.rank,
  name: raw.name,
  ticker: raw.ticker,
  color: raw.color,
  price: raw.price,
  changes: deriveChanges(raw.change24h, raw.change7d),
  marketCap: raw.marketCap,
  volume: raw.volume,
  supply: raw.supply,
  sparkline: spark(raw.seed, raw.trendUp),
  categories: raw.categories,
}));

export type Currency = "USD" | "EUR" | "GBP";

export const CURRENCY_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
};

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export function formatCurrency(value: number, symbol = "$"): string {
  if (value >= 1) {
    return `${symbol}${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `${symbol}${value.toFixed(3)}`;
}

export function formatCompact(value: number, symbol = ""): string {
  return `${symbol}${new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(value)}`;
}
