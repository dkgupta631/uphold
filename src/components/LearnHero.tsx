"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function LearnHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 border-b border-neutral-800">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/AcademyLearn.jpg"
          className="w-full h-full object-cover"
        >
          <source media="(min-width: 768px)" src="/assets/video/DesktopLearn.webm" type="video/webm" />
          <source media="(max-width: 768px)" src="/assets/video/mobileLearn.webm" type="video/webm" />
        </video>
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,13,20,0.1) 0%, rgba(9,13,20,0.25) 45%, rgba(9,13,20,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 68%, rgba(132,251,127,0.16) 0%, rgba(9,13,20,0) 65%)",
        }}
      />

      <div className="container-page relative h-[clamp(560px,88vh,720px)] flex flex-col items-center justify-end text-center pb-10 sm:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-paragraph font-medium text-base-white"
        >
          Uphold Academy!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 text-h1-mobile sm:text-hero font-semibold text-balance"
        >
          <span className="text-primary-dark">Learn</span>{" "}
          <span className="text-base-white">crypto better</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <span className="text-body1 font-medium text-base-white">
            Don&apos;t know where to start?
          </span>
          <Button href="/learn/beginner" showArrow>
            Start here
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
