"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "@/components/Button";

const SLIDES = [
  {
    word: "Discover",
    stat: "300+",
    description: "Discover one of the widest ranges of cryptocurrencies",
  },
  {
    word: "Earn",
    stat: "4.25%",
    description: "Earn up to 4.25% APY on your idle crypto holdings",
  },
  {
    word: "Trade",
    stat: "1-step",
    description: "Trade any asset directly for any other in a single step",
  },
  {
    word: "Secure",
    stat: "30s",
    description: "Reserves published and refreshed every 30 seconds",
  },
];

const N = SLIDES.length;
const TRANSITION = 0.05;

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function segmentRange(index: number) {
  const segStart = index / N;
  const segEnd = (index + 1) / N;
  return {
    fadeInStart: clamp01(segStart - TRANSITION),
    segStart,
    fadeOutStart: clamp01(segEnd - TRANSITION),
    segEnd,
  };
}

function interpolate(points: number[], values: number[]) {
  return (p: number) => {
    const last = points.length - 1;
    if (p <= points[0]) return values[0];
    if (p >= points[last]) return values[last];
    for (let i = 0; i < last; i++) {
      if (p <= points[i + 1]) {
        const span = points[i + 1] - points[i];
        const t = span === 0 ? 1 : (p - points[i]) / span;
        return values[i] + (values[i + 1] - values[i]) * t;
      }
    }
    return values[last];
  };
}

function keyframeFn(
  index: number,
  range: ReturnType<typeof segmentRange>,
  values: [number, number, number, number]
) {
  const { fadeInStart, segStart, fadeOutStart, segEnd } = range;
  const isFirst = index === 0;
  const [fadeInValue, restValue, fadeOutValue, endValue] = values;

  if (isFirst) {
    return interpolate([segStart, fadeOutStart, segEnd], [restValue, fadeOutValue, endValue]);
  }
  return interpolate(
    [fadeInStart, segStart, fadeOutStart, segEnd],
    [fadeInValue, restValue, fadeOutValue, endValue]
  );
}

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const barWidth = useTransform(scrollYProgress, (p) => {
    const t = Math.min(p, 0.999999);
    const local = (t * N) % 1;
    return `${Math.min(100, Math.max(0, local * 100))}%`;
  });

  return (
    <section ref={sectionRef} className="relative bg-neutral-900" style={{ height: `${N * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 0%, rgba(132,251,127,0.16) 0%, rgba(9,13,20,0) 60%)",
          }}
        />
        <div className="container-page relative flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-pill border border-neutral-700 bg-neutral-800 px-4 py-1.5 text-body2 text-neutral-400 mb-6">
            <Sparkles size={13} className="text-primary-dark" />
            Trusted since 2014
          </span>

          <h1 className="text-hero-mobile sm:text-hero font-semibold text-base-white text-balance text-center">
            <span className="relative block h-[40px] sm:h-[56px] overflow-hidden">
              {SLIDES.map((slide, index) => (
                <Word key={slide.word} scrollYProgress={scrollYProgress} index={index}>
                  {slide.word}
                </Word>
              ))}
            </span>
            Crypto Better
          </h1>

          <div className="mt-7 h-[3px] w-full max-w-[220px] rounded-pill bg-neutral-700 overflow-hidden">
            <motion.div
              className="h-full rounded-pill bg-base-white"
              style={{ width: barWidth }}
            />
          </div>

          <div
            className="mt-10 w-full max-w-sm relative min-h-[168px]"
            style={{ perspective: 1200 }}
          >
            {SLIDES.map((slide, index) => (
              <Card key={slide.stat} scrollYProgress={scrollYProgress} index={index}>
                <div className="text-[40px] leading-none font-semibold text-base-white">
                  {slide.stat}
                </div>
                <p className="mt-4 text-body1 text-neutral-300 max-w-[240px]">
                  {slide.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button href="/get-started" size="lg" showArrow>
              Get the app
            </Button>
            <Button href="/market" variant="ghost" size="lg">
              See live prices
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  index,
  scrollYProgress,
  children,
}: {
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  children: React.ReactNode;
}) {
  const range = segmentRange(index);
  const isLast = index === N - 1;

  const opacity = useTransform(scrollYProgress, keyframeFn(index, range, [0, 1, 1, isLast ? 1 : 0]));
  const y = useTransform(scrollYProgress, keyframeFn(index, range, [20, 0, 0, isLast ? 0 : -20]));

  return (
    <motion.span
      style={{ opacity, y }}
      className="absolute inset-x-0 top-0 text-primary-dark"
    >
      {children}
    </motion.span>
  );
}

function Card({
  index,
  scrollYProgress,
  children,
}: {
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  children: React.ReactNode;
}) {
  const range = segmentRange(index);
  const isFirst = index === 0;
  const isLast = index === N - 1;

  const rotateX = useTransform(
    scrollYProgress,
    keyframeFn(index, range, [isFirst ? 0 : 90, 0, 0, isLast ? 0 : -90])
  );
  const opacity = useTransform(scrollYProgress, keyframeFn(index, range, [0, 1, 1, isLast ? 1 : 0]));

  return (
    <motion.div
      style={{
        rotateX,
        opacity,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 rounded-2xl border border-neutral-700 bg-gradient-to-br from-primary-dark/20 via-neutral-800 to-neutral-900 p-7 sm:p-8 text-left"
    >
      {children}
    </motion.div>
  );
}
