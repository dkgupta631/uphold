export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  gradient: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "300-assets-milestone",
    title: "We now support over 300 tradable assets",
    excerpt: "A look at how our asset catalog has grown and what's coming next.",
    date: "August 12, 2026",
    author: "CryptoTrade Team",
    gradient: "from-primary-dark/25 to-neutral-800",
  },
  {
    slug: "q2-transparency-report",
    title: "Q2 transparency report: reserves and reporting",
    excerpt: "Our latest reserve figures and what full-reserve transparency means in practice.",
    date: "July 3, 2026",
    author: "Trust & Safety",
    gradient: "from-[#627EEA]/25 to-neutral-800",
  },
  {
    slug: "enterprise-api-v3",
    title: "Announcing Enterprise API v3",
    excerpt: "Faster settlement, expanded asset coverage, and a redesigned developer sandbox.",
    date: "June 18, 2026",
    author: "Engineering",
    gradient: "from-[#8247E5]/25 to-neutral-800",
  },
  {
    slug: "security-audit-results",
    title: "2026 independent security audit: results",
    excerpt: "Highlights from this year's third-party penetration test and infrastructure review.",
    date: "May 22, 2026",
    author: "Security Team",
    gradient: "from-[#F3BA2F]/25 to-neutral-800",
  },
];
