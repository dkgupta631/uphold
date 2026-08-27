import { Eye, Lock, RefreshCcw, Shuffle } from "lucide-react";
import Button from "@/components/Button";
import ScrollHero from "@/components/ScrollHero";
import Reveal from "@/components/Reveal";
import StatCallout from "@/components/StatCallout";
import TrustPillar from "@/components/TrustPillar";
import CTASection from "@/components/CTASection";

const APY_ROWS = [
  { label: "CryptoTrade interest account", value: 92, display: "up to 4.25% APY¹" },
  { label: "National average savings rate", value: 12, display: "0.45% APY²" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <ScrollHero />

      {/* Interest account comparison */}
      <section className="bg-neutral-900 border-t border-neutral-800">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-h2 font-semibold text-base-white text-balance">
                  Earn more on your crypto than a savings account ever could
                </h2>
                <p className="mt-4 text-paragraph text-neutral-400 max-w-md">
                  Put idle assets to work. Our interest account pays rates that
                  consistently outperform the national average savings rate.
                </p>
                <Button href="/learn" variant="outline" className="mt-6">
                  Learn more
                </Button>
              </div>
              <div className="rounded-2xl border border-neutral-700 bg-neutral-800 p-6 sm:p-8">
                <div className="space-y-6">
                  {APY_ROWS.map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-body1 text-neutral-400">{row.label}</span>
                        <span className="text-body1 font-semibold text-base-white">
                          {row.display}
                        </span>
                      </div>
                      <div className="h-2.5 rounded-pill bg-neutral-700 overflow-hidden">
                        <div
                          className="h-full rounded-pill bg-primary-dark"
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-body2 text-neutral-400">
                  ¹ Rates vary by asset and are subject to change. ² Source:
                  illustrative composite of published national average savings
                  rates. Figures shown are illustrative only.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Earn crypto better */}
      <section className="bg-neutral-900 border-t border-neutral-800">
        <div className="container-page py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-body2 font-medium uppercase tracking-wide text-primary-dark">
              Earn
            </span>
            <h2 className="mt-3 text-h2 font-semibold text-base-white text-balance">
              Earn crypto better
            </h2>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-md">
              Hold and earn on 20+ digital assets automatically — no lockups,
              no minimums, and rewards paid directly to your account.
            </p>
            <div className="mt-6 flex flex-wrap gap-8">
              <StatCallout value="20+" label="Assets that earn" />
              <StatCallout value="4.25%" label="Up to APY" />
            </div>
            <Button href="/get-started" className="mt-7">
              Start earning
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-dark/20 to-neutral-800 border border-neutral-700" />
          </Reveal>
        </div>
      </section>

      {/* Discover crypto better */}
      <section className="bg-neutral-900 border-t border-neutral-800">
        <div className="container-page py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#627EEA]/20 to-neutral-800 border border-neutral-700" />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="text-body2 font-medium uppercase tracking-wide text-primary-dark">
              Discover
            </span>
            <h2 className="mt-3 text-h2 font-semibold text-base-white text-balance">
              Discover crypto better
            </h2>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-md">
              Explore live prices, market caps and trends across hundreds of
              assets — with the context you need to make informed decisions.
            </p>
            <Button href="/market" className="mt-7">
              Explore the market
            </Button>
            <p className="mt-4 text-body2 text-neutral-400 max-w-md">
              *Past performance does not indicate future results. Cryptoasset
              prices can be volatile.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trade crypto better */}
      <section className="bg-neutral-900 border-t border-neutral-800">
        <div className="container-page py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-body2 font-medium uppercase tracking-wide text-primary-dark">
              Trade
            </span>
            <h2 className="mt-3 text-h2 font-semibold text-base-white text-balance">
              Trade crypto better
            </h2>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-md">
              Trade any asset directly for any other in one step — no need to
              convert to cash first. Fewer steps, fewer fees, more control.
            </p>
            <div className="mt-6 flex items-center gap-3 text-body1 text-neutral-400">
              <Shuffle size={18} className="text-primary-dark" />
              Anything-to-anything trading, in a single transaction
            </div>
            <Button href="/get-started" className="mt-7">
              Start trading
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-light/20 to-neutral-800 border border-neutral-700" />
          </Reveal>
        </div>
      </section>

      {/* Secure crypto better */}
      <section className="bg-neutral-900 border-t border-neutral-800">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <div className="max-w-xl mb-12">
              <span className="text-body2 font-medium uppercase tracking-wide text-primary-dark">
                Secure
              </span>
              <h2 className="mt-3 text-h2 font-semibold text-base-white text-balance">
                Secure crypto better
              </h2>
              <p className="mt-4 text-paragraph text-neutral-400">
                Security isn&apos;t a feature we bolt on — it&apos;s the
                foundation everything else is built on.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            <Reveal delay={0}>
              <TrustPillar
                icon={Eye}
                title="Radically transparent"
                description="We've published our reserves and stood behind full transparency since 2014."
                href="/transparency"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <TrustPillar
                icon={Lock}
                title="We never loan out assets"
                description="Your holdings are never lent, leveraged or rehypothecated without your consent."
                href="/transparency"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <TrustPillar
                icon={RefreshCcw}
                title="Reserves, refreshed constantly"
                description="Our asset and liability totals are published and refreshed every 30 seconds."
                href="/transparency"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
