import type { Metadata } from "next";
import {
  Banknote,
  Code2,
  CreditCard,
  LayoutGrid,
  LineChart,
  Repeat,
  Server,
  Wallet,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Enterprise — CryptoTrade",
  description: "Powering Web3 for business — enterprise APIs, OTC trading, treasury management and more.",
};

const FEATURES = [
  { icon: Code2, title: "Enterprise APIs", description: "Programmatic access to trading, custody and market data infrastructure." },
  { icon: LayoutGrid, title: "Widgets", description: "Drop-in, brandable trading and price widgets for your product surfaces." },
  { icon: Repeat, title: "On/off-ramp", description: "Let users move between fiat and crypto without leaving your app." },
  { icon: LineChart, title: "OTC trading", description: "Execute large trades off-book with dedicated desk support." },
  { icon: Server, title: "Listing services", description: "Get your asset listed and distributed to a global user base." },
  { icon: Banknote, title: "Infrastructure-as-a-Service", description: "White-label the full stack — custody, trading, compliance." },
  { icon: Wallet, title: "Treasury management", description: "Manage multi-asset corporate treasury with institutional controls." },
  { icon: CreditCard, title: "Cards-as-a-Service", description: "Launch branded crypto-linked card programs without building from scratch." },
];

const LOGOS = ["Northline", "Vertex Capital", "Ardent", "Fenwick Labs", "Solstice", "Meridian"];

const TESTIMONIALS = [
  {
    quote: "Integrating the trading API took our team days, not months. The docs and sandbox made all the difference.",
    author: "Head of Engineering, fintech scale-up",
  },
  {
    quote: "The OTC desk handled a seven-figure execution with better pricing than we expected and zero friction.",
    author: "Treasury Lead, digital asset fund",
  },
  {
    quote: "White-labeling the on/off-ramp let us launch a fully branded experience in a single quarter.",
    author: "VP Product, consumer wallet app",
  },
];

export default function EnterprisePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 0%, rgba(132,251,127,0.14) 0%, rgba(9,13,20,0) 60%)",
          }}
        />
        <div className="container-page relative pt-16 pb-16 sm:pt-24 sm:pb-20 text-center">
          <Reveal>
            <h1 className="text-hero-mobile sm:text-hero font-semibold text-base-white text-balance max-w-2xl mx-auto">
              Powering Web3 for business
            </h1>
            <p className="mt-5 text-paragraph text-neutral-400 max-w-xl mx-auto">
              Enterprise-grade trading, custody and infrastructure — built for
              companies who need crypto to just work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact-us" size="lg" showArrow>
                Talk to sales
              </Button>
              <Button href="#developer" variant="ghost" size="lg">
                View API docs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-10">
          <Reveal>
            <p className="text-center text-body2 uppercase tracking-wide text-neutral-400 mb-6">
              Trusted by teams worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {LOGOS.map((logo) => (
                <span key={logo} className="text-h4 font-semibold text-neutral-600">
                  {logo}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <h2 className="text-h2 font-semibold text-base-white mb-10 text-balance max-w-xl">
              Everything you need to bring crypto to your product
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal delay={(i % 4) * 0.05} key={f.title}>
                <FeatureCard {...f} href="/contact-us" linkLabel="Learn more" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <h2 className="text-h3 font-semibold text-base-white mb-10">What partners say</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal delay={i * 0.08} key={t.author}>
                <div className="h-full rounded-2xl border border-neutral-700 bg-neutral-800 p-6 flex flex-col justify-between">
                  <p className="text-body1 text-base-white/90">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-6 text-body2 text-neutral-400">{t.author}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="developer" className="bg-neutral-900">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <div className="rounded-2xl border border-neutral-700 bg-gradient-to-br from-primary-dark/10 to-neutral-800 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <h2 className="text-h3 font-semibold text-base-white mb-3">
                  Built for developers
                </h2>
                <p className="text-body1 text-neutral-400 max-w-md">
                  Explore our REST APIs, sandbox environment and SDKs to start
                  building on top of trading, custody and payments
                  infrastructure.
                </p>
              </div>
              <Button href="/contact-us" size="lg" showArrow className="shrink-0">
                View developer docs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Let's build together"
        subtitle="Tell us what you're building — our team will help you find the right integration."
        buttonLabel="Talk to sales"
        buttonHref="/contact-us"
      />
    </>
  );
}
