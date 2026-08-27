import type { Metadata } from "next";
import AuthCard from "@/components/AuthCard";

export const metadata: Metadata = { title: "Get started — CryptoTrade" };

export default function GetStartedPage() {
  return <AuthCard mode="signup" />;
}
