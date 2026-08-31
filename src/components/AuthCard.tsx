"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Button from "./Button";
import SignupCard from "./SignupCard";

interface AuthCardProps {
  mode: "login" | "signup";
}

export default function AuthCard({ mode }: AuthCardProps) {
  const isLogin = mode === "login";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-neutral-900 flex flex-col">
      <Link href="/" className="absolute left-5 top-4 z-10">
        <Image src="/assets/images/icon-mark.svg" alt="Uphold" width={32} height={32} />
      </Link>

      <div className="flex-1 flex items-center justify-center px-5 py-24 sm:py-16">
        {isLogin ? (
          <div className="flex w-full max-w-[960px] items-center justify-center lg:justify-between gap-16">
            <div className="hidden lg:flex flex-col gap-10 max-w-[420px] shrink-0">
              <div>
                <h1 className="text-h2 font-semibold text-base-white mb-3"><b>
                  The easiest way to invest</b>
                </h1>
                <p className="text-body1 text-[#e5e7eb]"><b>
                  Trade between multiple asset classes from one convenient account.
                  A large number of assets are now less than a minute away.</b>
                </p>
              </div>
              <Image
                src="/assets/images/login.svg"
                alt=""
                width={435}
                height={307}
                className="w-full h-auto max-w-[435px]"
              />
            </div>

            <div className="w-full max-w-[380px] shrink-0">
              <div className="rounded-2xl bg-neutral-800 p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-h4 font-semibold text-base-white"><b>Log in to Uphold</b></h3>
                  <p className="mt-1 text-body1 text-neutral-400">
                    Not a member?{" "}
                    <Link href="/get-started" className="text-primary-dark font-medium">
                      Sign up now
                    </Link>
                  </p>
                </div>

                <form className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-body2 font-semibold text-base-white mb-1.5">
                      <b>Email address</b>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 text-body1 text-base-white outline-none focus:border-primary-dark transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-body2 font-semibold text-base-white mb-1.5">
                      <b>Password</b>
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 pr-12 text-body1 text-base-white outline-none focus:border-primary-dark transition-colors"
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-base-white/80 hover:text-base-white"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <Link href="#" className="inline-block text-body1 text-primary-dark font-medium">
                    <b>Forgot password?</b>
                  </Link>

                  <Button type="submit" className="w-full" size="lg">
                    Next
                  </Button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[380px]">
            <div className="rounded-2xl bg-neutral-800 p-6 sm:p-8">
              <SignupCard />
            </div>
          </div>
        )}
      </div>

      <footer className="py-6 px-5 text-center">
        <p className="text-body2 text-[#8897bf]">
          © Uphold, Inc. {new Date().getFullYear()}{" "}
          <span className="mx-1 text-neutral-600">•</span>{" "}
          <Link href="/legal/user-agreement" className="underline hover:text-base-white transition-colors">
            Terms &amp; Conditions
          </Link>{" "}
          <span className="mx-1 text-neutral-600">•</span>{" "}
          <Link href="/legal/privacy" className="underline hover:text-base-white transition-colors">
            Privacy Notice
          </Link>{" "}
          <span className="mx-1 text-neutral-600">•</span>{" "}
          <Link href="/legal/user-agreement" className="underline hover:text-base-white transition-colors">
            Legal
          </Link>
        </p>
      </footer>
    </div>
  );
}
