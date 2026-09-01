"use client";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
import logo from "@/public/images/logoimages.png";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
});

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function IconWebDev({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="4.5"
        width="18"
        height="12"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.5 20h7M12 16.5V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 10.5 9.3 8.7 7.5 6.9M11 11.5h3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSEO({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle
        cx="10.5"
        cy="10.5"
        r="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M15.2 15.2 20 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 11.5 9.6 9l1.6 3 1.8-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAppDev({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="7"
        y="3"
        width="10"
        height="18"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10.5 18h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMarketing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 10.5v3a1 1 0 0 0 1 1h1.6L11 18v-11l-4.4 3.5H5a1 1 0 0 0-1 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.2a4 4 0 0 1 0 5.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16.3 7a7.2 7.2 0 0 1 0 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAutomation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 12v2.5M16 13.8V12M6.8 11l-1.3 1.3M18.5 6.5l-1.3 1.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGrowth({ className }: { className?: string }) {
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
    </svg>
  );
}

function IconTech({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.5v9M12 12.5 4 8M12 12.5l8-4.5M12 12.5v8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.6 12.4 7l5.9.6-4.4 3.9 1.3 5.8L10 14.4l-5.2 2.9 1.3-5.8L1.7 7.6 7.6 7 10 1.6Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Service Card Data                                                          */
/* -------------------------------------------------------------------------- */

type FloatCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  accent: string;
  ink: string;
  position: string;
  delay: number;
};

const FLOAT_CARDS: FloatCard[] = [
  {
    title: "Web Development",
    description:
      "Fast, responsive websites built to attract and convert customers",
    icon: IconWebDev,
    accent: "bg-[#E7F1FF]",
    ink: "text-[#017EF3]",
    position: "left-[0%] top-[4%] w-[178px]",
    delay: 0,
  },
  {
    title: "SEO Services",
    description:
      "Improve search rankings and attract qualified organic traffic",
    icon: IconSEO,
    accent: "bg-emerald-50",
    ink: "text-emerald-600",
    position: "right-[0%] top-[0%] w-[172px]",
    delay: 0.4,
  },
  {
    title: "Web App Development",
    description: "Custom web applications designed around your business needs",
    icon: IconAppDev,
    accent: "bg-[#E7F1FF]",
    ink: "text-[#024ABF]",
    position: "left-[-4%] top-[42%] w-[176px]",
    delay: 0.8,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that build visibility, leads and conversions",
    icon: IconMarketing,
    accent: "bg-orange-50",
    ink: "text-orange-500",
    position: "right-[-4%] top-[40%] w-[172px]",
    delay: 1.2,
  },
  {
    title: "Business Automation",
    description:
      "Automate repetitive workflows and improve operational efficiency",
    icon: IconAutomation,
    accent: "bg-violet-50",
    ink: "text-violet-600",
    position: "left-[4%] bottom-[2%] w-[172px]",
    delay: 1.6,
  },
  {
    title: "Business Growth",
    description:
      "Digital strategies designed to increase customers and revenue",
    icon: IconGrowth,
    accent: "bg-cyan-50",
    ink: "text-[#02B5F6]",
    position: "left-1/2 bottom-[-4%] w-[172px] -translate-x-1/2",
    delay: 2,
  },
  {
    title: "Technology Solutions",
    description: "Scalable digital systems built to support long-term growth",
    icon: IconTech,
    accent: "bg-indigo-50",
    ink: "text-indigo-600",
    position: "right-[2%] bottom-[6%] w-[176px]",
    delay: 2.4,
  },
];

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  return (
    <section
      className={`${manrope.className} relative overflow-hidden bg-[#F7FAFF] pt-36 pb-20 lg:pt-44 lg:pb-28`}
    >
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#017EF3]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 top-24 h-[380px] w-[380px] rounded-full bg-[#02B5F6]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-10">
          {/* ---------------------------------------------------------------- */}
          {/* Left Column                                                       */}
          {/* ---------------------------------------------------------------- */}

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#017EF3]">
              Web Development&nbsp;·&nbsp;SEO&nbsp;·&nbsp;Digital Marketing
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-[1.06] tracking-tight text-[#021759] sm:text-6xl lg:text-[64px]">
              Build. Rank.
              <br />
              <span className="bg-gradient-to-r from-[#017EF3] to-[#02B5F6] bg-clip-text text-transparent">
                Grow Your Business.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg font-semibold text-[#021759]/80">
              Web Development, SEO & Digital Marketing Solutions Built for
              Business Growth.
            </p>

            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500">
              WebVanta Technologies provides professional web development,
              custom web application development, SEO, digital marketing, and
              business growth solutions that help businesses build a stronger
              online presence, attract qualified customers, and grow digitally.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/get-started">
                <motion.span
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#017EF3] to-[#024ABF] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_16px_34px_-12px_rgba(1,126,243,0.65)] transition-shadow hover:shadow-[0_18px_38px_-10px_rgba(1,126,243,0.75)]"
                >
                  Start Your Project
                  <motion.span
                    aria-hidden="true"
                    variants={{ hover: { x: 3 } }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-[#021759]/15 px-6 py-3.5 text-[15px] font-semibold text-[#021759] transition-colors hover:border-[#021759]/30 hover:bg-white"
              >
                Explore Digital Solutions
              </Link>
            </div>

            {/* Trust / Capability row */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5">
                {["#017EF3", "#024ABF", "#02B5F6", "#033498"].map(
                  (color, i) => (
                    <span
                      key={color}
                      style={{
                        backgroundColor: color,
                        zIndex: 4 - i,
                      }}
                      className="h-9 w-9 rounded-full border-2 border-[#F7FAFF]"
                    />
                  ),
                )}
              </div>

              <div>
                <p className="text-[14px] font-semibold text-[#021759]">
                  Digital Solutions Built for Growth
                </p>

                <div className="mt-0.5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5 text-[#017EF3]" />
                  ))}

                  <span className="ml-1 text-[12.5px] text-slate-500">
                    Technology • SEO • Digital Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Right Column — Service Cluster                                    */}
          {/* ---------------------------------------------------------------- */}

          <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block">
            {/* Decorative concentric rings */}
            <div className="absolute inset-[6%] rounded-full border border-dashed border-[#017EF3]/20" />

            <div className="absolute inset-[18%] rounded-full border border-dashed border-[#017EF3]/15" />

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_30px_60px_-18px_rgba(2,23,89,0.35)] ring-1 ring-slate-900/[0.04]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#017EF3]/10 to-[#02B5F6]/10 blur-xl" />

              <Image
                src={logo}
                alt="WebVanta Technologies logo"
                width={64}
                height={64}
                className="relative h-16 w-16 object-contain"
              />
            </div>

            {/* Floating Service Cards */}
            {FLOAT_CARDS.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  }}
                  className={`absolute flex items-start gap-2.5 rounded-2xl border border-slate-900/[0.05] bg-white p-3 shadow-[0_16px_34px_-16px_rgba(2,23,89,0.28)] ${card.position}`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${card.accent} ${card.ink}`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>

                  <span>
                    <span className="block text-[13px] font-semibold leading-tight text-[#021759]">
                      {card.title}
                    </span>

                    <span className="mt-0.5 block text-[11.5px] leading-snug text-slate-500">
                      {card.description}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Mobile Service Cards                                              */}
          {/* ---------------------------------------------------------------- */}

          <div className="lg:hidden">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_20px_40px_-16px_rgba(2,23,89,0.3)]">
              <Image
                src={logo}
                alt="WebVanta Technologies logo"
                width={52}
                height={52}
                className="h-13 w-13 object-contain"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {FLOAT_CARDS.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="flex items-start gap-2.5 rounded-2xl border border-slate-900/[0.05] bg-white p-3 shadow-sm"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${card.accent} ${card.ink}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <span>
                      <span className="block text-[12.5px] font-semibold leading-tight text-[#021759]">
                        {card.title}
                      </span>

                      <span className="mt-0.5 block text-[11px] leading-snug text-slate-500">
                        {card.description}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
