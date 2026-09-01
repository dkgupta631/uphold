import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import MarketHero from "@/components/MarketHero";
import MarketTable from "./MarketTable";

export const metadata: Metadata = {
  title: "Market prices — CryptoTrade",
  description: "Live prices, market caps and trends across hundreds of crypto assets.",
};

export default function MarketPage() {
  return (
    <>
      <MarketHero />

      <section id="market-table" className="bg-base-white scroll-mt-20">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <MarketTable />
          </Reveal>
        </div>
      </section>

      <CTASection title="Join CryptoTrade" highlight="today" />
    </>
  );
}
