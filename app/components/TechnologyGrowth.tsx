"use client";

import { motion } from "framer-motion";
import {
  CodeIcon,
  GearIcon,
  GlobeIcon,
  WorkflowIcon,
  TrendingUpIcon,
} from "./AboutIcons";
import { fadeUpVariants, usePrefersReducedMotion } from "./motion-variants";

const STAGES = [
  { label: "Build", icon: CodeIcon },
  { label: "Optimize", icon: GearIcon },
  { label: "Reach", icon: GlobeIcon },
  { label: "Automate", icon: WorkflowIcon },
  { label: "Grow", icon: TrendingUpIcon },
];

export default function TechnologyGrowth() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-labelledby="tech-growth-heading"
      className="relative overflow-hidden bg-[#F7FAFF] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUpVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium tracking-wide text-[#017EF3]">
            Our Approach
          </p>
          <h2
            id="tech-growth-heading"
            className="mt-4 text-3xl font-semibold text-[#021759] sm:text-4xl"
          >
            Where Technology Meets Digital Growth
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-[#021759]/65">
            <p>A great website alone isn&apos;t enough.</p>
            <p>
              Your digital presence needs technology, visibility, user
              experience, marketing, and continuous improvement working
              together. WebVanta Technologies brings these areas together to
              help businesses create a stronger digital foundation.
            </p>
          </div>
        </motion.div>

        {/* Desktop / tablet — horizontal roadmap */}
        <div className="relative mt-16 hidden md:block">
          <svg
            viewBox="0 0 1000 40"
            className="absolute left-0 top-8 h-6 w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="60"
              y1="20"
              x2="940"
              y2="20"
              stroke="#024ABF"
              strokeOpacity="0.14"
              strokeWidth="2"
            />
            <motion.line
              x1="60"
              y1="20"
              x2="940"
              y2="20"
              stroke="#02B5F6"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          <div className="relative grid grid-cols-5">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion ? 0 : 0.15 + i * 0.12,
                  }}
                  className="flex flex-col items-center gap-4 px-2 text-center"
                >
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#024ABF]/15 bg-white text-[#024ABF] shadow-[0_10px_24px_-14px_rgba(2,23,89,0.2)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-[#021759]">
                    {stage.label.toUpperCase()}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile — vertical roadmap */}
        <div className="relative mt-14 md:hidden">
          <div
            className="absolute bottom-4 left-8 top-4 w-px bg-[#024ABF]/12"
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-4 left-8 top-4 w-px origin-top bg-[#02B5F6]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <ul className="relative space-y-8">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.li
                  key={stage.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion ? 0 : 0.1 + i * 0.1,
                  }}
                  className="flex items-center gap-4"
                >
                  <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#024ABF]/15 bg-white text-[#024ABF] shadow-[0_10px_24px_-14px_rgba(2,23,89,0.2)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-[#021759]">
                    {stage.label.toUpperCase()}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
