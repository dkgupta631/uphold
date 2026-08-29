"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Individuals", href: "/" },
  { label: "Market", href: "/market" },
  { label: "Learn", href: "/learn" },
  { label: "Transparency", href: "/transparency" },
  { label: "Enterprise", href: "/enterprise" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <Image src="/assets/images/logo.png" alt="CryptoTrade" width={100} height={50} priority />
      {/* <span className="text-[20px] font-semibold tracking-tight text-base-white">
        CryptoTrade
      </span> */}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out",
        scrolled || open
          ? "bg-neutral-900/95 backdrop-blur border-b border-neutral-700 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          : "bg-neutral-900/40 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-body1 font-medium transition-colors",
                      active
                        ? "text-primary-dark"
                        : "text-base-white/85 hover:text-base-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="/login" variant="ghost">
            Login
          </Button>
          <Button href="/get-started" variant="primary" showArrow>
            Get started
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-base-white p-2 -mr-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-neutral-900 border-b border-neutral-700"
          >
            <div className="container-page py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-h4 font-medium text-base-white/90 border-b border-neutral-800 last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                <Button href="/login" variant="outline" className="w-full">
                  Login
                </Button>
                <Button
                  href="/get-started"
                  variant="primary"
                  showArrow
                  className="w-full"
                >
                  Get started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
