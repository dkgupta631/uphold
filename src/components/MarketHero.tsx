"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HeroAsset {
  ticker: string;
  label: string;
}

const MOST_BOUGHT: HeroAsset[] = [
  { ticker: "XRP", label: "XRP" },
  { ticker: "BTC", label: "BTC" },
  { ticker: "SOL", label: "SOL" },
  { ticker: "USDC", label: "USDC" },
];

const RECENTLY_ADDED: HeroAsset[] = [
  { ticker: "GOMINING", label: "GOMINING" },
  { ticker: "ZAMA", label: "ZAMA" },
  { ticker: "GRAM", label: "GRAM" },
  { ticker: "AI", label: "AI" },
];

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function AssetPanel({
  title,
  assets,
  href,
  delay,
}: {
  title: string;
  assets: HeroAsset[];
  href: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="w-full sm:w-[240px] rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-5 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] transition-shadow hover:border-white/20 hover:shadow-[0_28px_56px_-16px_rgba(132,251,127,0.15)]"
    >
      <span className="text-body2 uppercase tracking-wide text-neutral-200/80 font-medium">
        {title}
      </span>

      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="mt-4 flex flex-col gap-3"
      >
        {assets.map((asset) => (
          <motion.div
            key={asset.ticker}
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10">
              <img
                src={`/assets/images/coins/${asset.ticker}.svg`}
                alt={asset.label}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-body1 font-bold text-base-white">{asset.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <Link
        href={href}
        className="group mt-5 inline-flex items-center gap-1.5 text-body2 font-medium text-neutral-300 transition-colors hover:text-primary-dark"
      >
        See more
        <ArrowUpRight
          size={14}
          strokeWidth={2.25}
          className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </motion.div>
  );
}

export default function MarketHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 border-b border-neutral-800">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/images/marketbackground.jpg"
          alt=""
          fill
          priority
          className="object-cover object-right"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #090D14 0%, rgba(9,13,20,0.85) 32%, rgba(9,13,20,0.35) 58%, rgba(9,13,20,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 30%, rgba(132,251,127,0.10) 0%, rgba(9,13,20,0) 60%)",
        }}
      />

      <div className="container-page relative py-16 sm:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-h1-mobile sm:text-hero font-semibold text-balance max-w-xl"
          >
            <span className="text-primary-dark">Discover</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-base-white">Crypto Better</span>
          </motion.h1>

          <div className="flex flex-col sm:flex-row gap-4 lg:shrink-0">
            <AssetPanel title="Most bought" assets={MOST_BOUGHT} href="#market-table" delay={0.15} />
            <AssetPanel title="Recently added" assets={RECENTLY_ADDED} href="#market-table" delay={0.28} />
          </div>
        </div>
      </div>
    </section>
  );
}
