export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "Beginner" | "Trading" | "Security" | "Web3" | "Glossary";
  readTime: string;
  gradient: string;
}

export const articles: Article[] = [
  {
    slug: "what-is-bitcoin",
    title: "What is Bitcoin and how does it work?",
    excerpt: "A plain-language walkthrough of the world's first cryptocurrency, from mining to wallets.",
    category: "Beginner",
    readTime: "6 min read",
    gradient: "from-[#F7931A]/30 to-neutral-800",
  },
  {
    slug: "limit-vs-market-orders",
    title: "Limit orders vs. market orders, explained",
    excerpt: "Understand the difference between order types so you can trade with more control.",
    category: "Trading",
    readTime: "5 min read",
    gradient: "from-[#84FB7F]/25 to-neutral-800",
  },
  {
    slug: "secure-your-account",
    title: "7 ways to secure your crypto account",
    excerpt: "Two-factor authentication, phishing awareness, and other habits that keep funds safe.",
    category: "Security",
    readTime: "7 min read",
    gradient: "from-[#627EEA]/25 to-neutral-800",
  },
  {
    slug: "what-is-web3",
    title: "Web3 101: what's actually different this time",
    excerpt: "A grounded look at decentralized apps, wallets, and why people are excited about Web3.",
    category: "Web3",
    readTime: "8 min read",
    gradient: "from-[#8247E5]/25 to-neutral-800",
  },
  {
    slug: "dollar-cost-averaging",
    title: "Dollar-cost averaging: a beginner's strategy",
    excerpt: "How investing a fixed amount on a schedule can smooth out crypto's volatility.",
    category: "Beginner",
    readTime: "4 min read",
    gradient: "from-[#49CC68]/25 to-neutral-800",
  },
  {
    slug: "glossary-staking",
    title: "Cryptionary: what is staking?",
    excerpt: "Staking, explained in one page — how it works and what the rewards actually represent.",
    category: "Glossary",
    readTime: "3 min read",
    gradient: "from-[#F3BA2F]/25 to-neutral-800",
  },
  {
    slug: "reading-candlestick-charts",
    title: "How to read a candlestick chart",
    excerpt: "The basics of candlestick patterns and what they can (and can't) tell you.",
    category: "Trading",
    readTime: "6 min read",
    gradient: "from-[#FF5C5C]/20 to-neutral-800",
  },
  {
    slug: "cold-vs-hot-wallets",
    title: "Cold wallets vs. hot wallets: which do you need?",
    excerpt: "A practical guide to storage tradeoffs for everyday spending versus long-term holding.",
    category: "Security",
    readTime: "5 min read",
    gradient: "from-[#25A768]/25 to-neutral-800",
  },
  {
    slug: "glossary-gas-fees",
    title: "Cryptionary: what are gas fees?",
    excerpt: "Why transactions cost what they cost, and how fees change with network demand.",
    category: "Glossary",
    readTime: "3 min read",
    gradient: "from-[#2A5ADA]/25 to-neutral-800",
  },
];

export const categories = ["All", "Beginner", "Trading", "Security", "Web3", "Glossary"] as const;
