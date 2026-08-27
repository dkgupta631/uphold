export interface Asset {
  rank: number;
  name: string;
  ticker: string;
  color: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume: number;
  sparkline: number[];
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

export const assets: Asset[] = [
  { rank: 1, name: "Bitcoin", ticker: "BTC", color: "#F7931A", price: 96_412.32, change24h: 2.14, change7d: 6.02, marketCap: 1_904_000_000_000, volume: 42_100_000_000, sparkline: spark(0.9, true) },
  { rank: 2, name: "Ethereum", ticker: "ETH", color: "#627EEA", price: 3_412.87, change24h: -1.32, change7d: 3.41, marketCap: 410_500_000_000, volume: 18_700_000_000, sparkline: spark(0.7, false) },
  { rank: 3, name: "Tether", ticker: "USDT", color: "#26A17B", price: 1.0, change24h: 0.01, change7d: -0.02, marketCap: 118_000_000_000, volume: 61_300_000_000, sparkline: spark(0.2, true) },
  { rank: 4, name: "XRP", ticker: "XRP", color: "#25A768", price: 2.31, change24h: 4.87, change7d: 12.5, marketCap: 132_400_000_000, volume: 5_900_000_000, sparkline: spark(1.1, true) },
  { rank: 5, name: "BNB", ticker: "BNB", color: "#F3BA2F", price: 642.19, change24h: 0.94, change7d: -2.11, marketCap: 93_200_000_000, volume: 1_800_000_000, sparkline: spark(0.5, true) },
  { rank: 6, name: "Solana", ticker: "SOL", color: "#14F195", price: 187.44, change24h: -3.42, change7d: -5.88, marketCap: 88_100_000_000, volume: 3_400_000_000, sparkline: spark(1.4, false) },
  { rank: 7, name: "USD Coin", ticker: "USDC", color: "#2775CA", price: 1.0, change24h: 0.0, change7d: 0.01, marketCap: 41_200_000_000, volume: 6_800_000_000, sparkline: spark(0.15, true) },
  { rank: 8, name: "Cardano", ticker: "ADA", color: "#0033AD", price: 0.68, change24h: 1.76, change7d: 4.22, marketCap: 24_100_000_000, volume: 620_000_000, sparkline: spark(0.8, true) },
  { rank: 9, name: "Dogecoin", ticker: "DOGE", color: "#C2A633", price: 0.312, change24h: -0.56, change7d: 1.09, marketCap: 45_900_000_000, volume: 1_500_000_000, sparkline: spark(1.0, false) },
  { rank: 10, name: "Avalanche", ticker: "AVAX", color: "#E84142", price: 41.62, change24h: 2.98, change7d: 8.14, marketCap: 17_000_000_000, volume: 540_000_000, sparkline: spark(0.6, true) },
  { rank: 11, name: "TRON", ticker: "TRX", color: "#FF060A", price: 0.184, change24h: 0.42, change7d: -1.14, marketCap: 15_900_000_000, volume: 410_000_000, sparkline: spark(0.35, true) },
  { rank: 12, name: "Chainlink", ticker: "LINK", color: "#2A5ADA", price: 22.87, change24h: -2.05, change7d: -4.67, marketCap: 14_500_000_000, volume: 480_000_000, sparkline: spark(0.95, false) },
  { rank: 13, name: "Polkadot", ticker: "DOT", color: "#E6007A", price: 6.14, change24h: 1.11, change7d: 2.9, marketCap: 8_900_000_000, volume: 210_000_000, sparkline: spark(0.55, true) },
  { rank: 14, name: "Litecoin", ticker: "LTC", color: "#345D9D", price: 98.76, change24h: 0.68, change7d: -0.32, marketCap: 7_400_000_000, volume: 380_000_000, sparkline: spark(0.42, true) },
  { rank: 15, name: "Polygon", ticker: "MATIC", color: "#8247E5", price: 0.512, change24h: -1.94, change7d: -3.55, marketCap: 5_100_000_000, volume: 190_000_000, sparkline: spark(1.2, false) },
];

export const mostBought = [assets[0], assets[1], assets[3], assets[5], assets[9], assets[4]];
export const recentlyAdded = [assets[12], assets[14], assets[10], assets[7], assets[13], assets[8]];

export function formatCurrency(value: number): string {
  if (value >= 1) {
    return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `$${value.toFixed(3)}`;
}

export function formatCompact(value: number): string {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(value);
}
