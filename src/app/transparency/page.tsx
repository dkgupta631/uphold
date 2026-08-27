import type { Metadata } from "next";
import { Eye, Lock, RefreshCcw } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Accordion from "@/components/Accordion";
import ReserveDashboard from "./ReserveDashboard";

export const metadata: Metadata = {
  title: "Transparency — CryptoTrade",
  description: "Radical transparency since 2014 — see how we hold, secure and report on client assets.",
};

const FAQS = [
  {
    question: "What does full reserve mean?",
    answer:
      "Full reserve means client assets are held one-to-one — we don't lend out or rehypothecate the crypto and cash our clients hold with us. Every unit of every asset in a client account is backed by a corresponding unit we hold.",
  },
  {
    question: "How often is the reserve data updated?",
    answer:
      "Our reserve dashboard figures are refreshed continuously, on a rolling basis of roughly every 30 seconds, so the numbers shown reflect current holdings rather than a static snapshot.",
  },
  {
    question: "Who verifies these numbers?",
    answer:
      "Reserve reporting is subject to internal controls and periodic independent review. This demo page illustrates the format of that reporting with placeholder figures.",
  },
  {
    question: "What happens to my assets if the company is acquired or wound down?",
    answer:
      "Because assets are held on a full-reserve, non-lending basis, client holdings are not commingled with company operating funds, which is designed to protect client assets in a wind-down scenario.",
  },
];

export default function TransparencyPage() {
  return (
    <>
      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page pt-14 pb-12 sm:pt-20 sm:pb-16">
          <Reveal>
            <h1 className="text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance max-w-xl">
              Radical transparency
            </h1>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-xl">
              Since day one, we&apos;ve believed trust is earned by showing
              our work — not just claiming it. That&apos;s why we publish our
              reserves and hold ourselves to a full-reserve standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <ReserveDashboard />
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <h2 className="text-h3 font-semibold text-base-white mb-10">
              Built on three principles
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <Reveal delay={0}>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 mb-5">
                  <Eye size={22} className="text-primary-dark" strokeWidth={1.75} />
                </div>
                <h3 className="text-h4 font-semibold text-base-white mb-2">
                  Radically transparent
                </h3>
                <p className="text-body1 text-neutral-400">
                  We&apos;ve published our reserves and stood behind full
                  transparency since 2014 — long before it was an industry
                  expectation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 mb-5">
                  <Lock size={22} className="text-primary-dark" strokeWidth={1.75} />
                </div>
                <h3 className="text-h4 font-semibold text-base-white mb-2">
                  We never loan out assets
                </h3>
                <p className="text-body1 text-neutral-400">
                  Client holdings are never lent, leveraged or rehypothecated
                  without explicit consent — what you hold is what we hold.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 mb-5">
                  <RefreshCcw size={22} className="text-primary-dark" strokeWidth={1.75} />
                </div>
                <h3 className="text-h4 font-semibold text-base-white mb-2">
                  Reserves, refreshed constantly
                </h3>
                <p className="text-body1 text-neutral-400">
                  Our asset and liability totals are published and refreshed
                  roughly every 30 seconds, not once a quarter.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900">
        <div className="container-page py-16 sm:py-20 max-w-3xl">
          <Reveal>
            <h2 className="text-h3 font-semibold text-base-white mb-8">
              Frequently asked questions
            </h2>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
