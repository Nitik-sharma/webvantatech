"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

/* ============================================================================
   TYPES
============================================================================ */

interface NetworkNode {
  id: string;
  angle: number;
  icon: "website" | "seo" | "marketing" | "automation" | "growth";
}

/* ============================================================================
   NETWORK NODES
============================================================================ */

const NODES: NetworkNode[] = [
  {
    id: "website",
    angle: -90,
    icon: "website",
  },
  {
    id: "seo",
    angle: -18,
    icon: "seo",
  },
  {
    id: "marketing",
    angle: 54,
    icon: "marketing",
  },
  {
    id: "automation",
    angle: 126,
    icon: "automation",
  },
  {
    id: "growth",
    angle: 198,
    icon: "growth",
  },
];

const CENTER = {
  x: 250,
  y: 250,
};

const NODE_RADIUS = 158;

/* ============================================================================
   GEOMETRY
============================================================================ */

function pointOnCircle(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;

  return {
    x: CENTER.x + radius * Math.cos(rad),

    y: CENTER.y + radius * Math.sin(rad),
  };
}

function connectionPath(angleDeg: number) {
  const target = pointOnCircle(angleDeg, NODE_RADIUS);

  const mid = pointOnCircle(angleDeg + 9, NODE_RADIUS * 0.55);

  return `M ${CENTER.x} ${CENTER.y} Q ${mid.x} ${mid.y} ${target.x} ${target.y}`;
}

/* ============================================================================
   INLINE SVG ICONS
   No external icon dependency required.
============================================================================ */

function NetworkIcon({ type }: { type: NetworkNode["icon"] }) {
  if (type === "website") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[15px] w-[15px]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />

        <path
          d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "seo") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[15px] w-[15px]"
        aria-hidden="true"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="6.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="m15.5 15.5 5 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "marketing") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[15px] w-[15px]"
        aria-hidden="true"
      >
        <path
          d="M4 11v2h3l8 4V7l-8 4H4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        <path
          d="M15 9.2 19 7v10l-4-2.2M7 13l1.2 5H11l-1.2-4.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "automation") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[15px] w-[15px]"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="6"
          height="6"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <rect
          x="14"
          y="14"
          width="6"
          height="6"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <path
          d="M10 7h3a4 4 0 0 1 4 4v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="m15 12 2 2 2-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[15px] w-[15px]"
      aria-hidden="true"
    >
      <path
        d="M4 17V9M10 17V6M16 17V11M22 17V4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m4 6 5 4 6-5 4 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================================
   LEFT VISUAL
============================================================================ */

function GrowthNetworkVisual({ reducedMotion }: { reducedMotion: boolean }) {
  const rawId = useId();

  const idPrefix = rawId.replace(/[^a-zA-Z0-9_-]/g, "");

  const coreGradientId = `${idPrefix}-core-gradient`;

  const lineGradientId = `${idPrefix}-line-gradient`;

  const nodeGradientId = `${idPrefix}-node-gradient`;

  const coreGlowId = `${idPrefix}-core-glow`;

  const softGlowId = `${idPrefix}-soft-glow`;

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[440px]"
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -10, 0],
            }
      }
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(2,181,246,0.22) 0%, rgba(2,74,191,0.10) 45%, transparent 72%)",
        }}
      />

      <svg
        viewBox="0 0 500 500"
        className="h-full w-full"
        role="img"
        aria-label="Abstract diagram of WebVanta's connected digital growth network"
      >
        <defs>
          <radialGradient id={coreGradientId} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#02B5F6" />
            <stop offset="100%" stopColor="#024ABF" />
          </radialGradient>

          <linearGradient id={lineGradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#017EF3" stopOpacity="0.75" />

            <stop offset="100%" stopColor="#02B5F6" stopOpacity="0.15" />
          </linearGradient>

          <radialGradient id={nodeGradientId} cx="0.35" cy="0.3" r="0.75">
            <stop offset="0%" stopColor="#FFFFFF" />

            <stop offset="100%" stopColor="#F7FAFF" />
          </radialGradient>

          <filter
            id={coreGlowId}
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="8" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={softGlowId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ================================================================ */}
        {/* ORBITAL RINGS                                                    */}
        {/* ================================================================ */}

        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={112}
          fill="none"
          stroke="#024ABF"
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray="2 8"
          style={{
            transformOrigin: "250px 250px",
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={196}
          fill="none"
          stroke="#02B5F6"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="1 10"
          style={{
            transformOrigin: "250px 250px",
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  rotate: -360,
                }
          }
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ================================================================ */}
        {/* CONNECTIONS                                                      */}
        {/* ================================================================ */}

        {NODES.map((node) => {
          const path = connectionPath(node.angle);

          return (
            <g key={`line-${node.id}`}>
              <motion.path
                d={path}
                fill="none"
                stroke={`url(#${lineGradientId})`}
                strokeWidth="1.4"
                strokeLinecap="round"
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: [0.35, 0.85, 0.35],
                      }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {!reducedMotion && (
                <circle r="2.4" fill="#02B5F6" filter={`url(#${softGlowId})`}>
                  <animateMotion
                    dur="4.2s"
                    repeatCount="indefinite"
                    path={path}
                  />

                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="4.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* ================================================================ */}
        {/* CENTRAL CORE                                                     */}
        {/* ================================================================ */}

        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={40}
          fill="none"
          stroke="#02B5F6"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          animate={
            reducedMotion
              ? undefined
              : {
                  r: [40, 58, 40],
                  opacity: [0.4, 0, 0.4],
                }
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={34}
          fill={`url(#${coreGradientId})`}
          filter={`url(#${coreGlowId})`}
        />

        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={34}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.5"
          strokeWidth="1"
        />

        {/* ================================================================ */}
        {/* NETWORK NODES                                                    */}
        {/* ================================================================ */}

        {NODES.map((node, index) => {
          const position = pointOnCircle(node.angle, NODE_RADIUS);

          return (
            <motion.g
              key={node.id}
              style={{
                transformOrigin: `${position.x}px ${position.y}px`,
              }}
              animate={
                reducedMotion
                  ? undefined
                  : {
                      y: [0, index % 2 === 0 ? -6 : 6, 0],
                    }
              }
              transition={{
                duration: 4.5 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <circle
                cx={position.x}
                cy={position.y}
                r={24}
                fill={`url(#${nodeGradientId})`}
                stroke="#024ABF"
                strokeOpacity="0.15"
                strokeWidth="1"
                filter={`url(#${softGlowId})`}
              />

              <foreignObject
                x={position.x - 10}
                y={position.y - 10}
                width={20}
                height={20}
              >
                <div className="flex h-5 w-5 items-center justify-center text-[#024ABF]">
                  <NetworkIcon type={node.icon} />
                </div>
              </foreignObject>
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}

/* ============================================================================
   CONTENT ANIMATION
============================================================================ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* ============================================================================
   MAIN CTA
============================================================================ */

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const [reducedMotion, setReducedMotion] = useState(false);

  /* ------------------------------------------------------------------------ */
  /* Reduced motion preference                                                */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setReducedMotion(query.matches);
    };

    updatePreference();

    query.addEventListener("change", updatePreference);

    return () => {
      query.removeEventListener("change", updatePreference);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#F7FAFF] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* ================================================================== */}
      {/* BACKGROUND GRID                                                    */}
      {/* ================================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,52,152,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,52,152,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 30% 40%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 30% 40%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ================================================================== */}
        {/* MAIN CARD                                                          */}
        {/* ================================================================== */}

        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#024ABF]/10 bg-white shadow-[0_30px_80px_-30px_rgba(2,23,89,0.18)]">
          {/* Left atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(2,181,246,0.16) 0%, rgba(2,74,191,0.06) 50%, transparent 78%)",
            }}
          />

          {/* ================================================================= */}
          {/* CONTENT GRID                                                       */}
          {/* ================================================================= */}

          <div className="relative grid grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
            {/* =============================================================== */}
            {/* LEFT VISUAL                                                      */}
            {/* =============================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="order-1 flex justify-center lg:order-none"
            >
              <GrowthNetworkVisual reducedMotion={reducedMotion} />
            </motion.div>

            {/* =============================================================== */}
            {/* RIGHT CONTENT                                                    */}
            {/* =============================================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="order-2 text-center lg:order-none lg:text-left"
            >
              {/* Eyebrow */}
              <motion.p
                variants={itemVariants}
                className="text-sm font-medium tracking-wide text-[#017EF3]"
              >
                Let&apos;s Build Something Great
              </motion.p>

              {/* Heading */}
              <motion.h2
                id="cta-heading"
                variants={itemVariants}
                className="mt-3 text-3xl font-semibold leading-tight text-[#021759] sm:text-4xl"
              >
                Ready to Turn Your Idea Into Growth?
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#021759]/65 lg:mx-0"
              >
                Whether you need a high-performance website, custom web
                application, better search visibility, or a digital growth
                strategy, WebVanta Technologies is ready to help.
              </motion.p>

              {/* ============================================================= */}
              {/* CTA BUTTONS                                                    */}
              {/* ============================================================= */}

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                {/* Primary CTA */}
                <a
                  href="#start-project"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#017EF3] to-[#02B5F6] px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(2,126,243,0.55)] transition-all duration-300 hover:shadow-[0_16px_38px_-8px_rgba(2,181,246,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#017EF3]"
                >
                  Start Your Project
                  {/* Arrow */}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h11M10 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Secondary CTA */}
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#024ABF]/20 px-7 py-3.5 text-sm font-medium text-[#021759] transition-colors duration-300 hover:border-[#024ABF]/40 hover:bg-[#F7FAFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#017EF3]"
                >
                  Explore Our Services
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
