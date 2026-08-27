import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Cookie Policy — CryptoTrade" };

const sections = [
  {
    id: "what-are-cookies",
    heading: "1. What are cookies",
    body: [
      "Cookies are small text files placed on your device that help websites remember information about your visit, such as preferences and login state.",
    ],
  },
  {
    id: "types-we-use",
    heading: "2. Types of cookies we use",
    body: [
      "Essential cookies are required for core site functionality, such as staying logged in. Analytics cookies help us understand how the platform is used. Preference cookies remember settings like language.",
    ],
  },
  {
    id: "managing-cookies",
    heading: "3. Managing cookies",
    body: [
      "You can control or disable cookies through your browser settings. Disabling essential cookies may affect the functionality of the platform.",
    ],
  },
  {
    id: "third-party",
    heading: "4. Third-party cookies",
    body: [
      "Some cookies are placed by third-party services we use for analytics and security. These providers have their own privacy and cookie practices.",
    ],
  },
];

export default function CookiePolicyPage() {
  return <LegalLayout title="Cookie policy" updated="August 1, 2026" sections={sections} />;
}
