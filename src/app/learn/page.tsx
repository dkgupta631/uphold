import type { Metadata } from "next";
import { Calculator, BookOpen, SlidersHorizontal, Mail, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import LearnGrid from "./LearnGrid";

export const metadata: Metadata = {
  title: "Learn — CryptoTrade",
  description: "Guides, glossary and tools to help you understand crypto — from beginner basics to trading strategy.",
};

const MODULES = [
  {
    icon: BookOpen,
    title: "How to buy crypto",
    description: "A step-by-step guide to making your first purchase.",
  },
  {
    icon: Calculator,
    title: "DCA calculator",
    description: "Model out a dollar-cost averaging strategy for any asset.",
  },
  {
    icon: SlidersHorizontal,
    title: "Limit orders",
    description: "Set your price and let the market come to you.",
  },
  {
    icon: TrendingUp,
    title: "Cryptionary",
    description: "A glossary of crypto terms, explained simply.",
  },
];

export default function LearnPage() {
  return (
    <>
      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
          <Reveal>
            <h1 className="text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance">
              Learn
            </h1>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-lg mx-auto">
              Guides, glossary and tools to help you understand crypto — from
              first purchase to advanced trading.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <LearnGrid />
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <h2 className="text-h3 font-semibold text-base-white mb-8">Tools & resources</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODULES.map((mod, i) => (
              <Reveal delay={i * 0.05} key={mod.title}>
                <div className="h-full rounded-2xl border border-neutral-700 bg-neutral-800 p-6 hover:border-neutral-600 transition-colors">
                  <mod.icon size={22} className="text-primary-dark mb-4" strokeWidth={1.75} />
                  <h3 className="text-h4 font-semibold text-base-white mb-2">{mod.title}</h3>
                  <p className="text-body1 text-neutral-400">{mod.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-neutral-700 bg-gradient-to-br from-primary-dark/10 to-neutral-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 shrink-0">
                  <Mail size={20} className="text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-h4 font-semibold text-base-white">Daily market update</h3>
                  <p className="text-body1 text-neutral-400 mt-1">
                    Get a short daily briefing on market moves, straight to your inbox.
                  </p>
                </div>
              </div>
              <Button href="#" showArrow className="shrink-0">
                Subscribe
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
