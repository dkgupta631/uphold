"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "./SocialIcons";

type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

const COLUMNS: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Platform", href: "/" },
      { label: "Enterprise APIs", href: "/enterprise" },
      { label: "Widgets", href: "/enterprise" },
      { label: "On/off-ramp", href: "/enterprise" },
      { label: "OTC Trading", href: "/enterprise" },
      { label: "Listing services", href: "/enterprise" },
      { label: "Infrastructure-as-a-Service", href: "/enterprise" },
      { label: "Treasury management", href: "/enterprise" },
      { label: "Cards-as-a-Service", href: "/enterprise" },
      { label: "Developer", href: "/enterprise" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Learn hub", href: "/learn" },
      { label: "How to buy", href: "/learn" },
      { label: "DCA calculator", href: "/learn" },
      { label: "Limit orders", href: "/learn" },
      { label: "Cryptionary", href: "/learn" },
      { label: "Daily market update", href: "/learn" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Market", href: "/market" },
      { label: "Company", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Brand assets", href: "/about" },
      { label: "News & media", href: "/blog" },
      { label: "Service fees", href: "/legal/disclosures" },
      { label: "Transparency", href: "/transparency" },
      { label: "Careers", href: "/careers" },
      { label: "Contact us", href: "/contact-us" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support center", href: "/contact-us" },
      { label: "Platform status", href: "/security" },
      { label: "Legal", href: "/legal/user-agreement" },
      { label: "User agreement", href: "/legal/user-agreement" },
      { label: "Privacy notice", href: "/legal/privacy" },
      { label: "Cookie policy", href: "/legal/cookie-policy" },
      { label: "Disclosures", href: "/legal/disclosures" },
      { label: "Regulators", href: "/transparency" },
      { label: "Referral terms", href: "/legal/user-agreement" },
      { label: "Developer agreement", href: "/legal/user-agreement" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Individuals", href: "/" },
      { label: "Debit card", href: "/" },
      { label: "Equities", href: "/market" },
      { label: "Rewards", href: "/" },
      { label: "Vault", href: "/" },
      { label: "Interest account", href: "/" },
    ],
  },
];

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

function FooterColumnBlock({ column }: { column: FooterColumn }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-neutral-800 sm:border-none py-5 sm:py-0">
      <button
        className="flex w-full items-center justify-between sm:pointer-events-none sm:mb-4"
        onClick={() => setExpanded((v) => !v)}
      >
        <h4 className="text-body1 font-semibold text-base-white">{column.title}</h4>
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
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-body2 text-neutral-400 hover:text-base-white transition-colors"
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
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-14 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8">
          {COLUMNS.map((column, i) => (
            <FooterColumnBlock column={column} key={`${column.title}-${i}`} />
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/assets/images/logo.png" alt="CryptoTrade" width={28} height={28} />
            <span className="text-body1 font-semibold text-base-white">CryptoTrade</span>
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-neutral-400 hover:text-base-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button className="flex items-center gap-2 text-body2 text-neutral-400 hover:text-base-white border border-neutral-700 rounded-pill px-4 py-2 w-fit">
            English (North America)
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="mt-8 text-body2 text-neutral-400 space-y-3 max-w-4xl">
          <p>
            CryptoTrade is a product name used for illustrative purposes and is not
            affiliated with any real financial institution. Digital asset services are
            offered through group entities in applicable jurisdictions, subject to
            regulatory registration and licensing requirements. Cryptoasset prices can
            be volatile. The value of your investments can go down as well as up and
            you may get back less than you invest.
          </p>
          <p>© {new Date().getFullYear()} CryptoTrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
