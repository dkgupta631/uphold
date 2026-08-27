import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact us — CryptoTrade",
  description: "Get in touch with the CryptoTrade team.",
};

const CHANNELS = [
  { icon: MessageCircle, title: "Support center", description: "Browse help articles or chat with our support team." },
  { icon: Mail, title: "Email us", description: "support@cryptotrade.example — we usually reply within 24 hours." },
  { icon: Phone, title: "Enterprise sales", description: "Talk to our team about API access and enterprise plans." },
];

export default function ContactPage() {
  return (
    <section className="bg-neutral-900">
      <div className="container-page py-14 sm:py-20">
        <Reveal>
          <h1 className="text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance max-w-xl">
            Get in touch
          </h1>
          <p className="mt-4 text-paragraph text-neutral-400 max-w-xl">
            Questions about your account, a partnership, or the press? We&apos;d
            love to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">
          <Reveal>
            <div className="space-y-6">
              {CHANNELS.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-neutral-800 border border-neutral-700 shrink-0">
                    <c.icon size={19} className="text-primary-dark" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-h4 font-semibold text-base-white">{c.title}</h3>
                    <p className="mt-1 text-body1 text-neutral-400">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-2xl border border-neutral-700 bg-neutral-800 p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-body2 text-neutral-400 mb-1.5">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-body2 text-neutral-400 mb-1.5">
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-body2 text-neutral-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors resize-none"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send message
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
