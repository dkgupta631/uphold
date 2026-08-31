import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import StatCallout from "@/components/StatCallout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — CryptoTrade",
  description: "Our mission, story and the numbers behind CryptoTrade.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page pt-14 pb-12 sm:pt-20 sm:pb-16">
          <Reveal>
            <h1 className="text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance max-w-xl">
              Making crypto simple, secure and worth trusting
            </h1>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-xl">
              We started in 2014 with a simple idea: anyone, anywhere, should
              be able to trade any asset for any other — without friction, and
              without having to trust a black box.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-14 sm:py-16">
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <StatCallout value="2014" label="Founded" />
              <StatCallout value="300+" label="Assets supported" />
              <StatCallout value="150+" label="Countries served" />
              <StatCallout value="10M+" label="Registered users" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900">
        <div className="container-page py-16 sm:py-20 max-w-2xl space-y-6">
          <Reveal>
            <h2 className="text-h3 font-semibold text-base-white mb-2">Our story</h2>
            <p className="text-body1 text-neutral-400">
              CryptoTrade was founded on the belief that trading between
              currencies — traditional or digital — shouldn&apos;t require
              multiple conversions, hidden markups or blind trust. That belief
              still shapes every product decision we make.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h3 font-semibold text-base-white mb-2">Our mission</h2>
            <p className="text-body1 text-neutral-400">
              To give people direct, transparent access to any asset, on a
              platform built with security and honesty as first principles —
              not afterthoughts.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
