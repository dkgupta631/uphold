import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import AssetCard from "@/components/AssetCard";
import { mostBought, recentlyAdded } from "@/data/assets";
import MarketTable from "./MarketTable";

export const metadata: Metadata = {
  title: "Market prices — CryptoTrade",
  description: "Live prices, market caps and trends across hundreds of crypto assets.",
};

export default function MarketPage() {
  return (
    <>
      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page pt-14 pb-12 sm:pt-20 sm:pb-16">
          <Reveal>
            <h1 className="text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance max-w-xl">
              Discover crypto better
            </h1>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-lg">
              Live prices, market caps and trends across hundreds of digital
              assets — updated in real time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-12 sm:py-16 space-y-12">
          <Reveal>
            <h2 className="text-h4 font-semibold text-base-white mb-5">Most bought</h2>
            <Carousel>
              {mostBought.map((asset) => (
                <AssetCard asset={asset} key={`bought-${asset.ticker}`} />
              ))}
            </Carousel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h4 font-semibold text-base-white mb-5">Recently added</h2>
            <Carousel>
              {recentlyAdded.map((asset) => (
                <AssetCard asset={asset} key={`added-${asset.ticker}`} />
              ))}
            </Carousel>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <h2 className="text-h3 font-semibold text-base-white mb-6">Market prices</h2>
            <MarketTable />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
