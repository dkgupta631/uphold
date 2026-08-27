import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Careers — CryptoTrade",
  description: "Open roles at CryptoTrade — help us build the future of finance.",
};

const ROLES = [
  { title: "Senior Backend Engineer", team: "Engineering", location: "Remote" },
  { title: "Product Designer", team: "Design", location: "Lisbon, PT" },
  { title: "Compliance Analyst", team: "Legal & Compliance", location: "London, UK" },
  { title: "Security Engineer", team: "Security", location: "Remote" },
  { title: "Growth Marketing Manager", team: "Marketing", location: "New York, US" },
  { title: "Customer Support Specialist", team: "Support", location: "Remote" },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container-page pt-14 pb-12 sm:pt-20 sm:pb-16">
          <Reveal>
            <h1 className="text-h1-mobile sm:text-h1 font-semibold text-base-white text-balance max-w-xl">
              Build the future of finance with us
            </h1>
            <p className="mt-4 text-paragraph text-neutral-400 max-w-xl">
              We&apos;re a distributed team working on trading, custody and
              infrastructure at global scale. Here&apos;s where we&apos;re
              hiring right now.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-900">
        <div className="container-page py-14 sm:py-16">
          <Reveal>
            <div className="divide-y divide-neutral-800 border-y border-neutral-800">
              {ROLES.map((role) => (
                <div
                  key={role.title}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6"
                >
                  <div>
                    <h3 className="text-h4 font-semibold text-base-white">{role.title}</h3>
                    <p className="mt-1 text-body1 text-neutral-400">{role.team}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="inline-flex items-center gap-1.5 text-body1 text-neutral-400">
                      <MapPin size={15} />
                      {role.location}
                    </span>
                    <Button href="/contact-us" variant="outline">
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Don't see the right role?"
        subtitle="We're always looking for great people. Reach out and tell us what you'd bring to the team."
        buttonLabel="Get in touch"
        buttonHref="/contact-us"
      />
    </>
  );
}
