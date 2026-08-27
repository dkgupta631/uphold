import type { Metadata } from "next";
import { Fingerprint, KeyRound, ShieldCheck, Siren } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Security — CryptoTrade",
  description: "How we secure client assets, accounts and infrastructure.",
};

const PRACTICES = [
  { icon: ShieldCheck, title: "Cold storage by default", description: "The large majority of client assets are held in offline, cold storage — not on internet-connected systems." },
  { icon: KeyRound, title: "Multi-party approvals", description: "Movement of funds requires multiple independent approvals, eliminating single points of failure." },
  { icon: Fingerprint, title: "Account-level protections", description: "Two-factor authentication, biometric login and withdrawal allow-listing are available on every account." },
  { icon: Siren, title: "24/7 monitoring", description: "Automated systems and a dedicated security team monitor for suspicious activity around the clock." },
];

const FAQS = [
  {
    question: "How are client assets stored?",
    answer: "The majority of digital assets are held in geographically distributed cold storage, with only a small operational balance kept online to facilitate withdrawals.",
  },
  {
    question: "What should I do if I suspect unauthorized access to my account?",
    answer: "Contact support immediately through the contact page and change your password. We recommend enabling two-factor authentication if you haven't already.",
  },
  {
    question: "Do you run a bug bounty program?",
    answer: "Yes — we work with independent security researchers and maintain a responsible disclosure program for reporting vulnerabilities.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page pt-14 pb-12 sm:pt-20 sm:pb-16">
          <Reveal>
            <h1 className="text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance max-w-xl">
              Security is the product
            </h1>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-xl">
              From cold storage to account protections, security decisions
              shape everything we build — not just the parts you can see.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRACTICES.map((p, i) => (
              <Reveal delay={i * 0.05} key={p.title}>
                <div className="h-full rounded-2xl border border-neutral-700 bg-neutral-800 p-6 sm:p-7">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-neutral-700 mb-5">
                    <p.icon size={20} className="text-primary-dark" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-h4 font-semibold text-base-white mb-2">{p.title}</h3>
                  <p className="text-body1 text-neutral-400">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900">
        <div className="container-page py-16 sm:py-20 max-w-3xl">
          <Reveal>
            <h2 className="text-h3 font-semibold text-base-white mb-8">
              Security FAQ
            </h2>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
