"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, ChevronDown, ChevronLeft, Eye, EyeOff, Globe, Search, X } from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { COUNTRIES, type Country } from "@/data/countries";

const DEFAULT_COUNTRY = COUNTRIES.find((c) => c.iso2 === "us")!;

const BUSINESS_OPTIONS = [
  {
    title: "Business account",
    description: "I want to use Uphold Wallet for my business.",
  },
  {
    title: "Enterprise APIs",
    description: "I'm an API partner and want to integrate with the Enterprise APIs.",
  },
  {
    title: "Institutional investor / liquidity partner",
    description: "I'm an institutional / OTC desk / high volume individual trader.",
  },
];

const BUSINESS_TYPES = [
  "Hedge Fund",
  "Family Office",
  "Asset Manager",
  "Broker-Dealer",
  "Proprietary Trading Firm",
  "Venture Capital",
  "Private Equity",
  "Other",
];

const AUM_OPTIONS = [
  "$1,000,000 - $10,000,000",
  "$10,000,000 - $100,000,000",
  "$100,000,000 - $1,000,000,000",
  "Greater than $1,000,000,000",
];

const VOLUME_OPTIONS = [
  "Less than $100,000",
  "$100,000 - $1,000,000",
  "$1,000,000 - $5,000,000",
  "Greater than $5,000,000",
];

const EMAIL_RE = /^\S+@\S+\.\S+$/;

type BusinessStep = "select" | "email" | "details" | "institutional" | "success";

function CountryPickerPanel({
  query,
  onQueryChange,
  filtered,
  showDialCode,
  onBack,
  onSelect,
}: {
  query: string;
  onQueryChange: (q: string) => void;
  filtered: Country[];
  showDialCode: boolean;
  onBack: () => void;
  onSelect: (c: Country) => void;
}) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <button
          type="button"
          aria-label="Back"
          onClick={onBack}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-600 text-base-white hover:border-neutral-400 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <h3 className="flex-1 text-center text-h4 font-semibold text-base-white pr-8">
          <b>Select country</b>
        </h3>
      </div>

      <div className="relative mb-4">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          autoFocus
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search"
          className="w-full rounded-pill border border-neutral-600 bg-neutral-900 pl-10 pr-4 py-2.5 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
        />
      </div>

      <ul className="max-h-[320px] overflow-y-auto pr-1 space-y-1">
        {filtered.map((c) => (
          <li key={c.iso2}>
            <button
              type="button"
              onClick={() => onSelect(c)}
              className="flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left hover:bg-neutral-700 transition-colors"
            >
              <img
                src={`https://flagcdn.com/w40/${c.iso2}.png`}
                alt=""
                className="h-6 w-6 shrink-0 rounded-full object-cover bg-neutral-700"
              />
              <span className="flex-1 truncate text-body1 font-semibold text-base-white">
                {c.name}
              </span>
              {showDialCode && <span className="text-body2 text-neutral-400">{c.dialCode}</span>}
            </button>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="px-2 py-6 text-center text-body2 text-neutral-400">
            No countries found
          </li>
        )}
      </ul>
    </div>
  );
}

function OptionPickerPanel({
  title,
  question,
  description,
  options,
  onBack,
  onSelect,
}: {
  title: string;
  question?: string;
  description?: string;
  options: string[];
  onBack: () => void;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <button
          type="button"
          aria-label="Back"
          onClick={onBack}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-600 text-base-white hover:border-neutral-400 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <h3 className="flex-1 text-center text-h4 font-semibold text-base-white pr-8">
          <b>{title}</b>
        </h3>
      </div>

      {question && (
        <div className="mb-4">
          <p className="text-body1 font-semibold text-base-white">{question}</p>
          {description && <p className="mt-1 text-body2 text-neutral-400">{description}</p>}
        </div>
      )}

      <ul className="max-h-[320px] overflow-y-auto space-y-1">
        {options.map((opt) => (
          <li key={opt}>
            <button
              type="button"
              onClick={() => onSelect(opt)}
              className="w-full rounded-xl px-3 py-3 text-left text-body1 font-semibold text-base-white hover:bg-neutral-700 transition-colors"
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OtpModal({
  title,
  description,
  digits,
  onDigitsChange,
  onClose,
  onVerify,
}: {
  title: string;
  description: string;
  digits: string[];
  onDigitsChange: (digits: string[]) => void;
  onClose: () => void;
  onVerify: () => void;
}) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-5">
      <div className="w-full max-w-[380px] rounded-2xl border border-neutral-700 bg-neutral-800 p-6 sm:p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-h4 font-semibold text-base-white">
            <b>{title}</b>
          </h3>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="shrink-0 text-neutral-400 hover:text-base-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <p className="mt-2 text-body1 text-neutral-400">{description}</p>

        <div className="mt-6 flex justify-between gap-2">
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(-1);
                const next = [...digits];
                next[i] = value;
                onDigitsChange(next);
                if (value && i < digits.length - 1) {
                  refs.current[i + 1]?.focus();
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !digits[i] && i > 0) {
                  refs.current[i - 1]?.focus();
                }
              }}
              className="h-14 w-11 rounded-xl border-2 border-neutral-600 bg-transparent text-center text-h4 font-semibold text-base-white outline-none focus:border-primary-dark transition-colors sm:w-12"
            />
          ))}
        </div>

        <p className="mt-4 text-body2 text-neutral-400">
          Didn&apos;t get a code?{" "}
          <button
            type="button"
            onClick={() => onDigitsChange(Array(6).fill(""))}
            className="text-primary-dark font-medium"
          >
            Resend code
          </button>
        </p>

        <Button
          type="button"
          className="mt-6 w-full"
          size="lg"
          onClick={() => digits.every((d) => d !== "") && onVerify()}
        >
          Verify OTP
        </Button>
      </div>
    </div>
  );
}

function SuccessScreen({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-dark/15">
        <CheckCircle2 size={32} className="text-primary-dark" />
      </div>
      <h3 className="text-h4 font-semibold text-base-white">
        <b>Registration Success!</b>
      </h3>
      <p className="mt-2 text-body1 text-neutral-400">{message}</p>
      <Link href="/login" className="mt-6 text-body1 font-medium text-primary-dark">
        Back to log in
      </Link>
    </div>
  );
}

export default function SignupCard() {
  const [tab, setTab] = useState<"individual" | "business">("individual");

  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(6).fill(""));
  const [individualVerified, setIndividualVerified] = useState(false);

  const [businessStep, setBusinessStep] = useState<BusinessStep>("select");
  const [businessOption, setBusinessOption] = useState<string | null>(null);
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPassword, setBusinessPassword] = useState("");
  const [businessShowPassword, setBusinessShowPassword] = useState(false);
  const [businessCountry, setBusinessCountry] = useState<Country | null>(null);
  const [businessAccepted, setBusinessAccepted] = useState(false);
  const [businessPickerOpen, setBusinessPickerOpen] = useState(false);
  const [businessOtpOpen, setBusinessOtpOpen] = useState(false);
  const [businessOtpDigits, setBusinessOtpDigits] = useState<string[]>(Array(6).fill(""));

  const [instFullName, setInstFullName] = useState("");
  const [instEmail, setInstEmail] = useState("");
  const [instBusinessName, setInstBusinessName] = useState("");
  const [instBusinessWebsite, setInstBusinessWebsite] = useState("");
  const [instBusinessType, setInstBusinessType] = useState<string | null>(null);
  const [instCountry, setInstCountry] = useState<Country | null>(null);
  const [instAum, setInstAum] = useState<string | null>(null);
  const [instMonthlyVolume, setInstMonthlyVolume] = useState<string | null>(null);
  const [instAssetsOfInterest, setInstAssetsOfInterest] = useState("");
  const [instAdditionalInfo, setInstAdditionalInfo] = useState("");
  const [instCountryPickerOpen, setInstCountryPickerOpen] = useState(false);
  const [instBusinessTypePickerOpen, setInstBusinessTypePickerOpen] = useState(false);
  const [instAumPickerOpen, setInstAumPickerOpen] = useState(false);
  const [instVolumePickerOpen, setInstVolumePickerOpen] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const iso2 = typeof data?.country_code === "string" ? data.country_code.toLowerCase() : "";
        const match = COUNTRIES.find((c) => c.iso2 === iso2);
        if (match) setCountry(match);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dialCode.includes(q)
    );
  }, [query]);

  if (pickerOpen) {
    return (
      <CountryPickerPanel
        query={query}
        onQueryChange={setQuery}
        filtered={filtered}
        showDialCode
        onBack={() => {
          setPickerOpen(false);
          setQuery("");
        }}
        onSelect={(c) => {
          setCountry(c);
          setPickerOpen(false);
          setQuery("");
        }}
      />
    );
  }

  if (businessPickerOpen) {
    return (
      <CountryPickerPanel
        query={query}
        onQueryChange={setQuery}
        filtered={filtered}
        showDialCode={false}
        onBack={() => {
          setBusinessPickerOpen(false);
          setQuery("");
        }}
        onSelect={(c) => {
          setBusinessCountry(c);
          setBusinessPickerOpen(false);
          setQuery("");
        }}
      />
    );
  }

  if (instCountryPickerOpen) {
    return (
      <CountryPickerPanel
        query={query}
        onQueryChange={setQuery}
        filtered={filtered}
        showDialCode={false}
        onBack={() => {
          setInstCountryPickerOpen(false);
          setQuery("");
        }}
        onSelect={(c) => {
          setInstCountry(c);
          setInstCountryPickerOpen(false);
          setQuery("");
        }}
      />
    );
  }

  if (instBusinessTypePickerOpen) {
    return (
      <OptionPickerPanel
        title="Business type"
        options={BUSINESS_TYPES}
        onBack={() => setInstBusinessTypePickerOpen(false)}
        onSelect={(v) => {
          setInstBusinessType(v);
          setInstBusinessTypePickerOpen(false);
        }}
      />
    );
  }

  if (instAumPickerOpen) {
    return (
      <OptionPickerPanel
        title="Assets under management"
        question="What is the value of your assets under management?"
        description="Select the option that best matches your AUM."
        options={AUM_OPTIONS}
        onBack={() => setInstAumPickerOpen(false)}
        onSelect={(v) => {
          setInstAum(v);
          setInstAumPickerOpen(false);
        }}
      />
    );
  }

  if (instVolumePickerOpen) {
    return (
      <OptionPickerPanel
        title="Monthly Trading Volume"
        question="What is your monthly trading volume?"
        description="Select the option that best matches your typical monthly digital asset trading volume."
        options={VOLUME_OPTIONS}
        onBack={() => setInstVolumePickerOpen(false)}
        onSelect={(v) => {
          setInstMonthlyVolume(v);
          setInstVolumePickerOpen(false);
        }}
      />
    );
  }

  return (
    <div>
      {((tab === "individual" && !individualVerified) ||
        (tab === "business" && businessStep === "select")) && (
        <>
          <div className="mb-6">
            <h3 className="text-h4 font-semibold text-base-white">
              <b>Let&apos;s get you signed up!</b>
            </h3>
            <p className="mt-1 text-body1 text-neutral-400">
              Already have an account?{" "}
              <Link href="/login" className="text-primary-dark font-medium">
                Log in
              </Link>
            </p>
          </div>

          <div className="mb-6 flex gap-1 rounded-pill bg-neutral-700 p-1">
            {(["individual", "business"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t);
                  setBusinessStep("select");
                }}
                className={cn(
                  "flex-1 rounded-pill py-2 text-body2 font-semibold capitalize transition-colors",
                  tab === t ? "bg-neutral-600 text-base-white" : "text-neutral-400"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </>
      )}

      {tab === "individual" && individualVerified && (
        <SuccessScreen message="Your phone number has been verified and your account is ready to go." />
      )}

      {tab === "individual" && !individualVerified && (
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (phone && accepted) {
              setOtpDigits(Array(6).fill(""));
              setOtpOpen(true);
            }
          }}
        >
          <div>
            <label className="block text-body2 font-semibold text-base-white mb-1.5">
              <b>Phone number</b>
            </label>
            <div className="flex items-center rounded-xl border-2 border-neutral-600 pl-4 pr-4 transition-colors focus-within:border-primary-dark">
              <button
                type="button"
                aria-label="Select country code"
                onClick={() => setPickerOpen(true)}
                className="flex shrink-0 items-center gap-1.5 border-r border-neutral-600 py-4 pr-3"
              >
                <img
                  src={`https://flagcdn.com/w40/${country.iso2}.png`}
                  alt=""
                  className="h-5 w-5 rounded-full object-cover bg-neutral-700"
                />
                <ChevronDown size={14} className="text-neutral-400" />
              </button>
              <span className="shrink-0 pl-3 pr-2 py-4 text-body1 text-base-white">
                {country.dialCode}
              </span>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="091 234 567"
                className="min-w-0 flex-1 bg-transparent py-4 text-body1 text-base-white placeholder:text-neutral-400 outline-none"
              />
            </div>
          </div>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-600 bg-transparent accent-primary-dark"
            />
            <span className="text-body2 text-neutral-400">
              I accept Uphold&apos;s{" "}
              <Link href="/legal/user-agreement" className="text-primary-dark font-medium">
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link href="/legal/privacy" className="text-primary-dark font-medium">
                Privacy Notice
              </Link>
              , and consent to receive a one-time SMS for mobile number verification. Standard
              messaging and data rates may apply.
            </span>
          </label>

          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </form>
      )}

      {tab === "business" && businessStep === "select" && (
        <div className="space-y-5">
          <p className="text-body2 text-neutral-400">Tell us which product you&apos;re interested in.</p>
          <div className="space-y-3">
            {BUSINESS_OPTIONS.map((opt) => (
              <button
                key={opt.title}
                type="button"
                onClick={() => setBusinessOption(opt.title)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition-colors",
                  businessOption === opt.title ? "border-primary-dark" : "border-neutral-600"
                )}
              >
                <div className="flex-1">
                  <p className="text-body1 font-semibold text-base-white">{opt.title}</p>
                  <p className="mt-1 text-body2 text-neutral-400">{opt.description}</p>
                </div>
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                    businessOption === opt.title ? "border-primary-dark" : "border-neutral-600"
                  )}
                >
                  {businessOption === opt.title && (
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-dark" />
                  )}
                </span>
              </button>
            ))}
          </div>
          <Button
            type="button"
            className="w-full"
            size="lg"
            onClick={() => {
              if (!businessOption) return;
              setBusinessStep(
                businessOption === "Institutional investor / liquidity partner" ? "institutional" : "email"
              );
            }}
          >
            Next
          </Button>
        </div>
      )}

      {tab === "business" && businessStep === "email" && (
        <div>
          <button
            type="button"
            aria-label="Back"
            onClick={() => setBusinessStep("select")}
            className="mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-base-white hover:border-neutral-400 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          <h3 className="text-h4 font-semibold text-base-white">
            <b>Set up your business account</b>
          </h3>
          <p className="mt-3 text-body1 text-neutral-400">
            Enter your email address. 
          </p>

          <div className="mt-5">
            <label className="block text-body2 font-semibold text-base-white mb-1.5">
              <b>Email address</b>
            </label>
            <input
              type="email"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 text-body1 text-base-white outline-none focus:border-primary-dark transition-colors"
            />
          </div>

          <p className="mt-4 text-body2 text-neutral-400">
            Business account creation requires proof of authority and is subject to Uphold&apos;s{" "}
            <Link href="/legal/user-agreement" className="text-primary-dark font-medium">
              Terms &amp; Conditions
            </Link>{" "}
            or{" "}
            <Link href="/legal/user-agreement" className="text-primary-dark font-medium">
              US Terms and Conditions
            </Link>
            . Any information provided will be handled in accordance with our{" "}
            <Link href="/legal/privacy" className="text-primary-dark font-medium">
              Privacy Notice
            </Link>
            .
          </p>

          <Button
            type="button"
            className="mt-6 w-full"
            size="lg"
            onClick={() => {
              if (EMAIL_RE.test(businessEmail.trim())) {
                setBusinessOtpDigits(Array(6).fill(""));
                setBusinessOtpOpen(true);
              }
            }}
          >
            Next
          </Button>
        </div>
      )}

      {tab === "business" && businessStep === "details" && (
        <div>
          <button
            type="button"
            aria-label="Back"
            onClick={() => setBusinessStep("email")}
            className="mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-base-white hover:border-neutral-400 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          <h3 className="mb-5 text-h4 font-semibold text-base-white">
            <b>Set up your business account</b>
          </h3>

          <div className="space-y-5">
            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Email address</b>
              </label>
              <input
                type="email"
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 text-body1 text-base-white outline-none focus:border-primary-dark transition-colors"
              />
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Password</b>
              </label>
              <div className="relative">
                <input
                  type={businessShowPassword ? "text" : "password"}
                  value={businessPassword}
                  onChange={(e) => setBusinessPassword(e.target.value)}
                  className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 pr-12 text-body1 text-base-white outline-none focus:border-primary-dark transition-colors"
                />
                <button
                  type="button"
                  aria-label={businessShowPassword ? "Hide password" : "Show password"}
                  onClick={() => setBusinessShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-base-white/80 hover:text-base-white"
                >
                  {businessShowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Country where business is registered</b>
              </label>
              <button
                type="button"
                onClick={() => setBusinessPickerOpen(true)}
                className="flex w-full items-center justify-between rounded-xl border-2 border-neutral-600 px-4 py-4 text-left transition-colors hover:border-neutral-400"
              >
                <span className="flex items-center gap-2.5">
                  {businessCountry ? (
                    <>
                      <img
                        src={`https://flagcdn.com/w40/${businessCountry.iso2}.png`}
                        alt=""
                        className="h-5 w-5 rounded-full object-cover bg-neutral-700"
                      />
                      <span className="text-body1 text-base-white">{businessCountry.name}</span>
                    </>
                  ) : (
                    <>
                      <Globe size={18} className="text-neutral-400" />
                      <span className="text-body1 text-neutral-400">Select country</span>
                    </>
                  )}
                </span>
                <ChevronDown size={16} className="text-neutral-400" />
              </button>
            </div>

            <div className="space-y-3 text-body2 text-neutral-400">
              <p>In order to open a Business account, you must submit proof that you have the authority to do so.</p>
              <p>
                Your business must be registered and you&apos;ll need to produce documentation.
                Verification with Uphold may take up to 7 business days.
              </p>
            </div>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={businessAccepted}
                onChange={(e) => setBusinessAccepted(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-600 bg-transparent accent-primary-dark"
              />
              <span className="text-body2 text-neutral-400">
                I accept Uphold&apos;s{" "}
                <Link href="/legal/user-agreement" className="text-primary-dark font-medium">
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link href="/legal/privacy" className="text-primary-dark font-medium">
                  Privacy Notice
                </Link>
                .
              </span>
            </label>

            <Button
              type="button"
              className="w-full"
              size="lg"
              onClick={() =>
                businessPassword && businessCountry && businessAccepted && setBusinessStep("success")
              }
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {tab === "business" && businessStep === "institutional" && (
        <div>
          <button
            type="button"
            aria-label="Back"
            onClick={() => setBusinessStep("select")}
            className="mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-base-white hover:border-neutral-400 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          <h3 className="mb-5 text-h4 font-semibold text-base-white">
            <b>Set up your Institutional account</b>
          </h3>

          <div className="max-h-[420px] space-y-5 overflow-y-auto pr-1">
            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Full name</b>
              </label>
              <input
                value={instFullName}
                onChange={(e) => setInstFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
              />
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Email address</b>
              </label>
              <input
                type="email"
                value={instEmail}
                onChange={(e) => setInstEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
              />
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Business name (if applicable)</b>
              </label>
              <input
                value={instBusinessName}
                onChange={(e) => setInstBusinessName(e.target.value)}
                placeholder="Enter your business name"
                className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
              />
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Business website (if applicable)</b>
              </label>
              <input
                value={instBusinessWebsite}
                onChange={(e) => setInstBusinessWebsite(e.target.value)}
                placeholder="Enter your business website"
                className="w-full rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-4 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
              />
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Business type</b>
              </label>
              <button
                type="button"
                onClick={() => setInstBusinessTypePickerOpen(true)}
                className="flex w-full items-center justify-between rounded-xl border-2 border-neutral-600 px-4 py-4 text-left transition-colors hover:border-neutral-400"
              >
                <span className={cn("text-body1", instBusinessType ? "text-base-white" : "text-neutral-400")}>
                  {instBusinessType ?? "Select your business type"}
                </span>
                <ChevronDown size={16} className="text-neutral-400" />
              </button>
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Country of Registration (Residence if individual)</b>
              </label>
              <button
                type="button"
                onClick={() => setInstCountryPickerOpen(true)}
                className="flex w-full items-center justify-between rounded-xl border-2 border-neutral-600 px-4 py-4 text-left transition-colors hover:border-neutral-400"
              >
                <span className="flex items-center gap-2.5">
                  {instCountry ? (
                    <>
                      <img
                        src={`https://flagcdn.com/w40/${instCountry.iso2}.png`}
                        alt=""
                        className="h-5 w-5 rounded-full object-cover bg-neutral-700"
                      />
                      <span className="text-body1 text-base-white">{instCountry.name}</span>
                    </>
                  ) : (
                    <span className="text-body1 text-neutral-400">Select the country of registration</span>
                  )}
                </span>
                <ChevronDown size={16} className="text-neutral-400" />
              </button>
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Assets under management (if applicable)</b>
              </label>
              <button
                type="button"
                onClick={() => setInstAumPickerOpen(true)}
                className="flex w-full items-center justify-between rounded-xl border-2 border-neutral-600 px-4 py-4 text-left transition-colors hover:border-neutral-400"
              >
                <span className={cn("text-body1", instAum ? "text-base-white" : "text-neutral-400")}>
                  {instAum ?? "Select value of assets under management"}
                </span>
                <ChevronDown size={16} className="text-neutral-400" />
              </button>
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Monthly Trading Volume (Digital Assets)</b>
              </label>
              <button
                type="button"
                onClick={() => setInstVolumePickerOpen(true)}
                className="flex w-full items-center justify-between rounded-xl border-2 border-neutral-600 px-4 py-4 text-left transition-colors hover:border-neutral-400"
              >
                <span className={cn("text-body1", instMonthlyVolume ? "text-base-white" : "text-neutral-400")}>
                  {instMonthlyVolume ?? "Select monthly trading volume (Digital Assets)"}
                </span>
                <ChevronDown size={16} className="text-neutral-400" />
              </button>
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Assets of interest</b>
              </label>
              <textarea
                value={instAssetsOfInterest}
                onChange={(e) => setInstAssetsOfInterest(e.target.value)}
                placeholder="List the assets you're primarily interested in trading"
                rows={4}
                maxLength={500}
                className="w-full resize-none rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-3 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
              />
            </div>

            <div>
              <label className="block text-body2 font-semibold text-base-white mb-1.5">
                <b>Additional information (optional)</b>
              </label>
              <textarea
                value={instAdditionalInfo}
                onChange={(e) => setInstAdditionalInfo(e.target.value)}
                placeholder="Please provide any further information that would help us better understand your requirements"
                rows={4}
                maxLength={500}
                className="w-full resize-none rounded-xl border-2 border-neutral-600 bg-transparent px-4 py-3 text-body1 text-base-white placeholder:text-neutral-400 outline-none focus:border-primary-dark transition-colors"
              />
            </div>

            <p className="text-body2 text-neutral-400">
              We use this information to send communications about our products and services. You
              can unsubscribe at any time. See our{" "}
              <Link href="/legal/privacy" className="text-primary-dark font-medium">
                Privacy Notice
              </Link>
              .
            </p>

            <Button
              type="button"
              className="w-full"
              size="lg"
              onClick={() =>
                instFullName.trim() && EMAIL_RE.test(instEmail.trim()) && setBusinessStep("success")
              }
            >
              Submit
            </Button>
          </div>
        </div>
      )}

      {tab === "business" && businessStep === "success" && (
        <SuccessScreen message="We've received your business account request. We'll email you once it's verified." />
      )}

      {otpOpen && (
        <OtpModal
          title="Verify your phone number"
          description={`Enter the 6-digit code we sent to ${country.dialCode} ${phone}`}
          digits={otpDigits}
          onDigitsChange={setOtpDigits}
          onClose={() => setOtpOpen(false)}
          onVerify={() => {
            setOtpOpen(false);
            setIndividualVerified(true);
          }}
        />
      )}

      {businessOtpOpen && (
        <OtpModal
          title="Verify your email"
          description={`Enter the 6-digit code we sent to ${businessEmail}`}
          digits={businessOtpDigits}
          onDigitsChange={setBusinessOtpDigits}
          onClose={() => setBusinessOtpOpen(false)}
          onVerify={() => {
            setBusinessOtpOpen(false);
            setBusinessStep("details");
          }}
        />
      )}
    </div>
  );
}
