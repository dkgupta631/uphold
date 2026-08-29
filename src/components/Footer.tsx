"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "./SocialIcons";

type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

const COLUMNS: FooterSection[][] = [
  [
    {
      title: "Individuals",
      links: [
        { label: "CryptoTrade Debit Card", href: "/" },
        { label: "Equities", href: "/market" },
        { label: "USD Interest Account", href: "/" },
        { label: "CryptoTrade Rewards", href: "/" },
        { label: "CryptoTrade Vault", href: "/" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Enterprise APIs", href: "/enterprise" },
        { label: "Widgets", href: "/enterprise" },
        { label: "Topper on/offramp", href: "/enterprise" },
        { label: "OTC Trading", href: "/enterprise" },
        { label: "Listing Services", href: "/enterprise" },
        { label: "Infrastructure-as-a-Service", href: "/enterprise" },
        { label: "Treasury Management", href: "/enterprise" },
        { label: "Cards-as-a-Service", href: "/enterprise" },
        { label: "Developer", href: "/enterprise" },
      ],
    },
  ],
  [
    {
      title: "Company",
      links: [
        { label: "Careers", href: "/careers" },
        { label: "Contact us", href: "/contact-us" },
        { label: "Transparency", href: "/transparency" },
        { label: "Service fees", href: "/legal/disclosures" },
        { label: "News and media", href: "/blog" },
        { label: "Brand assets", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      title: "Buy crypto",
      links: [
        { label: "Market", href: "/market" },
        { label: "Daily market update", href: "/market" },
      ],
    },
  ],
  [
    {
      title: "Learn",
      links: [
        { label: "DCA calculator", href: "/learn" },
        { label: "Limit orders", href: "/learn" },
        { label: "Cryptionary", href: "/learn" },
        { label: "How to buy", href: "/learn" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Developer agreement", href: "/legal/user-agreement" },
        { label: "Cookie policy", href: "/legal/cookie-policy" },
        { label: "Disclosures", href: "/legal/disclosures" },
        { label: "Regulators", href: "/transparency" },
        { label: "User Agreement", href: "/legal/user-agreement" },
        { label: "Privacy notice", href: "/legal/privacy" },
        { label: "Referral program terms", href: "/legal/user-agreement" },
      ],
    },
  ],
  [
    {
      title: "Help",
      links: [
        { label: "Platform status", href: "/security" },
        { label: "Support center", href: "/contact-us" },
      ],
    },
  ],
];

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

const LANGUAGES = ["English (Global)", "English (North America)", "Español", "Français"];

function FooterSectionBlock({ section }: { section: FooterSection }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-neutral-800 sm:border-none py-5 sm:py-0 sm:mb-8 last:sm:mb-0">
      <button
        className="flex w-full items-center justify-between sm:pointer-events-none sm:mb-4"
        onClick={() => setExpanded((v) => !v)}
      >
        <h4 className="text-body1 font-semibold text-primary-light">{section.title}</h4>
        <ChevronDown
          size={18}
          className={cn(
            "sm:hidden text-neutral-400 transition-transform",
            expanded && "rotate-180"
          )}
        />
      </button>
      <ul
        className={cn(
          "flex-col gap-3 mt-4 sm:mt-0 sm:flex",
          expanded ? "flex" : "hidden"
        )}
      >
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-body2 text-base-white/90 hover:text-base-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState(LANGUAGES[0]);

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-14 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {COLUMNS.map((column, i) => (
            <div key={i}>
              {column.map((section) => (
                <FooterSectionBlock section={section} key={section.title} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/assets/images/logo.svg" alt="CryptoTrade" width={100} height={40} />
            {/* <span className="text-body1 font-semibold text-base-white">CryptoTrade</span> */}
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-primary-light hover:text-primary-dark transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="relative w-fit">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 text-body2 text-neutral-400 hover:text-base-white border border-neutral-700 rounded-pill px-4 py-2 w-fit"
            >
              <Globe size={14} />
              {language}
              <ChevronDown
                size={14}
                className={cn("transition-transform", langOpen && "rotate-180")}
              />
            </button>
            {langOpen && (
              <ul className="absolute right-0 bottom-full mb-2 w-56 rounded-xl border border-neutral-700 bg-neutral-800 py-2 shadow-lg z-10">
                {LANGUAGES.map((lang) => (
                  <li key={lang}>
                    <button
                      onClick={() => {
                        setLanguage(lang);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-body2 hover:bg-neutral-700 transition-colors",
                        lang === language ? "text-primary-light" : "text-neutral-300"
                      )}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-body2 text-[#8897bf] space-y-3">
          <p>
            Uphold Worldwide Ltd., Reg No.: 177867, Registered Office: Aristo House, Office A, The Balmoral, #78 Sanford Drive, Nassau, Bahamas.
          </p>
          <p>
            Uphold is certified for SOC 2 Type 2, ISO 27001, and PCI DSS, ensuring rigorous control over our information security management systems, data handling, and payment processing practices. Furthermore, we comply with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and the UK Data Protection Act, underscoring our dedication to protecting the personal data and privacy rights of our global customers.
          </p>
          <p>© {new Date().getFullYear()} Uphold Worldwide Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
