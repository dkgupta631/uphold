import Button from "./Button";
import Reveal from "./Reveal";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Join CryptoTrade",
  highlight = "",
  subtitle,
  buttonLabel = "Get started",
  buttonHref = "/get-started",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 border-t border-neutral-800">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source media="(min-width: 768px)" src="/assets/video/desktopview-compressed.mp4" type="video/mp4" />
        <source media="(max-width: 768px)" src="/assets/video/mobileview-compressed.mp4" type="video/mp4" />
      </video>
      <div className="container-page relative py-20 sm:py-28 flex flex-col sm:flex-row items-center justify-between gap-8">
        <Reveal>
          <h2 className="text-h1 sm:text-[40px] sm:leading-[48px] font-semibold text-base-white text-balance">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-primary-light">{highlight}</span>
              </>
            )}
          </h2>
          {subtitle && (
            <p className="mt-4 text-paragraph text-neutral-400 max-w-xl">{subtitle}</p>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <Button href={buttonHref} size="lg" showArrow>
            {buttonLabel}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
