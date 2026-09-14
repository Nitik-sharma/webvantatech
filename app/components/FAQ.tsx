"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ============================================================================
   FAQ DATA
============================================================================ */

const FAQS = [
  {
    question: "What services does WebVanta Technologies provide?",
    answer:
      "WebVanta Technologies provides web development, custom web application development, SEO, digital marketing, AI-powered solutions, business automation, and digital growth services. We help businesses build a strong digital presence, improve search visibility, attract customers, automate processes, and scale using modern technology.",
  },
  {
    question: "What type of websites can WebVanta Technologies build?",
    answer:
      "WebVanta Technologies builds fast, responsive, SEO-friendly websites for businesses, startups, professionals, and organizations. Our website development services can include corporate websites, service-based websites, landing pages, portfolio websites, e-commerce websites, and industry-specific digital platforms.",
  },
  {
    question: "Can WebVanta build custom web applications?",
    answer:
      "Yes, WebVanta develops custom web applications tailored to specific business requirements. We can build dashboards, admin panels, customer portals, booking systems, management systems, automation platforms, SaaS applications, and other business-focused web solutions.",
  },
  {
    question: "Does WebVanta provide SEO services?",
    answer:
      "Yes, WebVanta provides SEO services designed to improve organic search visibility and attract relevant traffic. Our approach can include technical SEO, on-page optimization, content strategy, keyword research, internal linking, structured data, local SEO, and ongoing performance optimization.",
  },
  {
    question: "Can WebVanta help my business appear in AI search results?",
    answer:
      "Yes, WebVanta can optimize your digital presence for modern search experiences, including AI-powered search. We focus on technically sound websites, clear and useful content, structured information, entity consistency, FAQs, and content that directly answers the questions your target audience is searching for.",
  },
  {
    question: "Does WebVanta offer digital marketing services?",
    answer:
      "Yes, WebVanta provides digital marketing services to help businesses increase visibility, reach potential customers, and generate leads. Depending on your goals, our services can include social media marketing, Google Ads, content marketing, search engine optimization, campaign strategy, and performance analysis.",
  },
  {
    question: "Can WebVanta automate repetitive business processes?",
    answer:
      "Yes, WebVanta develops business automation solutions that can reduce repetitive manual work and improve operational efficiency. We can help automate workflows involving data, forms, notifications, reporting, customer processes, dashboards, integrations, and other recurring business tasks.",
  },
  {
    question: "Which industries does WebVanta Technologies work with?",
    answer:
      "WebVanta Technologies can develop digital solutions for businesses across multiple industries, including healthcare, real estate, education, tours and travel, beauty and salons, professional services, and other business sectors. Solutions are customized according to each industry's users, workflows, and business objectives.",
  },
];

/* ============================================================================
   FAQ SCHEMA
============================================================================ */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ============================================================================
   FAQ COMPONENT
============================================================================ */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* ================================================================== */}
      {/* BACKGROUND ATMOSPHERE                                              */}
      {/* ================================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-[#017EF3]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#02B5F6]/10 blur-[130px]"
      />

      {/* Subtle Grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,52,152,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,52,152,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 75%)",
        }}
      />

      {/* ================================================================== */}
      {/* FAQ SCHEMA                                                         */}
      {/* ================================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================================================================== */}
        {/* HEADER                                                             */}
        {/* ================================================================== */}

        <div className="mx-auto w-full max-w-6xl text-center">
          {/* Eyebrow */}

          

          {/* Heading */}

          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto w-full max-w-6xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#021759] sm:text-5xl lg:text-7xl"
          >
            Answers to Your{" "}
            <span className="bg-gradient-to-r from-[#017EF3] to-[#02B5F6] bg-clip-text text-transparent">
              Digital Growth Questions
            </span>
          </motion.h2>

          {/* Subheading */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-7 w-full max-w-4xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl"
          >
            Have questions about web development, SEO, digital marketing,
            AI-powered solutions or business automation? Find clear answers
            about how WebVanta Technologies can help your business grow.
          </motion.p>
        </div>

        {/* ================================================================== */}
        {/* FAQ CONTENT                                                        */}
        {/* ================================================================== */}

        <div className="mx-auto mt-16 w-full max-w-5xl">
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className={[
                    "group overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen
                      ? "border-[#017EF3]/30 shadow-[0_18px_45px_-20px_rgba(2,74,191,0.3)]"
                      : "border-[#021759]/10 shadow-sm hover:border-[#017EF3]/20 hover:shadow-lg",
                  ].join(" ")}
                >
                  {/* Question */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    {/* Number */}

                    <span
                      className={[
                        "hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold sm:flex",
                        isOpen
                          ? "bg-[#017EF3] text-white"
                          : "bg-[#EAF2FF] text-[#017EF3]",
                      ].join(" ")}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question Text */}

                    <span
                      className={[
                        "flex-1 text-sm font-extrabold sm:text-base lg:text-lg",
                        isOpen ? "text-[#017EF3]" : "text-[#021759]",
                      ].join(" ")}
                    >
                      {faq.question}
                    </span>

                    {/* Arrow */}

                    <span
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "bg-[#017EF3] text-white"
                          : "bg-[#F4F8FF] text-[#017EF3] group-hover:bg-[#EAF2FF]",
                      ].join(" ")}
                    >
                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </span>
                  </button>

                  {/* Answer */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="border-t border-[#021759]/5 px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
                          <div className="flex gap-4">
                            {/* Answer Icon */}

                            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#017EF3] sm:flex">
                              <MessageCircleQuestion className="h-4 w-4" />
                            </div>

                            {/* Answer */}

                            <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ================================================================== */}
          {/* CTA                                                               */}
          {/* ================================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[#021759]/10 bg-[#F7FAFF] p-7 sm:flex-row sm:p-8"
          >
            <div>
              <h3 className="text-xl font-extrabold text-[#021759]">
                Still have questions?
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Let&apos;s discuss your project and find the right digital
                solution for your business.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#021759] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#021759]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#017EF3]"
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
