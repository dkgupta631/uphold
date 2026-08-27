import Button from "./Button";
import Reveal from "./Reveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Join CryptoTrade today",
  subtitle = "Buy, sell, send and earn crypto — all in one simple, secure platform.",
  buttonLabel = "Get started",
  buttonHref = "/get-started",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 border-t border-neutral-800">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(132,251,127,0.14) 0%, rgba(9,13,20,0) 70%)",
        }}
      />
      <div className="container-page relative py-20 sm:py-28 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-h1 sm:text-[40px] sm:leading-[48px] font-semibold text-base-white text-balance max-w-2xl">
            {title}
          </h2>
          <p className="mt-4 text-paragraph text-neutral-400 max-w-xl mx-auto">{subtitle}</p>
          <div className="mt-8">
            <Button href={buttonHref} size="lg" showArrow>
              {buttonLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
