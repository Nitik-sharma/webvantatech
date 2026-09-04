"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Technology from "../../public/images/ServiceHeader.jpeg";

import web from "@/public/images/website.png";
import app from "@/public/images/aapdev.png";
import seo from "@/public/images/seo.png";
import digital from "@/public/images/digital.png";
import automation from "@/public/images/automation.png";
import growth from "@/public/images/growth.png";

import {
  ArrowRight,
  Bot,
  Code2,
  Globe2,
  LineChart,
  Megaphone,
  Workflow,
  Sparkles,
} from "lucide-react";

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  image: StaticImageData;
  imageAlt: string;
};

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Build fast, responsive and SEO-friendly websites designed to strengthen your online presence, attract visitors and convert them into customers.",
    href: "/services/web-development",
    icon: <Code2 className="h-5 w-5" />,
    image: web,
    imageAlt:
      "Modern responsive website development interface with professional blue technology elements",
  },

  {
    number: "02",
    title: "Web Application Development",
    description:
      "Develop custom web applications that simplify business processes, improve productivity and scale with your growing business needs.",
    href: "/services/web-application-development",
    icon: <Globe2 className="h-5 w-5" />,
    image: app,
    imageAlt:
      "Custom web application dashboard with connected digital systems and modern technology interface",
  },

  {
    number: "03",
    title: "SEO Services",
    description:
      "Improve search visibility, organic traffic and qualified leads with technical SEO, on-page optimization and content strategies.",
    href: "/services/seo",
    icon: <LineChart className="h-5 w-5" />,
    image: seo,
    imageAlt:
      "SEO analytics dashboard showing search rankings, organic traffic and business growth",
  },

  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Reach the right audience through data-driven digital marketing strategies focused on visibility, engagement, leads and conversions.",
    href: "/services/digital-marketing",
    icon: <Megaphone className="h-5 w-5" />,
    image: digital,
    imageAlt:
      "Digital marketing campaign analytics and audience engagement visualization",
  },

  {
    number: "05",
    title: "Business Growth",
    description:
      "Identify digital opportunities and create practical strategies that help businesses attract customers, improve operations and grow sustainably.",
    href: "/services/business-growth",
    icon: <LineChart className="h-5 w-5" />,
    image: growth,
    imageAlt:
      "Business growth analytics showing upward digital performance and technology elements",
  },

  {
    number: "06",
    title: "Automation & Technology",
    description:
      "Streamline repetitive processes with practical automation, AI-powered workflows and scalable technology solutions.",
    href: "/services/automation-technology",
    icon: <Workflow className="h-5 w-5" />,
    image: automation,
    imageAlt:
      "AI-powered business automation workflow connecting digital systems and business processes",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#F7FAFF] py-24 lg:py-32"
    >
      {/* ================= AMBIENT BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#017EF3]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#02B5F6]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#017EF3]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#017EF3]">
                What We Do
              </span>
            </div>

            {/* SEO H2 */}

            <h2
              id="services-heading"
              className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#021759] sm:text-5xl lg:text-6xl"
            >
              Digital Solutions
              <span className="block">
                Built for{" "}
                <span className="bg-gradient-to-r from-[#017EF3] to-[#02B5F6] bg-clip-text text-transparent">
                  Business Growth
                </span>
              </span>
            </h2>

            {/* SEO / AEO Content */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              WebVanta Technologies provides web development, custom web
              application development, SEO, digital marketing, automation and
              business growth solutions that help businesses build a stronger
              digital presence, reach the right customers and scale with
              confidence.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#021759] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#021759]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#017EF3]"
              >
                Explore All Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#021759]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#021759] transition-all duration-300 hover:-translate-y-1 hover:border-[#017EF3]/30 hover:text-[#017EF3]"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>

          {/* ================= HEADER IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-[#017EF3]/10 bg-[#021759] shadow-2xl shadow-[#021759]/15 sm:min-h-[380px]">
              {/* Technology Background Image */}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${Technology.src})`,
                }}
              />

              {/* Dark Blue Overlay */}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[#021759]/85 via-[#021759]/50 to-[#017EF3]/40"
              />

              {/* Decorative Grid */}

              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center Technology Orb */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-44 w-44 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
                  <div className="absolute inset-5 rounded-full border border-cyan-300/20" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bot className="h-16 w-16 text-cyan-200" />
                  </div>

                  {/* Code Icon */}

                  <div className="absolute -right-8 top-5 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>

                  {/* Analytics Icon */}

                  <div className="absolute -bottom-5 -left-8 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                    <LineChart className="h-5 w-5 text-cyan-200" />
                  </div>

                  {/* Automation Icon */}

                  <div className="absolute -right-7 bottom-8 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                    <Workflow className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Bottom Glass Card */}

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                      <Sparkles className="h-5 w-5 text-cyan-200" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Technology + Growth
                      </p>

                      <p className="mt-1 text-xs text-blue-100">
                        Digital solutions designed around your business goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= SERVICE CATEGORIES ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid overflow-hidden rounded-3xl border border-[#021759]/10 bg-white shadow-sm md:grid-cols-3"
        >
          {/* BUILD */}

          <div className="border-b border-[#021759]/10 p-7 md:border-b-0 md:border-r">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#017EF3]">
              Build
            </p>

            <h3 className="mt-3 text-xl font-extrabold text-[#021759]">
              Digital Products
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Websites and custom applications built for performance,
              scalability and usability.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Web Development", "Web Apps", "Responsive UI"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#F4F8FF] px-3 py-1.5 text-xs font-semibold text-[#021759]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* REACH */}

          <div className="border-b border-[#021759]/10 p-7 md:border-b-0 md:border-r">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#017EF3]">
              Reach
            </p>

            <h3 className="mt-3 text-xl font-extrabold text-[#021759]">
              Digital Visibility
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              SEO and digital marketing strategies designed to connect your
              business with the right audience.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["SEO", "Digital Marketing", "Lead Generation"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#F4F8FF] px-3 py-1.5 text-xs font-semibold text-[#021759]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* GROW */}

          <div className="p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#017EF3]">
              Grow
            </p>

            <h3 className="mt-3 text-xl font-extrabold text-[#021759]">
              Business Growth
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Automation and technology strategies that help businesses improve
              efficiency and scale.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Automation", "AI Solutions", "Growth Strategy"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#F4F8FF] px-3 py-1.5 text-xs font-semibold text-[#021759]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-[#021759]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#017EF3]/25 hover:shadow-2xl hover:shadow-[#021759]/10"
            >
              {/* CARD IMAGE */}

              <div className="relative h-56 overflow-hidden bg-[#EAF2FF]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#021759]/60 via-transparent to-transparent" />

                {/* Service Number */}

                
              </div>

              {/* CARD CONTENT */}

              <div className="p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#017EF3] transition-colors duration-300 group-hover:bg-[#017EF3] group-hover:text-white">
                    {service.icon}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    WebVanta Technologies
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#021759]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#017EF3]"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#021759] px-7 py-12 text-center sm:px-12"
        >
          {/* Glow */}

          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#017EF3]/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#02B5F6]/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">
              Need the Right Solution?
            </p>

            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Not Sure Which Service Your Business Needs?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Tell us about your business, goals and challenges. We can help you
              identify the right combination of technology, SEO, marketing and
              automation solutions.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#021759] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAF2FF]"
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
