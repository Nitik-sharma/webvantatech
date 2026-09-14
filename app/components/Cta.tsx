"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

/* ============================================================================
   TYPES
============================================================================ */

interface NetworkNode {
  id: string;
  label: string;
  angle: number;
  icon: "website" | "seo" | "marketing" | "automation" | "growth";
}

/* ============================================================================
   NETWORK NODES
   Each node maps to a real service — the diagram is a map of the offer,
   not decoration.
============================================================================ */

const NODES: NetworkNode[] = [
  { id: "website", label: "Websites", angle: -90, icon: "website" },
  { id: "seo", label: "SEO", angle: -18, icon: "seo" },
  { id: "marketing", label: "Marketing", angle: 54, icon: "marketing" },
  { id: "automation", label: "Automation", angle: 126, icon: "automation" },
  { id: "growth", label: "Growth", angle: 198, icon: "growth" },
];

/* ============================================================================
   DESIGN TOKENS
============================================================================ */

const COLOR = {
  ink: "#021759", // primary text
  inkMuted: "rgba(2,23,89,0.65)",
  inkFaint: "rgba(2,23,89,0.14)",
  accent: "#017EF3", // brand blue
  accentLight: "#02B5F6",
  accentDeep: "#024ABF",
  surface: "#FFFFFF",
  page: "#F7FAFF",
} as const;

const CENTER = { x: 250, y: 250 };
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
============================================================================ */

function NetworkIcon({ type }: { type: NetworkNode["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    className: "h-[22px] w-[22px]",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "website":
      return (
        <svg {...common}>
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case "seo":
      return (
        <svg {...common}>
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

    case "marketing":
      return (
        <svg {...common}>
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

    case "automation":
      return (
        <svg {...common}>
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

    case "growth":
      return (
        <svg {...common}>
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
}

/* ============================================================================
   LEFT GROWTH NETWORK VISUAL
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
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-[-8%] -z-10 rounded-full opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(2,181,246,0.22) 0%, rgba(1,126,243,0.10) 42%, transparent 75%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#02B5F6]/10 blur-3xl"
      />

      <svg
        viewBox="0 0 500 500"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="Diagram of WebVanta's connected services: websites, SEO, marketing, automation, and growth, radiating from a central hub"
      >
        <defs>
          <radialGradient id={coreGradientId} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="42%" stopColor={COLOR.accentLight} />
            <stop offset="100%" stopColor={COLOR.accentDeep} />
          </radialGradient>

          <linearGradient id={lineGradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLOR.accent} stopOpacity="0.8" />
            <stop
              offset="55%"
              stopColor={COLOR.accentLight}
              stopOpacity="0.55"
            />
            <stop
              offset="100%"
              stopColor={COLOR.accentLight}
              stopOpacity="0.12"
            />
          </linearGradient>

          <radialGradient id={nodeGradientId} cx="0.35" cy="0.3" r="0.75">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F8FBFF" />
            <stop offset="100%" stopColor="#EEF5FF" />
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

        {/* Outer orbit */}
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={204}
          fill="none"
          stroke={COLOR.accentLight}
          strokeOpacity="0.08"
          strokeWidth="1"
          strokeDasharray="2 12"
          style={{ transformOrigin: "250px 250px" }}
          animate={reducedMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner orbit */}
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={112}
          fill="none"
          stroke={COLOR.accentDeep}
          strokeOpacity="0.17"
          strokeWidth="1"
          strokeDasharray="2 8"
          style={{ transformOrigin: "250px 250px" }}
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Connections */}
        {NODES.map((node) => {
          const path = connectionPath(node.angle);
          return (
            <g key={`line-${node.id}`}>
              <motion.path
                d={path}
                fill="none"
                stroke={`url(#${lineGradientId})`}
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={
                  reducedMotion ? undefined : { opacity: [0.3, 0.9, 0.3] }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <path
                d={path}
                fill="none"
                stroke={COLOR.accentLight}
                strokeOpacity="0.07"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {!reducedMotion && (
                <circle
                  r="2.8"
                  fill={COLOR.accentLight}
                  filter={`url(#${softGlowId})`}
                >
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

        {/* Central pulse */}
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={44}
          fill="none"
          stroke={COLOR.accentLight}
          strokeOpacity="0.45"
          strokeWidth="1.5"
          animate={
            reducedMotion
              ? undefined
              : { r: [44, 68, 44], opacity: [0.45, 0, 0.45] }
          }
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
        />

        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={47}
          fill="none"
          stroke={COLOR.accent}
          strokeOpacity="0.13"
          strokeWidth="1"
        />

        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={40}
          fill={`url(#${coreGradientId})`}
          filter={`url(#${coreGlowId})`}
        />

        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={40}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />

        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={25}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.28"
          strokeWidth="1"
          strokeDasharray="3 5"
        />

        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={5}
          fill="#FFFFFF"
          opacity="0.95"
        />

        {/* Network nodes */}
        {NODES.map((node, index) => {
          const position = pointOnCircle(node.angle, NODE_RADIUS);

          return (
            <motion.g
              key={node.id}
              style={{ transformOrigin: `${position.x}px ${position.y}px` }}
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, index % 2 === 0 ? -7 : 7, 0] }
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
                r={38}
                fill={COLOR.accentLight}
                opacity="0.06"
              />

              <circle
                cx={position.x}
                cy={position.y}
                r={33}
                fill="none"
                stroke={COLOR.accent}
                strokeOpacity="0.12"
                strokeWidth="1"
              />

              <circle
                cx={position.x}
                cy={position.y}
                r={30}
                fill={`url(#${nodeGradientId})`}
                stroke={COLOR.accentDeep}
                strokeOpacity="0.18"
                strokeWidth="1.2"
                filter={`url(#${softGlowId})`}
              />

              <circle
                cx={position.x - 9}
                cy={position.y - 9}
                r={4}
                fill="#FFFFFF"
                opacity="0.85"
              />

              <foreignObject
                x={position.x - 15}
                y={position.y - 15}
                width={30}
                height={30}
              >
                <div className="flex h-[30px] w-[30px] items-center justify-center text-[#017EF3]">
                  <NetworkIcon type={node.icon} />
                </div>
              </foreignObject>

              {/* Node label, tucked just below the icon — ties the diagram to the offer */}
              <text
                x={position.x}
                y={position.y + 48}
                textAnchor="middle"
                fontSize="12.5"
                fontWeight={600}
                fill={COLOR.ink}
                fillOpacity="0.55"
              >
                {node.label}
              </text>
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
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ============================================================================
   MAIN CTA
============================================================================ */

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#F7FAFF] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Background grid */}
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#02B5F6]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] right-[5%] h-[450px] w-[450px] rounded-full bg-[#017EF3]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#017EF3]/10 bg-white shadow-[0_35px_90px_-30px_rgba(2,23,89,0.20)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full opacity-80 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(2,181,246,0.20) 0%, rgba(1,126,243,0.08) 42%, transparent 75%)",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#017EF3]/5 blur-3xl"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
            {/* Left visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 flex justify-center lg:order-none"
            >
              <GrowthNetworkVisual reducedMotion={reducedMotion} />
            </motion.div>

            {/* Right content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="order-2 text-center lg:order-none lg:text-left"
            >
              {/* Heading — emphasis comes from line break and scale, not a recolored word */}
              <motion.h2
                id="cta-heading"
                variants={itemVariants}
                className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight text-[#021759] sm:text-4xl lg:text-[2.75rem]"
              >
                Ready to turn your idea
                <br />
                into growth?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#021759]/65 lg:mx-0"
              >
                Whether you need a high-performance website, a custom web
                application, better search visibility, AI-powered tools, or a
                digital growth strategy, WebVanta builds it, ships it, and keeps
                it running.
              </motion.p>

              {/* Service list — same iconography as the diagram, so the two reinforce each other */}
              <motion.ul
                variants={itemVariants}
                className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start"
              >
                {NODES.map((node) => (
                  <li
                    key={node.id}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#021759]/70"
                  >
                    <span className="text-[#017EF3]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <NetworkIcon type={node.icon} />
                      </svg>
                    </span>
                    {node.label}
                  </li>
                ))}
              </motion.ul>

              {/* CTA buttons */}
              <motion.div
                variants={itemVariants}
                className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                <a
                  href="#start-project"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#017EF3] to-[#02B5F6] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(2,126,243,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-8px_rgba(2,181,246,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#017EF3]"
                >
                  Start your project
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

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#024ABF]/20 px-7 py-3.5 text-sm font-semibold text-[#021759] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#017EF3]/30 hover:bg-[#F7FAFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#017EF3]"
                >
                  See our services
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
