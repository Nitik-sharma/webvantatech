"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Manrope } from "next/font/google";

import HeroImage from "../../public/images/HeroImage.png";
import logo from "@/public/images/logoimages.png";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
});

/* ==========================================================================
   ICONS
   ========================================================================== */

function IconWebDev({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4.5"
        width="18"
        height="12"
        rx="1.8"
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
        d="m8 9.5 2 2-2 2M12 13.5h3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSEO({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
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
        strokeWidth="1.7"
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

function IconAI({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 15v-2.2a3 3 0 0 1 6 0V15M8 9h8M12 5V3M12 21v-2M5 12H3M21 12h-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="12" r="0.8" fill="currentColor" />
      <circle cx="14" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

function IconMobile({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
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

function IconMarketing({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 10.5v3a1 1 0 0 0 1 1h1.6L11 18v-11l-4.4 3.5H5a1 1 0 0 0-1 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.2a4 4 0 0 1 0 5.6M16.3 7a7.2 7.2 0 0 1 0 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAutomation({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 4.5v2M12 17.5v2M19.5 12h-2M6.5 12h-2M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4M17.5 17.5l-1.4-1.4M7.9 7.9 6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ==========================================================================
   HERO
   ========================================================================== */

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className={`${manrope.className} relative isolate min-h-[760px] overflow-hidden bg-white pt-28 pb-16 sm:min-h-[800px] sm:pt-32 lg:min-h-[820px] lg:pt-36 lg:pb-20`}
    >
      {/* ================================================================== */}
      {/* BACKGROUND IMAGE                                                     */}
      {/* ================================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src={HeroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ================================================================== */}
      {/* BACKGROUND OVERLAYS                                                  */}
      {/* ================================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Main left readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20 lg:from-white lg:via-white/85 lg:to-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/65 to-transparent" />

        {/* Soft brand glow */}
        <div className="absolute left-[25%] top-[30%] h-[380px] w-[380px] rounded-full bg-[#017EF3]/[0.05] blur-[100px]" />
      </div>

      {/* ================================================================== */}
      {/* MAIN CONTENT                                                         */}
      {/* ================================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid min-h-[650px] items-center lg:grid-cols-[1fr_0.9fr]">
          {/* ================================================================= */}
          {/* LEFT CONTENT                                                       */}
          {/* ================================================================= */}

          <div className="relative z-10 max-w-[700px]">
            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#017EF3]/15 bg-white/80 px-4 py-2 shadow-[0_10px_30px_-20px_rgba(1,126,243,0.5)] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#02B5F6] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#017EF3]" />
              </span>

              <span className="text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-[#024ABF]">
                Digital Solutions for Modern Businesses
              </span>
            </motion.div>

            {/* H1 */}

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-6 max-w-[720px] text-[44px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#021759] sm:text-[55px] lg:text-[62px] xl:text-[68px]"
            >
              Build Digital Experiences
              <br />
              That Drive{" "}
              <span className="bg-gradient-to-r from-[#017EF3] via-[#008CF5] to-[#02B5F6] bg-clip-text text-transparent">
                Real Growth.
              </span>
            </motion.h1>

            {/* Supporting heading */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 max-w-[650px] text-[17px] font-semibold leading-[1.6] tracking-[-0.012em] text-[#021759]/90 sm:text-[19px]"
            >
              Web Development, AI Solutions, SEO and Digital Marketing designed
              to help your business get discovered, connect with customers and
              scale with confidence.
            </motion.p>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-4 max-w-[620px] text-[14px] leading-[1.8] text-slate-600 sm:text-[15px]"
            >
              WebVanta Technologies creates high-performance websites, custom
              web applications, mobile solutions, AI-powered workflows and
              search-ready digital experiences that turn technology into
              meaningful business value.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/get-started" className="group">
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#017EF3] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_18px_40px_-15px_rgba(1,126,243,0.65)] transition-all duration-300 hover:bg-[#024ABF] sm:w-auto"
                >
                  Start Your Project
                  <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.span>
              </Link>

              <Link href="/services" className="group">
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#021759]/15 bg-white/85 px-7 py-3.5 text-[14px] font-bold text-[#021759] shadow-[0_10px_30px_-25px_rgba(2,23,89,0.4)] backdrop-blur-sm transition-all duration-300 hover:border-[#017EF3]/30 hover:bg-white hover:text-[#017EF3] sm:w-auto"
                >
                  Explore Our Services
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.span>
              </Link>
            </motion.div>

            {/* Capabilities */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#021759]/10 pt-6"
            >
              <Capability
                icon={<IconWebDev className="h-4 w-4" />}
                text="Web Development"
              />

              <Capability
                icon={<IconSEO className="h-4 w-4" />}
                text="SEO & Growth"
              />

              <Capability
                icon={<IconAI className="h-4 w-4" />}
                text="AI Solutions"
              />

              <Capability
                icon={<IconAutomation className="h-4 w-4" />}
                text="Automation"
              />
            </motion.div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT VISUAL — IMAGE FOCUS                                         */}
          {/* ================================================================= */}

          <div className="relative hidden h-full min-h-[650px] lg:block">
            {/* Decorative glass panel */}

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="absolute right-[3%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-white/50 bg-white/[0.04] shadow-[0_30px_100px_-40px_rgba(1,126,243,0.35)] backdrop-blur-[2px]"
            />

            {/* Technology badge */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="absolute right-[4%] top-[18%] z-20"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_45px_-20px_rgba(2,23,89,0.35)] backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#017EF3] text-white">
                  <IconAI className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] font-extrabold text-[#021759]">
                    AI-Powered
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Digital Solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Search badge */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute bottom-[19%] right-[7%] z-20"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_45px_-20px_rgba(2,23,89,0.35)] backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5FF] text-[#017EF3]">
                  <IconSEO className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] font-extrabold text-[#021759]">
                    Search Ready
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    SEO & Digital Growth
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small logo card */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="absolute bottom-[7%] left-[18%] z-20"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_45px_-20px_rgba(2,23,89,0.35)] backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <Image
                    src={logo}
                    alt="WebVanta Technologies"
                    width={30}
                    height={30}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-extrabold text-[#021759]">
                    WebVanta
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Technology × Growth
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* BOTTOM VALUE STRIP                                                  */}
        {/* ================================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="relative z-20 mt-10 border-t border-[#021759]/10 pt-7 lg:mt-0"
        >
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            <ValuePoint
              number="01"
              title="Get Discovered"
              description="Build digital experiences designed for users, search engines and modern discovery."
            />

            <ValuePoint
              number="02"
              title="Work Smarter"
              description="Use AI and automation to simplify repetitive processes and improve efficiency."
            />

            <ValuePoint
              number="03"
              title="Grow Better"
              description="Combine technology, SEO and digital marketing into one focused growth strategy."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================================================
   CAPABILITY
   ========================================================================== */

function Capability({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/80 text-[#017EF3] shadow-sm ring-1 ring-[#017EF3]/10 backdrop-blur-sm">
        {icon}
      </span>

      <span className="text-[11px] font-bold text-[#021759]/75 sm:text-[11.5px]">
        {text}
      </span>
    </div>
  );
}

/* ==========================================================================
   VALUE POINT
   ========================================================================== */

function ValuePoint({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="pt-0.5 text-[10px] font-extrabold tracking-[0.12em] text-[#017EF3]">
        {number}
      </span>

      <div>
        <h2 className="text-[13px] font-extrabold text-[#021759]">{title}</h2>

        <p className="mt-1 max-w-[360px] text-[11px] leading-[1.6] text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
