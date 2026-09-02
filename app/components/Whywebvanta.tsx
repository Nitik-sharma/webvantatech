"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";

/* -------------------------------------------------------------------------- */
/*  Icons (hand-rolled, no icon library — consistent with the rest of site)  */
/* -------------------------------------------------------------------------- */

function IconStrategy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 4v2.2M12 17.8V20M20 12h-2.2M6.2 12H4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSEODev({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="4.5"
        width="18"
        height="13"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 20h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle
        cx="10"
        cy="10.8"
        r="2.6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12.6 12.6 15 15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconScalable({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.5v8M12 12.5 4 8M12 12.5l8-4.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGrowthMarketing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 16.5 9.5 11l3.3 3.3L20 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 7h5.5v5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="16.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type Feature = {
  number: string;
  title: string;
  description: string;
  icon: (props: { className?: string }) => ReactElement;
};

const FEATURES: Feature[] = [
  {
    number: "01",
    title: "Business-First Strategy",
    description:
      "We start by understanding your business, customers, goals, and challenges before recommending a digital solution.",
    icon: IconStrategy,
  },
  {
    number: "02",
    title: "SEO-Ready Development",
    description:
      "We build websites and web applications with performance, mobile responsiveness, accessibility, and search visibility in mind.",
    icon: IconSEODev,
  },
  {
    number: "03",
    title: "Scalable Technology",
    description:
      "Our solutions are designed to grow with your business, from a professional website to custom applications and automation.",
    icon: IconScalable,
  },
  {
    number: "04",
    title: "Growth-Focused Marketing",
    description:
      "We combine SEO and digital marketing strategies to help businesses improve visibility, attract qualified traffic, and generate opportunities.",
    icon: IconGrowthMarketing,
  },
];

/* -------------------------------------------------------------------------- */
/*  Decorative technology / growth visual                                    */
/*  Rings, connection lines, nodes, a subtle grid and an upward growth arrow  */
/*  — a quiet nod to the logo mark, entirely in brand blues.                 */
/* -------------------------------------------------------------------------- */

function TechGrowthVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
        {/* Subtle grid */}
        <g stroke="#021759" strokeOpacity="0.05" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={40 * (i + 1)}
              y1="0"
              x2={40 * (i + 1)}
              y2="400"
            />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={40 * (i + 1)}
              x2="400"
              y2={40 * (i + 1)}
            />
          ))}
        </g>

        {/* Concentric rings */}
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="#017EF3"
          strokeOpacity="0.14"
          strokeWidth="1.4"
        />
        <circle
          cx="200"
          cy="200"
          r="110"
          stroke="#02B5F6"
          strokeOpacity="0.18"
          strokeWidth="1.4"
          strokeDasharray="4 6"
        />
        <circle
          cx="200"
          cy="200"
          r="70"
          stroke="#024ABF"
          strokeOpacity="0.22"
          strokeWidth="1.4"
        />

        {/* Connection lines between nodes */}
        <path
          d="M120 260 L170 210 L220 235 L280 150"
          stroke="#017EF3"
          strokeOpacity="0.35"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M170 210 L200 130"
          stroke="#02B5F6"
          strokeOpacity="0.3"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Upward growth arrow */}
        <path
          d="M110 270 L165 215 L200 245 L285 140"
          stroke="url(#growthGradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M255 140 H285 V170"
          stroke="url(#growthGradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Nodes */}
        <circle cx="110" cy="270" r="5" fill="#024ABF" />
        <circle cx="165" cy="215" r="5" fill="#017EF3" />
        <circle cx="200" cy="245" r="4.5" fill="#017EF3" />
        <circle cx="285" cy="140" r="6" fill="#02B5F6" />
        <circle cx="200" cy="200" r="7" fill="#021759" />

        <defs>
          <linearGradient
            id="growthGradient"
            x1="110"
            y1="270"
            x2="285"
            y2="140"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#024ABF" />
            <stop offset="1" stopColor="#02B5F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why WebVanta section                                                     */
/* -------------------------------------------------------------------------- */

export default function WhyWebVanta() {
  return (
    <section
      id="why-webvanta"
      aria-labelledby="why-webvanta-heading"
      className="relative overflow-hidden bg-[#F7FAFF] py-24 lg:py-32"
    >
      {/* Ambient brand glow, consistent with Hero / Services */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[380px] w-[380px] rounded-full bg-[#017EF3]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[340px] w-[340px] rounded-full bg-[#02B5F6]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ---------------------------------------------------------------- */}
          {/* Left column — message + visual                                   */}
          {/* ---------------------------------------------------------------- */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#017EF3]"
            >
              Why WebVanta
            </motion.p>

            <motion.h2
              id="why-webvanta-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#021759] sm:text-[42px]"
            >
              Technology and Digital Growth Working Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500"
            >
              We combine web development, SEO, digital marketing, and technology
              solutions to help businesses create a stronger online presence,
              reach the right audience, and build sustainable digital growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-12"
            >
              <TechGrowthVisual />
            </motion.div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Right column — feature list                                      */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex flex-col gap-5">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.12,
                  }}
                  whileHover="hover"
                  className="group relative flex gap-5 rounded-2xl border border-slate-900/[0.06] bg-white p-6 shadow-[0_2px_10px_-4px_rgba(2,23,89,0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#017EF3]/30 hover:shadow-[0_20px_40px_-20px_rgba(2,23,89,0.25)] lg:p-7"
                >
                  {/* Icon */}
                  <motion.span
                    variants={{ hover: { y: -3, scale: 1.05 } }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7FAFF] text-[#017EF3] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#017EF3] group-hover:to-[#02B5F6] group-hover:text-white"
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </motion.span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#021759]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
