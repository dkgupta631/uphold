import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "User Agreement — CryptoTrade" };

const sections = [
  {
    id: "acceptance",
    heading: "1. Acceptance of terms",
    body: [
      "By creating an account or using CryptoTrade's services, you agree to be bound by this User Agreement and any policies referenced within it.",
      "If you do not agree to these terms, you should not access or use the platform.",
    ],
  },
  {
    id: "eligibility",
    heading: "2. Eligibility",
    body: [
      "You must be at least 18 years old and legally capable of entering into binding contracts in your jurisdiction to use CryptoTrade.",
      "Certain services may not be available in all regions due to local regulatory requirements.",
    ],
  },
  {
    id: "accounts",
    heading: "3. Your account",
    body: [
      "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
      "You agree to notify us immediately of any unauthorized use of your account.",
    ],
  },
  {
    id: "trading",
    heading: "4. Trading and order execution",
    body: [
      "Orders placed through the platform are executed on a best-efforts basis. Prices are subject to market volatility and may change between the time an order is placed and executed.",
      "CryptoTrade does not guarantee execution at a specific price except where explicitly stated for a given order type.",
    ],
  },
  {
    id: "fees",
    heading: "5. Fees",
    body: [
      "Applicable fees for trading, transfers and other services are disclosed prior to transaction confirmation and are also available on our service fees page.",
    ],
  },
  {
    id: "termination",
    heading: "6. Suspension and termination",
    body: [
      "We may suspend or terminate your access to the platform if we reasonably believe you have violated this agreement or applicable law.",
    ],
  },
  {
    id: "liability",
    heading: "7. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, CryptoTrade is not liable for indirect, incidental or consequential damages arising from use of the platform.",
    ],
  },
  {
    id: "changes",
    heading: "8. Changes to this agreement",
    body: [
      "We may update this agreement from time to time. Continued use of the platform after changes take effect constitutes acceptance of the revised terms.",
    ],
  },
];

export default function UserAgreementPage() {
  return <LegalLayout title="User Agreement" updated="August 1, 2026" sections={sections} />;
}
