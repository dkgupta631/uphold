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

function normalizePath(path: string) {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

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
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6">
      <nav
        className={cn(
          "mx-auto max-w-[1280px] flex h-[72px] items-center justify-between rounded-full px-5 sm:px-8 bg-neutral-600 transition-shadow duration-300 ease-out",
          scrolled || open
            ? "shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
            : "shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
        )}
      >
        <div className="flex items-center gap-10">
          <Logo />
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = normalizePath(pathname) === normalizePath(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-body1 font-bold transition-colors",
                      active
                        ? "text-primary-light"
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

        <div className="flex lg:hidden items-center gap-3">
          {!open && (
            <Button href="/get-started" variant="primary" size="md" showArrow icon="external">
              Get started
            </Button>
          )}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-primary-light p-1 -mr-1"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="mx-auto max-w-[1280px] mt-3 rounded-3xl bg-neutral-600 px-5 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = normalizePath(pathname) === normalizePath(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "py-3 text-h4 font-bold border-b border-white/10 last:border-b-0",
                      active ? "text-primary-light" : "text-base-white/90"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 mt-6">
                <Button href="/login" variant="dark" className="w-full">
                  Login
                </Button>
                <Button href="/get-started" variant="primary" showArrow className="w-full">
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
