import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

interface AuthCardProps {
  mode: "login" | "signup";
}

export default function AuthCard({ mode }: AuthCardProps) {
  const isLogin = mode === "login";

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-neutral-900 py-16 px-5">
      <div className="w-full max-w-[420px]">
        <div className="flex flex-col items-center mb-8">
          <Image src="/assets/images/logo.png" alt="CryptoTrade" width={48} height={48} className="mb-4" />
          <h1 className="text-h3 font-semibold text-base-white">
            {isLogin ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-2 text-body1 text-neutral-400 text-center">
            {isLogin
              ? "Log in to buy, sell and earn crypto."
              : "Get started in minutes — no fees to sign up."}
          </p>
        </div>

        <form className="rounded-2xl border border-neutral-700 bg-neutral-800 p-6 sm:p-8 space-y-5">
          <div>
            <label htmlFor="email" className="block text-body2 text-neutral-400 mb-1.5">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-body2 text-neutral-400 mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Continue
          </Button>
        </form>

        <p className="mt-6 text-center text-body1 text-neutral-400">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/get-started" className="text-primary-dark font-medium">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="text-primary-dark font-medium">
                Log in
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
