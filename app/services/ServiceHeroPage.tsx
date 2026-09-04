"use client";

import { motion } from "framer-motion";
import {
  CodeIcon,
  SearchIcon,
  MegaphoneIcon,
  GearIcon,
  TrendingUpIcon,
} from "../components/AboutIcons";
import { usePrefersReducedMotion } from "../components/motion-variants";

/* ============================================================================
   ECOSYSTEM DIAGRAM
   WEB (left) / SEO (top) / MARKETING (right) / AUTOMATION (bottom) around a
   central WebVanta core, chained forward to GROWTH.
============================================================================ */

const CORE = { x: 170, y: 190 };
const NODES = [
  { label: "Web", icon: CodeIcon, x: 40, y: 190 },
  { label: "SEO", icon: SearchIcon, x: 170, y: 60 },
  { label: "Marketing", icon: MegaphoneIcon, x: 300, y: 190 },
  { label: "Automation", icon: GearIcon, x: 170, y: 320 },
];
const GROWTH_NODE = { label: "Growth", icon: TrendingUpIcon, x: 170, y: 410 };

function EcosystemDiagram({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[380px]"
      style={{ maxWidth: 380 }}
      animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(2,181,246,0.22) 0%, rgba(2,74,191,0.1) 45%, transparent 75%)",
        }}
      />

      <svg
        viewBox="0 0 340 460"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram of WebVanta's connected services: web, SEO, marketing, and automation around a central core, leading to growth"
      >
        <defs>
          <radialGradient id="heroCoreGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#02B5F6" />
            <stop offset="100%" stopColor="#024ABF" />
          </radialGradient>
          <radialGradient id="heroNodeGradient" cx="0.35" cy="0.3" r="0.75">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F7FAFF" />
          </radialGradient>
          <filter id="heroGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* spokes: core -> each satellite node */}
        {NODES.map((node, i) => (
          <g key={`spoke-${node.label}`}>
            <path
              d={`M ${CORE.x} ${CORE.y} L ${node.x} ${node.y}`}
              stroke="#024ABF"
              strokeOpacity="0.12"
              strokeWidth="2"
            />
            <motion.path
              d={`M ${CORE.x} ${CORE.y} L ${node.x} ${node.y}`}
              stroke="#02B5F6"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: reducedMotion ? 0 : 0.3 + i * 0.12,
              }}
            />
          </g>
        ))}

        {/* chain: automation -> growth */}
        <path
          d={`M ${NODES[3].x} ${NODES[3].y} L ${GROWTH_NODE.x} ${GROWTH_NODE.y}`}
          stroke="#024ABF"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
        <motion.path
          d={`M ${NODES[3].x} ${NODES[3].y} L ${GROWTH_NODE.x} ${GROWTH_NODE.y}`}
          stroke="#02B5F6"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: reducedMotion ? 0 : 0.9,
          }}
        />
        {!reducedMotion && (
          <circle r="2.6" fill="#02B5F6" filter="url(#heroGlow)">
            <animateMotion
              dur="3.2s"
              repeatCount="indefinite"
              path={`M ${NODES[3].x} ${NODES[3].y} L ${GROWTH_NODE.x} ${GROWTH_NODE.y}`}
              begin="1.5s"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="3.2s"
              repeatCount="indefinite"
              begin="1.5s"
            />
          </circle>
        )}

        {/* core */}
        <circle
          cx={CORE.x}
          cy={CORE.y}
          r={38}
          fill="url(#heroCoreGradient)"
          filter="url(#heroGlow)"
        />
        <circle
          cx={CORE.x}
          cy={CORE.y}
          r={38}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <text
          x={CORE.x}
          y={CORE.y + 4}
          textAnchor="middle"
          fontSize="10.5"
          fontWeight={600}
          fill="#FFFFFF"
          letterSpacing="0.4"
        >
          WEBVANTA
        </text>

        {/* satellite nodes */}
        {NODES.map((node, i) => {
          const Icon = node.icon;
          return (
            <motion.g
              key={node.label}
              animate={
                reducedMotion ? undefined : { y: [0, i % 2 === 0 ? -4 : 4, 0] }
              }
              transition={{
                duration: 4.5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={26}
                fill="url(#heroNodeGradient)"
                stroke="#024ABF"
                strokeOpacity="0.15"
                strokeWidth="1"
                filter="url(#heroGlow)"
              />
              <foreignObject
                x={node.x - 10}
                y={node.y - 10}
                width={20}
                height={20}
              >
                <div className="flex h-5 w-5 items-center justify-center text-[#024ABF]">
                  <Icon className="h-[15px] w-[15px]" />
                </div>
              </foreignObject>
              <text
                x={node.x}
                y={node.y + 40}
                textAnchor="middle"
                fontSize="10.5"
                fill="#021759"
                fillOpacity="0.55"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}

        {/* growth node */}
        <g>
          <circle
            cx={GROWTH_NODE.x}
            cy={GROWTH_NODE.y}
            r={22}
            fill="url(#heroNodeGradient)"
            stroke="#02B5F6"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            filter="url(#heroGlow)"
          />
          <foreignObject
            x={GROWTH_NODE.x - 9}
            y={GROWTH_NODE.y - 9}
            width={18}
            height={18}
          >
            <div className="flex h-[18px] w-[18px] items-center justify-center text-[#017EF3]">
              <GROWTH_NODE.icon className="h-[14px] w-[14px]" />
            </div>
          </foreignObject>
          <text
            x={GROWTH_NODE.x}
            y={GROWTH_NODE.y + 36}
            textAnchor="middle"
            fontSize="10.5"
            fontWeight={600}
            fill="#021759"
            fillOpacity="0.75"
          >
            {GROWTH_NODE.label}
          </text>
        </g>
      </svg>
    </motion.div>
  );
}

/* ============================================================================
   HERO SECTION
============================================================================ */

export default function ServicesHero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-labelledby="services-hero-heading"
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
            Our Services
          </motion.p>

          <motion.h1
            id="services-hero-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-4xl font-semibold leading-tight text-[#021759] sm:text-5xl"
          >
            Web Development, SEO &amp; Digital Marketing Services That Drive
            Business Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#021759]/65 lg:mx-0"
          >
            WebVanta Technologies provides professional web development, custom
            web application development, SEO, digital marketing, business
            automation, and technology solutions designed to help businesses
            build a stronger online presence and achieve sustainable digital
            growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#021759]/65 lg:mx-0"
          >
            From high-performance websites and scalable web applications to
            search engine optimization and data-driven digital marketing, we
            combine technology and growth strategies to help businesses attract
            the right audience, improve visibility, generate opportunities, and
            grow online.
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
              Start Your Project
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
              href="#services-overview"
              className="group inline-flex items-center gap-2 rounded-full border border-[#024ABF]/20 px-7 py-3.5 text-sm font-medium text-[#021759] transition-colors duration-300 hover:border-[#024ABF]/40 hover:bg-white"
            >
              Explore Our Services
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M12 4.5v15" />
                <path d="M6 13.5l6 6 6-6" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="min-w-0"
        >
          <EcosystemDiagram reducedMotion={reducedMotion} />
        </motion.div>
      </div>
    </section>
  );
}
