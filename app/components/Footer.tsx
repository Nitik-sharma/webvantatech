"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ============================================================================
   FOOTER
   WebVanta Technologies
============================================================================ */

const services = [
  {
    label: "Web Development",
    href: "#services",
  },
  {
    label: "Web Application Development",
    href: "#services",
  },
  {
    label: "SEO Services",
    href: "#services",
  },
  {
    label: "Digital Marketing",
    href: "#services",
  },
  {
    label: "Business Growth",
    href: "#services",
  },
  {
    label: "Automation & Technology",
    href: "#services",
  },
];

const companyLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Services",
    href: "#services",
  },
  {
    label: "Our Process",
    href: "#process",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M7.2 3.8h3l1.4 4-2 1.7a14.5 14.5 0 0 0 4.9 4.9l1.7-2 4 1.4v3c0 1-.8 1.8-1.8 1.8C11.4 18.6 5.4 12.6 5.4 5.6c0-1 .8-1.8 1.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M20 10.2c0 5-8 10-8 10s-8-5-8-10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path
        d="M6 9v9M6 6.5v.1M10 18v-5a4 4 0 0 1 8 0v5M10 9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />

      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path
        d="M13.5 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.6 1.7-1.6h1.3V3.8c-.6-.1-1.3-.2-2.1-.2-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.2v7h3.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[16px] w-[16px]"
      aria-hidden="true"
    >
      <path
        d="M5 4.5 19 19.5M19 4.5 5 19.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ============================================================================
   MAIN FOOTER
============================================================================ */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer
      className="relative overflow-hidden bg-[#021759] text-white"
      aria-label="WebVanta Technologies footer"
    >
      {/* ================================================================== */}
      {/* BACKGROUND ATMOSPHERE                                              */}
      {/* ================================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Cyan glow */}
        <div
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(2,181,246,0.35) 0%, rgba(1,126,243,0.12) 45%, transparent 72%)",
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute -bottom-60 left-1/4 h-[500px] w-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(1,126,243,0.35) 0%, transparent 70%)",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================================================================== */}
        {/* TOP CTA STRIP                                                      */}
        {/* ================================================================== */}

        <div className="border-b border-white/10 py-14 sm:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-[#02B5F6]">
                BUILD. RANK. GROW.
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s build your next digital success story.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                From websites and web applications to SEO, digital marketing,
                and automation, WebVanta Technologies helps businesses grow
                digitally.
              </p>
            </div>

            <Link
              href="#start-project"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#017EF3] to-[#02B5F6] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_35px_-12px_rgba(2,181,246,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-10px_rgba(2,181,246,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02B5F6]"
            >
              Start Your Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>

        {/* ================================================================== */}
        {/* MAIN FOOTER CONTENT                                                */}
        {/* ================================================================== */}

        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-20">
          {/* ================================================================ */}
          {/* BRAND                                                            */}
          {/* ================================================================ */}

          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="WebVanta Technologies home"
            >
              <Image
                src="/images/logoimages.png"
                alt="WebVanta Technologies"
                width={190}
                height={55}
                className="h-auto w-[170px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              WebVanta Technologies provides web development, web application
              development, SEO, digital marketing, business growth, and
              automation solutions for modern businesses.
            </p>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition-all duration-300 hover:border-[#02B5F6]/50 hover:bg-[#02B5F6]/10 hover:text-[#02B5F6]"
              >
                <LinkedInIcon />
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition-all duration-300 hover:border-[#02B5F6]/50 hover:bg-[#02B5F6]/10 hover:text-[#02B5F6]"
              >
                <InstagramIcon />
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition-all duration-300 hover:border-[#02B5F6]/50 hover:bg-[#02B5F6]/10 hover:text-[#02B5F6]"
              >
                <FacebookIcon />
              </a>

              <a
                href="#x"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition-all duration-300 hover:border-[#02B5F6]/50 hover:bg-[#02B5F6]/10 hover:text-[#02B5F6]"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* ================================================================ */}
          {/* SERVICES                                                         */}
          {/* ================================================================ */}

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center text-sm text-white/50 transition-colors duration-200 hover:text-[#02B5F6]"
                  >
                    <span>{service.label}</span>

                    <span className="ml-1 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================================ */}
          {/* COMPANY                                                          */}
          {/* ================================================================ */}

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/50 transition-colors duration-200 hover:text-[#02B5F6]"
                  >
                    <span>{link.label}</span>

                    <span className="ml-1 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================================ */}
          {/* CONTACT + NEWSLETTER                                             */}
          {/* ================================================================ */}

          <div>
            <h3 className="text-sm font-semibold text-white">Get In Touch</h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:hello@webvantatechnologies.com"
                className="group flex items-start gap-3 text-sm text-white/50 transition-colors duration-200 hover:text-[#02B5F6]"
              >
                <span className="mt-0.5 text-[#02B5F6]">
                  <MailIcon />
                </span>

                <span>hello@webvantatechnologies.com</span>
              </a>

              <a
                href="tel:+910000000000"
                className="group flex items-center gap-3 text-sm text-white/50 transition-colors duration-200 hover:text-[#02B5F6]"
              >
                <span className="text-[#02B5F6]">
                  <PhoneIcon />
                </span>

                <span>+91 00000 00000</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/50">
                <span className="mt-0.5 text-[#02B5F6]">
                  <LocationIcon />
                </span>

                <span>India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                Stay Updated
              </p>

              <p className="mt-2 text-sm text-white/55">
                Get useful digital growth insights.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="mt-4">
                <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-colors focus-within:border-[#02B5F6]/50">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email"
                    required
                    className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex w-12 shrink-0 items-center justify-center bg-[#017EF3] text-white transition-colors duration-300 hover:bg-[#02B5F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                  >
                    <ArrowIcon />
                  </button>
                </div>

                {submitted && (
                  <p className="mt-2 text-xs text-[#02B5F6]" role="status">
                    Thanks! You&apos;re on the list.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* BOTTOM BAR                                                         */}
        {/* ================================================================== */}

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} WebVanta Technologies. All rights
              reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
