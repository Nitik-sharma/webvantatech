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
});

/* ==========================================================================
   ICONS
   ========================================================================== */

function WebIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 8 4 12l4 4M16 8l4 4-4 4M14 5l-4 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="10.8"
        cy="10.8"
        r="6.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="m15.5 15.5 4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AIIcon({ className = "" }: { className?: string }) {
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
        strokeWidth="1.6"
      />

      <path
        d="M9 15v-2.3a3 3 0 0 1 6 0V15M8 9h8M12 5V3M12 21v-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle cx="10" cy="12" r="0.8" fill="currentColor" />
      <circle cx="14" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

function AutomationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />

      <path
        d="M12 4v2M12 18v2M4 12h2M18 12h2M6.4 6.4l1.4 1.4M16.2 16.2l1.4 1.4M17.6 6.4l-1.4 1.4M7.8 16.2l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M4 10h11M10 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ==========================================================================
   FEATURE
   ========================================================================== */

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/90 text-[#017EF3] shadow-[0_8px_20px_-12px_rgba(2,23,89,0.45)] ring-1 ring-[#017EF3]/10 backdrop-blur-md">
        {icon}
      </div>

      <span className="text-[11px] font-bold leading-[1.25] text-[#021759]">
        {title}
      </span>
    </div>
  );
}

/* ==========================================================================
   GLASS CARD
   ========================================================================== */

function GlassCard({
  className = "",
  icon,
  title,
  subtitle,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className={`absolute z-30 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/80 px-4 py-3 shadow-[0_18px_45px_-18px_rgba(2,23,89,0.4)] backdrop-blur-xl"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#017EF3] text-white shadow-[0_8px_18px_-10px_rgba(1,126,243,0.9)]">
          {icon}
        </div>

        <div>
          <p className="whitespace-nowrap text-[11px] font-extrabold text-[#021759]">
            {title}
          </p>

          <p className="mt-0.5 whitespace-nowrap text-[10px] font-medium text-slate-500">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ==========================================================================
   HERO
   ========================================================================== */

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className={`${manrope.className} relative isolate overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-32`}
    >
      {/* ================================================================== */}
      {/* HERO IMAGE BACKGROUND                                                */}
      {/* ================================================================== */}

      <div aria-hidden="true" className="absolute inset-0 -z-30">
        <Image
          src={HeroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* ================================================================== */}
      {/* IMAGE OVERLAY                                                        */}
      {/* ================================================================== */}

      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {/* LEFT CONTENT READABILITY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-white
            via-white/90
            to-white/10
            lg:from-white
            lg:via-white/65
            lg:to-transparent
          "
        />

        {/* TOP SOFT FADE */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/75 to-transparent" />

        {/* BOTTOM SOFT FADE */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/85 to-transparent" />
      </div>

      {/* ================================================================== */}
      {/* MAIN CONTAINER                                                       */}
      {/* ================================================================== */}

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative min-h-[720px] lg:min-h-[735px]">
          {/* ================================================================ */}
          {/* LEFT CONTENT                                                      */}
          {/* ================================================================ */}

          <div className="relative z-40 flex max-w-[700px] flex-col justify-center pt-8 lg:min-h-[680px] lg:pt-0">
            {/* EYEBROW */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="w-fit rounded-full border border-[#017EF3]/15 bg-white/80 px-4 py-2 shadow-[0_8px_25px_-18px_rgba(1,126,243,0.5)] backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#02B5F6] opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-[#017EF3]" />
                </span>

                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#024ABF]">
                  Digital Solutions for Modern Businesses
                </span>
              </div>
            </motion.div>

            {/* H1 */}

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="
                mt-7
                max-w-[680px]
                text-[45px]
                font-extrabold
                leading-[1.04]
                tracking-[-0.055em]
                text-[#021759]
                sm:text-[56px]
                lg:text-[61px]
                xl:text-[67px]
              "
            >
              Build Digital
              <br />
              Experiences
              <br />
              That Drive{" "}
              <span className="bg-gradient-to-r from-[#017EF3] via-[#008CF5] to-[#02B5F6] bg-clip-text text-transparent">
                Real Growth.
              </span>
            </motion.h1>

            {/* SUPPORTING TEXT */}

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-7 max-w-[625px] text-[15px] font-semibold leading-[1.7] text-[#021759]/85 sm:text-[16px]"
            >
              Web Development, AI Solutions, SEO and Digital Marketing designed
              to help your business get discovered, connect with customers and
              scale with confidence.
            </motion.p>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-3.5 max-w-[610px] text-[13.5px] leading-[1.8] text-slate-600 sm:text-[14px]"
            >
              WebVanta Technologies creates high-performance websites, custom
              web applications, mobile solutions, AI-powered workflows and
              search-ready digital experiences that turn technology into
              meaningful business value.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/get-started" className="group">
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#017EF3] px-7 py-3.5 text-[13px] font-extrabold text-white shadow-[0_18px_40px_-15px_rgba(1,126,243,0.7)] transition-all duration-300 hover:bg-[#024ABF] sm:w-auto"
                >
                  Start Your Project
                  <ArrowIcon />
                </motion.span>
              </Link>

              <Link href="/services" className="group">
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#017EF3] bg-white/80 px-7 py-3.5 text-[13px] font-extrabold text-[#017EF3] backdrop-blur-md transition-all duration-300 hover:bg-[#017EF3] hover:text-white sm:w-auto"
                >
                  Explore Our Services
                  <ArrowIcon />
                </motion.span>
              </Link>
            </motion.div>

            {/* FEATURES */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-x-7 gap-y-5"
            >
              <Feature
                icon={<WebIcon className="h-5 w-5" />}
                title="Web Development"
              />

              <Feature
                icon={<SearchIcon className="h-5 w-5" />}
                title="SEO & Growth"
              />

              <Feature
                icon={<AIIcon className="h-5 w-5" />}
                title="AI Solutions"
              />

              <Feature
                icon={<AutomationIcon className="h-5 w-5" />}
                title="Automation"
              />
            </motion.div>

            {/* BRAND LINE */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.48 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#017EF3]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#024ABF]/70">
                Technology × Strategy × Growth
              </span>
            </motion.div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT IMAGE / EARTH AREA                                          */}
          {/* ================================================================ */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-[-3%]
              hidden
              w-[65%]
              lg:block
            "
          >
            {/* ============================================================ */}
            {/* AI CARD                                                        */}
            {/* ============================================================ */}

            <GlassCard
              className="right-[27%] top-[19%]"
              icon={<AIIcon className="h-5 w-5" />}
              title="AI-Powered"
              subtitle="Digital Solutions"
            />

            {/* ============================================================ */}
            {/* SEARCH CARD                                                    */}
            {/* ============================================================ */}

            <GlassCard
              className="right-[27%] top-[52%]"
              icon={<SearchIcon className="h-5 w-5" />}
              title="Search Ready"
              subtitle="SEO & Digital Growth"
            />

            
            {/* /Web Dav Card  */}

            {/* ============================================================ */}
            {/* WEBVANTA CARD                                                   */}
            {/* ============================================================ */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="absolute bottom-[13%] left-[27%] z-30"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/80 px-4 py-3 shadow-[0_20px_45px_-18px_rgba(2,23,89,0.4)] backdrop-blur-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
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

                  <p className="text-[10px] text-slate-500">
                    Technology × Growth
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ================================================================ */}
          {/* MOBILE IMAGE                                                      */}
          {/* ================================================================ */}

          <div className="relative mt-12 h-[320px] w-full lg:hidden">
            <Image
              src={HeroImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right"
            />

            {/* Mobile overlay */}

            <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white" />

            {/* Mobile AI card */}

            <div className="absolute right-2 top-8 z-20">
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/80 px-3 py-2.5 shadow-xl backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#017EF3] text-white">
                  <AIIcon className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold text-[#021759]">
                    AI-Powered
                  </p>

                  <p className="text-[9px] text-slate-500">Digital Solutions</p>
                </div>
              </div>
            </div>

            {/* Mobile Search card */}

            <div className="absolute bottom-8 left-2 z-20">
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/80 px-3 py-2.5 shadow-xl backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF5FF] text-[#017EF3]">
                  <SearchIcon className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold text-[#021759]">
                    Search Ready
                  </p>

                  <p className="text-[9px] text-slate-500">
                    SEO & Digital Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* BOTTOM VALUE STRIP                                                  */}
        {/* ================================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="relative z-40 border-t border-[#021759]/10 py-7"
        >
          <div className="grid gap-6 md:grid-cols-3 md:gap-10">
            {/* ITEM 01 */}

            <div className="flex gap-3">
              <span className="text-[10px] font-extrabold tracking-[0.15em] text-[#017EF3]">
                01
              </span>

              <div>
                <h2 className="text-[13px] font-extrabold text-[#021759]">
                  Get Discovered
                </h2>

                <p className="mt-1 text-[11px] leading-[1.6] text-slate-500">
                  Search-focused digital experiences built for users and modern
                  discovery.
                </p>
              </div>
            </div>

            {/* ITEM 02 */}

            <div className="flex gap-3">
              <span className="text-[10px] font-extrabold tracking-[0.15em] text-[#017EF3]">
                02
              </span>

              <div>
                <h2 className="text-[13px] font-extrabold text-[#021759]">
                  Work Smarter
                </h2>

                <p className="mt-1 text-[11px] leading-[1.6] text-slate-500">
                  AI and automation solutions designed to simplify repetitive
                  business processes.
                </p>
              </div>
            </div>

            {/* ITEM 03 */}

            <div className="flex gap-3">
              <span className="text-[10px] font-extrabold tracking-[0.15em] text-[#017EF3]">
                03
              </span>

              <div>
                <h2 className="text-[13px] font-extrabold text-[#021759]">
                  Grow Better
                </h2>

                <p className="mt-1 text-[11px] leading-[1.6] text-slate-500">
                  Technology, SEO and digital marketing aligned around
                  meaningful business outcomes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
