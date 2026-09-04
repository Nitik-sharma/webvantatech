"use client";

import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerVariants,
  usePrefersReducedMotion,
} from "./motion-variants";

export default function OurMission() {
  const reducedMotion = usePrefersReducedMotion();
  const stagger = staggerVariants(reducedMotion);
  const item = fadeUpVariants(reducedMotion);

  return (
    <section
      aria-labelledby="our-mission-heading"
      className="relative overflow-hidden bg-[#021759] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,181,246,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,181,246,0.06) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 25%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(2,181,246,0.22) 0%, rgba(2,74,191,0.08) 50%, transparent 78%)",
        }}
        animate={reducedMotion ? undefined : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium tracking-wide text-[#02B5F6]"
        >
          Our Mission
        </motion.p>
        <motion.h2
          id="our-mission-heading"
          variants={item}
          className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl"
        >
          Making Technology More Useful for Business
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-10 max-w-2xl text-2xl font-medium leading-snug text-white sm:text-3xl"
        >
          &ldquo;Technology should create progress.&rdquo;
        </motion.p>

        <motion.div
          variants={item}
          className="mx-auto mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-white/60"
        >
          <p>
            Our mission is to help businesses use technology more effectively.
          </p>
          <p>
            We believe a successful digital presence should do more than look
            good. It should reach the right audience, create better user
            experiences, improve efficiency, generate opportunities, and support
            long-term business growth.
          </p>
          <p>
            That&apos;s why we combine technical development with digital growth
            strategies to create solutions that are practical, scalable, and
            built for the future.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
