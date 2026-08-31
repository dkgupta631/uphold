import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Disclosures — CryptoTrade" };

const sections = [
  {
    id: "risk",
    heading: "1. Risk disclosure",
    body: [
      "Cryptoassets are highly volatile and unregulated in many jurisdictions. Prices can rise or fall rapidly, and you may lose some or all of the funds you invest.",
      "Past performance is not indicative of future results. You should only trade with funds you can afford to lose.",
    ],
  },
  {
    id: "fees",
    heading: "2. Service fees",
    body: [
      "Trading, transfer and account fees vary by asset, order type and payment method. Current fee schedules are available within the platform prior to order confirmation.",
    ],
  },
  {
    id: "regulatory",
    heading: "3. Regulatory status",
    body: [
      "CryptoTrade operates under applicable licenses and registrations in the jurisdictions where it offers services. Availability of specific products varies by region.",
    ],
  },
  {
    id: "no-advice",
    heading: "4. No investment advice",
    body: [
      "Nothing on this platform constitutes financial, investment, legal or tax advice. You should consult independent professional advice before making investment decisions.",
    ],
  },
];

export default function DisclosuresPage() {
  return <LegalLayout title="Disclosures" updated="August 1, 2026" sections={sections} />;
}
