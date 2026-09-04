"use client";

import Image from "next/image";
import WhyImage from "../../public/images/whywebvata.png"
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  LineChart,
  Rocket,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Feature Data                                                               */
/* -------------------------------------------------------------------------- */

type Feature = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const FEATURES: Feature[] = [
  {
    number: "01",
    title: "Business-First Strategy",
    description:
      "We understand your business goals, customers and challenges before selecting the right technology, SEO or digital growth strategy.",
    icon: Rocket,
  },
  {
    number: "02",
    title: "SEO & AI-Ready Development",
    description:
      "We build fast, responsive and accessible websites with technical SEO, structured content and AI-search visibility in mind.",
    icon: Search,
  },
  {
    number: "03",
    title: "Scalable Technology",
    description:
      "From business websites to custom web applications and automation systems, our solutions are designed to support long-term growth.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Data-Driven Digital Growth",
    description:
      "We combine SEO, digital marketing, analytics and automation to help businesses improve visibility, generate opportunities and grow.",
    icon: LineChart,
  },
];

/* -------------------------------------------------------------------------- */
/* Why WebVanta                                                               */
/* -------------------------------------------------------------------------- */

export default function WhyWebVanta() {
  return (
    <section
      id="why-webvanta"
      aria-labelledby="why-webvanta-heading"
      className="relative overflow-hidden bg-[#F7FAFF] py-24 lg:py-32"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Ambient Background                                                  */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#017EF3]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#02B5F6]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================================================================= */}
        {/* TOP INTRO                                                          */}
        {/* ================================================================= */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#017EF3]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#017EF3]">
              Why WebVanta
            </span>

            <span className="h-px w-10 bg-[#017EF3]" />
          </motion.div>

          <motion.h2
            id="why-webvanta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#021759] sm:text-5xl lg:text-6xl"
          >
            Technology That Works
            <span className="block">
              for Your{" "}
              <span className="bg-gradient-to-r from-[#017EF3] to-[#02B5F6] bg-clip-text text-transparent">
                Business Growth
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            WebVanta Technologies helps businesses build, optimize and grow
            their digital presence through web development, custom web
            applications, SEO, AI-powered solutions, digital marketing and
            business automation.
          </motion.p>
        </div>

        {/* ================================================================= */}
        {/* MAIN CONTENT                                                       */}
        {/* ================================================================= */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* ================================================================= */}
          {/* LEFT IMAGE                                                         */}
          {/* ================================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#021759]/10 bg-white p-3 shadow-2xl shadow-[#021759]/10">
              {/* Main Image */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={WhyImage}
                  alt="WebVanta Technologies digital solutions including web development, SEO, AI, automation and business growth"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#021759]/75 via-[#021759]/10 to-transparent" />

                {/* Floating AI Badge */}

            

                {/* Bottom Content */}

              
              </div>
            </div>

            {/* Decorative Glow */}

            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-8 -z-10 h-32 w-32 rounded-full bg-[#02B5F6]/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-[#017EF3]/20 blur-3xl"
            />
          </motion.div>

          {/* ================================================================= */}
          {/* RIGHT CONTENT                                                      */}
          {/* ================================================================= */}

          <div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-[0.16em] text-[#017EF3]"
            >
              Why businesses choose WebVanta
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-[#021759] sm:text-4xl"
            >
              More Than Technology.
              <span className="block text-[#017EF3]">
                A Digital Growth Partner.
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600"
            >
              Our approach connects technology with measurable business
              objectives. We focus on creating digital experiences that are
              fast, search-friendly, accessible, scalable and ready for the
              evolving AI-driven search ecosystem.
            </motion.p>

            {/* Feature Cards */}

            <div className="mt-8 space-y-4">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    key={feature.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ x: 5 }}
                    className="group relative overflow-hidden rounded-2xl border border-[#021759]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#017EF3]/30 hover:shadow-xl hover:shadow-[#021759]/10 sm:p-6"
                  >
                    {/* Hover Glow */}

                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#017EF3] to-[#02B5F6] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex gap-4">
                      {/* Icon */}

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#017EF3] transition-all duration-300 group-hover:bg-[#017EF3] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          

                          <h4 className="text-base font-extrabold text-[#021759] sm:text-lg">
                            {feature.title}
                          </h4>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Bottom Points */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
            >
              {[
                "SEO-Friendly",
                "AI-Search Ready",
                "Performance Focused",
                "Scalable Solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-[#021759]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#017EF3]" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#021759] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#021759]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#017EF3]"
              >
                Learn More About WebVanta
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* BOTTOM TRUST STRIP                                                  */}
        {/* ================================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid overflow-hidden rounded-3xl border border-[#021759]/10 bg-white shadow-sm sm:grid-cols-3"
        >
          {/* Technology */}

          <div className="border-b border-[#021759]/10 p-6 text-center sm:border-b-0 sm:border-r">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#017EF3]">
              <Code2 className="h-5 w-5" />
            </div>

            <h4 className="mt-3 font-extrabold text-[#021759]">
              Modern Technology
            </h4>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Modern web technologies and scalable digital solutions.
            </p>
          </div>

          {/* SEO */}

          <div className="border-b border-[#021759]/10 p-6 text-center sm:border-b-0 sm:border-r">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#017EF3]">
              <Search className="h-5 w-5" />
            </div>

            <h4 className="mt-3 font-extrabold text-[#021759]">
              Search Visibility
            </h4>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              SEO and structured content designed for search discovery.
            </p>
          </div>

          {/* Automation */}

          <div className="p-6 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#017EF3]">
              <Workflow className="h-5 w-5" />
            </div>

            <h4 className="mt-3 font-extrabold text-[#021759]">
              Smarter Automation
            </h4>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              AI and automation solutions that improve business efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
