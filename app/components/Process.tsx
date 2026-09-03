"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useInView,
  type MotionValue,
} from "framer-motion";
import {
  Compass,
  Target,
  Code2,
  Rocket as RocketIcon,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/* ============================================================================
   CONTENT
============================================================================ */

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description: "Understand your business, audience, goals, and challenges.",
    icon: Compass,
  },
  {
    id: "strategize",
    number: "02",
    title: "Strategize",
    description:
      "Create a practical technology, SEO, or digital marketing strategy aligned with your objectives.",
    icon: Target,
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "Design and develop a fast, responsive, scalable digital solution.",
    icon: Code2,
  },
  {
    id: "launch",
    number: "04",
    title: "Launch",
    description:
      "Test, optimize, and launch your solution with performance and user experience in mind.",
    icon: RocketIcon,
  },
  {
    id: "grow",
    number: "05",
    title: "Grow",
    description:
      "Use SEO, marketing, analytics, and continuous optimization to support long-term growth.",
    icon: TrendingUp,
  },
];

const STEP_POSITIONS = [0.12, 0.31, 0.5, 0.69, 0.88] as const;

type StepStatus = "upcoming" | "active" | "completed";

/* ============================================================================
   PATHS
============================================================================ */

const DESKTOP_VIEWBOX = "0 0 1200 320";

const DESKTOP_PATH =
  "M 40 258 C 160 258, 210 156, 340 176 C 460 194, 486 96, 620 108 C 742 118, 762 200, 900 168 C 1000 146, 1004 58, 1160 46";

const MOBILE_VIEWBOX = "0 0 120 880";

const MOBILE_PATH =
  "M 60 28 C 18 116, 104 196, 60 286 C 18 376, 104 456, 60 546 C 18 636, 104 716, 60 806 C 42 838, 60 860, 60 876";

/* ============================================================================
   BACKGROUND STARFIELD
============================================================================ */

const STARS = [
  { top: "8%", left: "6%", size: 3, delay: 0 },
  { top: "18%", left: "88%", size: 2, delay: 0.6 },
  { top: "62%", left: "4%", size: 2, delay: 1.2 },
  { top: "78%", left: "92%", size: 3, delay: 0.3 },
  { top: "34%", left: "48%", size: 2, delay: 0.9 },
  { top: "90%", left: "60%", size: 2, delay: 1.5 },
  { top: "12%", left: "38%", size: 2, delay: 1.8 },
  { top: "50%", left: "80%", size: 3, delay: 0.15 },
];

/* ============================================================================
   ROCKET GLYPH
============================================================================ */

function RocketGlyph({
  size = 30,
  reducedMotion,
  idPrefix,
}: {
  size?: number;
  reducedMotion: boolean;
  idPrefix: string;
}) {
  const bodyId = `${idPrefix}-rocket-body`;
  const accentId = `${idPrefix}-rocket-accent`;
  const flameId = `${idPrefix}-rocket-flame`;
  const glowId = `${idPrefix}-rocket-glow`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={bodyId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F7FAFF" />
        </linearGradient>

        <linearGradient id={accentId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#024ABF" />
          <stop offset="100%" stopColor="#02B5F6" />
        </linearGradient>

        <radialGradient id={flameId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#F7FAFF" />
          <stop offset="45%" stopColor="#02B5F6" />
          <stop offset="100%" stopColor="#017EF3" stopOpacity="0" />
        </radialGradient>

        <filter id={glowId} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="30" cy="32" rx="22" ry="14" fill="#02B5F6" opacity="0.14" />

      <motion.g
        animate={
          reducedMotion
            ? undefined
            : {
                scaleX: [1, 1.28, 0.86, 1.15, 1],
                opacity: [0.75, 1, 0.65, 0.95, 0.8],
              }
        }
        transition={{
          duration: 0.55,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "10px 32px" }}
      >
        <path
          d="M 12 26 C 2 29, 0 32, 4 32 C 0 32, 2 35, 12 38 Z"
          fill={`url(#${flameId})`}
        />
      </motion.g>

      <path d="M 22 20 L 10 12 L 24 24 Z" fill="#024ABF" />
      <path d="M 22 44 L 10 52 L 24 40 Z" fill="#024ABF" />

      <path
        d="M 18 32 C 18 20, 30 10, 48 8 C 52 8, 54 10, 54 14 C 54 24, 52 32, 48 40 C 46 44, 22 44, 18 32 Z"
        fill={`url(#${bodyId})`}
        stroke={`url(#${accentId})`}
        strokeWidth="1.4"
        filter={`url(#${glowId})`}
      />

      <path
        d="M 24 26 C 30 22, 40 18, 50 16"
        stroke={`url(#${accentId})`}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      <circle
        cx="40"
        cy="22"
        r="5.2"
        fill="#F7FAFF"
        stroke="#017EF3"
        strokeWidth="1.6"
      />

      <circle cx="40" cy="22" r="2.2" fill="#02B5F6" />

      <path
        d="M 54 14 C 58 16, 60 20, 58 24 C 56 20, 55 17, 54 14 Z"
        fill="#017EF3"
      />
    </svg>
  );
}

/* ============================================================================
   JOURNEY VISUAL
============================================================================ */

interface JourneyVisualProps {
  progress: MotionValue<number>;
  pathD: string;
  viewBox: string;
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  reducedMotion: boolean;
  className?: string;
  label: string;
}

function JourneyVisual({
  progress,
  pathD,
  viewBox,
  activeIndex,
  onActiveIndexChange,
  reducedMotion,
  className,
  label,
}: JourneyVisualProps) {
  const instanceId = useId().replace(/:/g, "");

  const geometryRef = useRef<SVGPathElement>(null);

  const [pathLength, setPathLength] = useState(0);

  const [checkpoints, setCheckpoints] = useState<{ x: number; y: number }[]>(
    [],
  );

  const [endPoint, setEndPoint] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const rocketX = useMotionValue(0);
  const rocketY = useMotionValue(0);
  const rocketRotate = useMotionValue(0);
  const dashOffset = useMotionValue(0);

  const p1X = useMotionValue(0);
  const p1Y = useMotionValue(0);
  const p2X = useMotionValue(0);
  const p2Y = useMotionValue(0);
  const p3X = useMotionValue(0);
  const p3Y = useMotionValue(0);

  const lastIndexRef = useRef(-2);

  useEffect(() => {
    const node = geometryRef.current;

    if (!node) return;

    const length = node.getTotalLength();

    if (!Number.isFinite(length) || length <= 0) return;

    setPathLength(length);

    setCheckpoints(
      STEP_POSITIONS.map((t) => {
        const point = node.getPointAtLength(t * length);

        return {
          x: point.x,
          y: point.y,
        };
      }),
    );

    setEndPoint(node.getPointAtLength(length));

    const start = node.getPointAtLength(0);

    rocketX.set(start.x);
    rocketY.set(start.y);
    rocketRotate.set(0);
    dashOffset.set(length);

    lastIndexRef.current = -2;
  }, [pathD, rocketX, rocketY, rocketRotate, dashOffset]);

  const updateRocket = useCallback(
    (value: number) => {
      const node = geometryRef.current;

      if (!node || pathLength <= 0) return;

      const clamped = Math.max(0, Math.min(1, value));

      const currentLength = clamped * pathLength;

      const point = node.getPointAtLength(currentLength);

      const aheadLength = Math.min(
        pathLength,
        currentLength + Math.max(1, pathLength * 0.002),
      );

      const ahead = node.getPointAtLength(aheadLength);

      const angle =
        (Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180) / Math.PI;

      rocketX.set(point.x);
      rocketY.set(point.y);
      rocketRotate.set(angle);

      dashOffset.set(pathLength * (1 - clamped));

      const trail = [
        { mvX: p1X, mvY: p1Y, delta: 14 },
        { mvX: p2X, mvY: p2Y, delta: 28 },
        { mvX: p3X, mvY: p3Y, delta: 42 },
      ];

      trail.forEach(({ mvX, mvY, delta }) => {
        const trailLength = Math.max(0, currentLength - delta);

        const trailPoint = node.getPointAtLength(trailLength);

        mvX.set(trailPoint.x);
        mvY.set(trailPoint.y);
      });

      let nextIndex = -1;

      STEP_POSITIONS.forEach((position, index) => {
        if (clamped >= position - 0.02) {
          nextIndex = index;
        }
      });

      if (nextIndex !== lastIndexRef.current) {
        lastIndexRef.current = nextIndex;
        onActiveIndexChange(nextIndex);
      }
    },
    [
      pathLength,
      rocketX,
      rocketY,
      rocketRotate,
      dashOffset,
      p1X,
      p1Y,
      p2X,
      p2Y,
      p3X,
      p3Y,
      onActiveIndexChange,
    ],
  );

  useMotionValueEvent(progress, "change", (value) => {
    if (!reducedMotion) {
      updateRocket(value);
    }
  });

  useEffect(() => {
    if (pathLength <= 0) return;

    if (reducedMotion) {
      updateRocket(1);
      dashOffset.set(0);
      return;
    }

    updateRocket(progress.get());
  }, [pathLength, reducedMotion, progress, updateRocket, dashOffset]);

  const trajectoryGradientId = `${instanceId}-trajectory-gradient`;
  const pathGlowId = `${instanceId}-path-glow`;

  return (
    <svg
      viewBox={viewBox}
      className={className}
      preserveAspectRatio="none"
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={trajectoryGradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#017EF3" />
          <stop offset="55%" stopColor="#024ABF" />
          <stop offset="100%" stopColor="#02B5F6" />
        </linearGradient>

        <filter id={pathGlowId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Geometry reference */}
      <path ref={geometryRef} d={pathD} fill="none" stroke="none" />

      {/* Background trajectory */}
      <path
        d={pathD}
        fill="none"
        stroke="#024ABF"
        strokeOpacity="0.12"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Active trajectory */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={`url(#${trajectoryGradientId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        filter={`url(#${pathGlowId})`}
        strokeDasharray={pathLength || 1}
        style={{
          strokeDashoffset: reducedMotion ? 0 : dashOffset,
        }}
      />

      {/* Rocket trail particles */}
      {!reducedMotion &&
        [
          {
            x: p1X,
            y: p1Y,
            r: 2,
            o: 0.55,
          },
          {
            x: p2X,
            y: p2Y,
            r: 1.5,
            o: 0.35,
          },
          {
            x: p3X,
            y: p3Y,
            r: 1,
            o: 0.2,
          },
        ].map((particle, index) => (
          <motion.circle
            key={index}
            r={particle.r}
            fill="#02B5F6"
            opacity={particle.o}
            style={{
              x: particle.x,
              y: particle.y,
            }}
          />
        ))}

      {/* Checkpoints */}
      {checkpoints.map((point, index) => {
        const status: StepStatus =
          index === activeIndex
            ? "active"
            : index < activeIndex
              ? "completed"
              : "upcoming";

        return (
          <g key={index} transform={`translate(${point.x} ${point.y})`}>
            {status === "active" && !reducedMotion && (
              <motion.circle
                r={6}
                fill="none"
                stroke="#02B5F6"
                strokeWidth="1.5"
                initial={{
                  opacity: 0.6,
                  scale: 1,
                }}
                animate={{
                  opacity: 0,
                  scale: 2.4,
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}

            <circle
              r={status === "active" ? 6.5 : 4.5}
              fill={status === "upcoming" ? "#FFFFFF" : "#017EF3"}
              stroke={status === "upcoming" ? "#024ABF" : "#02B5F6"}
              strokeOpacity={status === "upcoming" ? 0.35 : 0.9}
              strokeWidth="1.5"
            />

            {status === "completed" && (
              <path
                d="M -1.8 0 L -0.4 1.6 L 2.2 -1.6"
                stroke="#FFFFFF"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
          </g>
        );
      })}

      {/* Final growth glow */}
      {endPoint && activeIndex === 4 && !reducedMotion && (
        <motion.circle
          cx={endPoint.x}
          cy={endPoint.y}
          r={4}
          fill="#02B5F6"
          initial={{
            opacity: 0.5,
            r: 4,
          }}
          animate={{
            opacity: 0,
            r: 26,
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}

      {/* Rocket */}
      <motion.g
        style={{
          x: rocketX,
          y: rocketY,
          rotate: rocketRotate,
        }}
      >
        <foreignObject
          x={-16}
          y={-16}
          width={32}
          height={32}
          style={{
            overflow: "visible",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
            }}
          >
            <RocketGlyph
              size={32}
              reducedMotion={reducedMotion}
              idPrefix={instanceId}
            />
          </div>
        </foreignObject>
      </motion.g>
    </svg>
  );
}

/* ============================================================================
   PROCESS CARD
============================================================================ */

function ProcessCard({
  step,
  status,
}: {
  step: ProcessStep;
  status: StepStatus;
}) {
  const Icon = step.icon;

  return (
    <motion.article
      animate={{
        scale: status === "active" ? 1.04 : 1,
        y: status === "active" ? -6 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
      }}
      aria-current={status === "active" ? "step" : undefined}
      className={[
        "relative flex h-full flex-col gap-4 rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-300",
        status === "active"
          ? "border-[#02B5F6]/60 bg-white shadow-[0_18px_45px_-15px_rgba(2,74,191,0.35)]"
          : status === "completed"
            ? "border-[#024ABF]/15 bg-white/90 shadow-[0_10px_28px_-16px_rgba(2,23,89,0.18)]"
            : "border-[#024ABF]/10 bg-white/70 shadow-[0_10px_28px_-18px_rgba(2,23,89,0.12)]",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <span
          className={[
            "text-sm font-medium tracking-wide transition-colors duration-300",
            status === "active" ? "text-[#017EF3]" : "text-[#024ABF]/40",
          ].join(" ")}
        >
          {step.number}
        </span>

        <span
          className={[
            "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
            status === "active"
              ? "border-transparent bg-gradient-to-br from-[#017EF3] to-[#02B5F6] text-white shadow-[0_0_18px_rgba(2,181,246,0.55)]"
              : status === "completed"
                ? "border-[#024ABF]/20 bg-[#F7FAFF] text-[#024ABF]"
                : "border-[#024ABF]/10 bg-[#F7FAFF] text-[#024ABF]/50",
          ].join(" ")}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
        </span>
      </div>

      <h3
        className={[
          "text-lg font-semibold transition-colors duration-300",
          status === "upcoming" ? "text-[#021759]/60" : "text-[#021759]",
        ].join(" ")}
      >
        {step.title}
      </h3>

      <p className="text-sm leading-relaxed text-[#021759]/60">
        {step.description}
      </p>
    </motion.article>
  );
}

/* ============================================================================
   MAIN SECTION
============================================================================ */

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, {
    once: true,
    amount: 0.5,
  });

  const [reducedMotion, setReducedMotion] = useState(false);

  const [desktopActiveIndex, setDesktopActiveIndex] = useState(-1);

  const [mobileActiveIndex, setMobileActiveIndex] = useState(-1);

  /* ------------------------------------------------------------------------ */
  /* Reduced motion                                                           */
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

  /* ------------------------------------------------------------------------ */
  /* Scroll progress                                                          */
  /* ------------------------------------------------------------------------ */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.45"],
  });

  const journeyProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  /* ------------------------------------------------------------------------ */
  /* Step states                                                              */
  /* ------------------------------------------------------------------------ */

  const desktopStatus = (index: number): StepStatus => {
    if (reducedMotion) return "completed";

    if (index === desktopActiveIndex) {
      return "active";
    }

    if (index < desktopActiveIndex) {
      return "completed";
    }

    return "upcoming";
  };

  const mobileStatus = (index: number): StepStatus => {
    if (reducedMotion) return "completed";

    if (index === mobileActiveIndex) {
      return "active";
    }

    if (index < mobileActiveIndex) {
      return "completed";
    }

    return "upcoming";
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-[#F7FAFF] py-24 sm:py-32"
    >
      {/* ================================================================== */}
      {/* BACKGROUND ATMOSPHERE                                              */}
      {/* ================================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(2,181,246,0.16) 0%, rgba(2,74,191,0.06) 45%, transparent 75%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(2,52,152,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,52,152,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />

        {!reducedMotion &&
          STARS.map((star, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-[#02B5F6]"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
              }}
              animate={{
                opacity: [0.15, 0.8, 0.15],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================================================================== */}
        {/* HEADER                                                             */}
        {/* ================================================================== */}

        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={
              headerInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.5,
            }}
            className="text-sm font-medium tracking-wide text-[#017EF3]"
          >
            Our Process
          </motion.p>

          <motion.h2
            id="process-heading"
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={
              headerInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            className="mt-3 text-3xl font-semibold text-[#021759] sm:text-4xl"
          >
            From Idea to Digital Growth
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={
              headerInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
            className="mt-4 text-base leading-relaxed text-[#021759]/65"
          >
            We follow a clear, collaborative process to transform your business
            goals into effective digital solutions.
          </motion.p>
        </div>

        <p className="sr-only">
          Our five-step process: Discover, Strategize, Build, Launch, and Grow.
          Each step is described in full below, independent of the animated
          illustration.
        </p>

        {/* ================================================================== */}
        {/* DESKTOP JOURNEY                                                    */}
        {/* ================================================================== */}

        <div className="relative mt-20 hidden lg:block">
          <div className="relative h-[220px] w-full">
            <JourneyVisual
              progress={journeyProgress}
              pathD={DESKTOP_PATH}
              viewBox={DESKTOP_VIEWBOX}
              activeIndex={desktopActiveIndex}
              onActiveIndexChange={setDesktopActiveIndex}
              reducedMotion={reducedMotion}
              className="h-full w-full"
              label="Diagram of the five-step process from Discover to Grow, with an animated rocket travelling along a curved path."
            />
          </div>

          <div className="mt-8 grid grid-cols-5 gap-6">
            {STEPS.map((step, index) => (
              <ProcessCard
                key={step.id}
                step={step}
                status={desktopStatus(index)}
              />
            ))}
          </div>
        </div>

        {/* ================================================================== */}
        {/* MOBILE JOURNEY                                                     */}
        {/* ================================================================== */}

        <div className="relative mt-16 lg:hidden">
          <div className="flex items-stretch gap-4 sm:gap-6">
            <div className="relative min-h-full w-14 shrink-0 sm:w-16">
              <JourneyVisual
                progress={journeyProgress}
                pathD={MOBILE_PATH}
                viewBox={MOBILE_VIEWBOX}
                activeIndex={mobileActiveIndex}
                onActiveIndexChange={setMobileActiveIndex}
                reducedMotion={reducedMotion}
                className="h-full min-h-full w-full"
                label="Diagram of the five-step process from Discover to Grow, with an animated rocket travelling downward along a curved path."
              />
            </div>

            <div className="flex flex-1 flex-col gap-5">
              {STEPS.map((step, index) => (
                <ProcessCard
                  key={step.id}
                  step={step}
                  status={mobileStatus(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
