"use client";

import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerVariants,
  usePrefersReducedMotion,
} from "./motion-variants";

export default function WhoWeAre() {
  const reducedMotion = usePrefersReducedMotion();
  const stagger = staggerVariants(reducedMotion);
  const item = fadeUpVariants(reducedMotion);

  return (
    <section
      aria-labelledby="who-we-are-heading"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,52,152,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,52,152,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 20% 50%, black 15%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 20% 50%, black 15%, transparent 65%)",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <motion.div variants={item}>
          <p className="text-sm font-medium tracking-wide text-[#017EF3]">
            Who We Are
          </p>
          <h2
            id="who-we-are-heading"
            className="mt-4 text-3xl font-semibold leading-[1.15] text-[#021759] sm:text-4xl lg:text-[2.75rem]"
          >
            A Technology Partner Focused on Digital Growth
          </h2>
        </motion.div>

        <motion.div
          variants={item}
          className="space-y-5 text-base leading-relaxed text-[#021759]/65"
        >
          <p>
            WebVanta Technologies helps businesses turn digital opportunities
            into measurable growth.
          </p>
          <p>
            We combine web development, custom web application development,
            search engine optimization, digital marketing, automation, and
            technology solutions to create digital experiences that support real
            business objectives.
          </p>
          <p>
            Our approach goes beyond simply building a website. We focus on
            creating digital solutions that are fast, responsive, scalable,
            search-friendly, user-focused, and aligned with the way your
            business operates.
          </p>
          <p>
            Whether a business is launching a new website, improving its online
            presence, building a custom web application, increasing search
            visibility, or looking for better ways to automate operations,
            WebVanta Technologies provides practical digital solutions tailored
            to its needs.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
