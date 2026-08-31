import Button from "@/components/Button";
import ScrollHero from "@/components/ScrollHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <ScrollHero />

      {/* Interest account comparison */}
      <section className="bg-neutral-900 border-t border-neutral-800">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <div className="text-center mb-12">
              <h4 className="text-hero-mobile sm:text-hero font-semibold text-base-white text-balance">
                <span className="text-primary-dark">Discover</span> Crypto Better
              </h4>
              <p className="mt-3 text-paragraph text-neutral-300"><b>
                We give you <span className="text-primary-light">an edge...</span></b>
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-h2 font-semibold text-base-white text-balance">
                  CryptoTrade is <span className="text-primary-light">the</span> platform to
                  discover important{" "}
                  <span className="text-primary-light">new tokens early.*</span>
                </h2>
                <p className="mt-4 text-body2 max-w-md"><b>
                  *Past performance does not indicate future results.</b>
                </p>
              </div>
              <div className="aspect-[3/2] rounded-2xl overflow-hidden">
                <video
                  src="/assets/video/graph.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-14 lg:mt-20 pt-10 border-t border-neutral-800 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 lg:gap-16">
              <h3 className="text-h1 font-semibold text-primary-light text-center">Why?</h3>
              <p className="text-paragraph text-base-white max-w-2xl lg:border-l lg:border-neutral-800 lg:pl-16">
                <b><span className="text-primary-light">
                  Because we&apos;re connected to many underlying trading venues,{" "}
                </span>
                we support a wide range of cryptoassets and endeavor to
                support important new tokens earlier than some other
                platforms.</b>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trade crypto better */}
      <section className="bg-white border-t border-neutral-200">
        <div className="container-page py-16 sm:py-20">
          <div className="text-center mb-12">
            <h4 className="text-hero-mobile sm:text-hero font-semibold text-neutral-900 text-balance">
              <span className="text-primary-light">Trade</span> Crypto Better
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h3 className="text-h3 font-semibold text-neutral-900">
                Simple, one-step trading…
              </h3>
              <p className="mt-6 text-paragraph text-neutral-900 max-w-md">
                CryptoTrade is{" "}
                <span className="text-primary-light">the easiest way to but and sell </span>
                 cryptocurrency.
              </p>
              <p className="mt-4 text-body1 text-neutral-900 max-w-md"><b>
                Unlike any other platform, we allow you to trade {" "}
                <span className="text-primary-light">in just one step</span>{" "}
                between any supported assets.</b>
              </p>
            </Reveal>
            <div className="flex flex-col gap-6">
              <Reveal>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border-neutral-200 bg-white">
                  <video
                    src="/assets/video/transaction.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border-neutral-200 bg-white">
                  <video
                    src="/assets/video/bitcoin.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Earn crypto better */}
      <section className="bg-white border-t border-neutral-200">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <div className="text-center mb-12">
              <h4 className="text-hero-mobile sm:text-hero font-semibold text-neutral-900 text-balance">
                <span className="text-primary-light">Earn</span> Crypto Better
              </h4>
              <p className="mt-3 text-paragraph text-neutral-900">
                Put <span className="text-primary-light">your assets to work...</span>
              </p>
            </div>

            <div className="flex justify-center">
              <video
                poster="/assets/images/coins.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-2xl h-auto"
              >
                <source media="(min-width: 768px)" src="/assets/video/coin_video1.webm" type="video/webm" />
                <source media="(max-width: 768px)" src="/assets/video/mobileview-coins.webm" type="video/webm" />
              </video>
            </div>

            <div className="mt-10 max-w-2xl mx-auto text-center space-y-4">
              <p className="text-h4 font-medium text-neutral-900">
                Receive staking rewards of up to 2.37%.
              </p>
              <p className="text-h4 font-medium text-neutral-500">
                Instantly stake and unstake more than 20 digital assets.
              </p>
              <p className="text-h4 font-medium text-neutral-300">
                A uniquely flexible experience, with one of the broadest
                ranges of assets.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center font-bold justify-center gap-4">
              <span className="text-body1 text-neutral-900">Get up to 2.37% APY</span>
              <Button href="/products/staking" showArrow icon="external" className="text-white font-bold">
                Start earning
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Secure crypto better */}
      <section className="bg-white border-t border-neutral-200">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <div className="text-center mb-12">
              <h4 className="text-hero-mobile sm:text-hero font-semibold text-neutral-900 text-balance">
                <span className="text-primary-light">Secure</span> Crypto Better
              </h4>
              <p className="mt-3 text-paragraph text-neutral-900">
                Why millions of customers trust CryptoTrade:
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="group rounded-2xl bg-neutral-100 p-6 h-full overflow-hidden">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/assets/images/TRANSPARENCY.jpg"
                    alt="Radical transparency"
                    className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
                <p className="mt-6 text-body1 text-neutral-700">
                  We have been the pioneers of{" "}
                  <span className="text-primary-light">radical transparency</span>{" "}
                  in the crypto space since 2014.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group rounded-2xl bg-neutral-100 p-6 h-full overflow-hidden">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/assets/images/RESERVED.jpg"
                    alt="100% reserved"
                    className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
                <p className="mt-6 text-body1 text-neutral-700">
                  We <span className="text-primary-light">never</span> loan
                  out customer assets - and we don&apos;t just say it,{" "}
                  <span className="text-primary-light">we prove it</span>.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="group rounded-2xl bg-neutral-100 p-6 h-full overflow-hidden">
                <p className="text-body1 text-neutral-700">
                  We publish our assets and liabilities every 30 seconds,{" "}
                  <span className="text-primary-light">on this website</span>,
                  for all to see.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl">
                  <img
                    src="/assets/images/$chart.jpg"
                    alt="Assets and liabilities chart"
                    className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection title="Join CryptoTrade" highlight="today" />
      
    </>
  );
}
