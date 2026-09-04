"use client";

import { motion } from "framer-motion";
import {
  BulbIcon,
  ChipIcon,
  GlobeIcon,
  UsersIcon,
  TrendingUpIcon,
} from "./AboutIcons";
import { usePrefersReducedMotion } from "./motion-variants";

/* ============================================================================
   ECOSYSTEM VISUAL
   Business Idea -> Technology -> Digital Presence -> Customers -> Growth
============================================================================ */

const STAGES = [
  { label: "Business Idea", icon: BulbIcon },
  { label: "Technology", icon: ChipIcon },
  { label: "Digital Presence", icon: GlobeIcon },
  { label: "Customers", icon: UsersIcon },
  { label: "Growth", icon: TrendingUpIcon },
];

function EcosystemVisual({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[380px]"
      style={{ maxWidth: 380 }}
      animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(2,181,246,0.22) 0%, rgba(2,74,191,0.10) 45%, transparent 75%)",
        }}
      />

      <div
        aria-label="Path from business idea, through technology and digital presence, to customers and growth"
        role="img"
        className="relative py-2"
      >
        {/* background line */}
        <div
          aria-hidden="true"
          className="absolute left-7 top-7 bottom-7 w-px bg-[#024ABF]/12"
        />
        {/* animated draw-in line */}
        <motion.div
          aria-hidden="true"
          className="absolute left-7 top-7 bottom-7 w-px origin-top bg-gradient-to-b from-[#017EF3] to-[#02B5F6]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        />
        {/* traveling glow */}
        {!reducedMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute left-[26px] h-1.5 w-1.5 rounded-full bg-[#02B5F6] shadow-[0_0_10px_2px_rgba(2,181,246,0.7)]"
            style={{ top: 28 }}
            animate={{ top: [28, "calc(100% - 28px)"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
          />
        )}

        <ul className="relative flex flex-col gap-8">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const isCore = i === 1; // Technology sits at the WebVanta core
            return (
              <motion.li
                key={stage.label}
                className="flex items-center gap-4"
                animate={
                  reducedMotion
                    ? undefined
                    : { y: [0, i % 2 === 0 ? -3 : 3, 0] }
                }
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.25,
                }}
              >
                <span
                  className={[
                    "relative z-10 flex shrink-0 items-center justify-center rounded-full bg-[#F7FAFF]",
                    isCore
                      ? "h-14 w-14 border-2 border-[#02B5F6] shadow-[0_0_18px_rgba(2,181,246,0.35)]"
                      : "h-11 w-11 border border-[#024ABF]/15",
                  ].join(" ")}
                >
                  <Icon
                    className={
                      isCore
                        ? "h-6 w-6 text-[#017EF3]"
                        : "h-4 w-4 text-[#024ABF]"
                    }
                  />
                </span>
                <span className="text-sm font-medium text-[#021759]/70 sm:text-base">
                  {stage.label}
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

/* ============================================================================
   HERO SECTION
============================================================================ */

export default function AboutHero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-[#F7FAFF] px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,52,152,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,52,152,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 75% 30%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 75% 30%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-wide text-[#017EF3]"
          >
            About WebVanta Technologies
          </motion.p>

          <motion.h1
            id="about-hero-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-4xl font-semibold leading-tight text-[#021759] sm:text-5xl"
          >
            Technology That Helps Businesses Grow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#021759]/65 lg:mx-0"
          >
            WebVanta Technologies is a digital technology and growth company
            helping businesses build a stronger online presence, attract the
            right audience, and grow through technology-driven solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#021759]/65 lg:mx-0"
          >
            From professional web development and custom web applications to
            SEO, digital marketing, automation, and business growth strategies,
            we create practical digital solutions designed around your business
            goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#017EF3] to-[#02B5F6] px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(2,126,243,0.55)] transition-all duration-300 hover:shadow-[0_16px_38px_-8px_rgba(2,181,246,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#017EF3]"
            >
              Work With Us
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M4.5 12h15" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#024ABF]/20 px-7 py-3.5 text-sm font-medium text-[#021759] transition-colors duration-300 hover:border-[#024ABF]/40 hover:bg-white"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="min-w-0"
        >
          <EcosystemVisual reducedMotion={reducedMotion} />
        </motion.div>
      </div>
    </section>
  );
}
