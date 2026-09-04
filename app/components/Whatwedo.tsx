"use client";

import { motion } from "framer-motion";
import {
  CodeIcon,
  LayersIcon,
  SearchIcon,
  MegaphoneIcon,
  TrendingUpIcon,
  GearIcon,
  ArrowRightIcon,
} from "./AboutIcons";
import {
  fadeUpVariants,
  staggerVariants,
  usePrefersReducedMotion,
} from "./motion-variants";

interface Service {
  number: string;
  title: string;
  description: string;
  icon: typeof CodeIcon;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We build fast, responsive, SEO-friendly websites designed to provide a strong user experience and help businesses convert visitors into customers.",
    icon: CodeIcon,
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "We develop custom web applications around your business processes, requirements, and workflows, helping you manage operations more efficiently.",
    icon: LayersIcon,
  },
  {
    number: "03",
    title: "SEO Services",
    description:
      "Our SEO services focus on improving search visibility, increasing relevant organic traffic, and helping businesses reach potential customers through search engines.",
    icon: SearchIcon,
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "We create data-driven digital marketing strategies designed to improve online visibility, audience engagement, leads, and conversions.",
    icon: MegaphoneIcon,
  },
  {
    number: "05",
    title: "Business Growth",
    description:
      "We identify digital opportunities and develop practical strategies that help businesses attract customers, improve their online presence, and scale sustainably.",
    icon: TrendingUpIcon,
  },
  {
    number: "06",
    title: "Automation & Technology",
    description:
      "We use technology and automation to reduce repetitive work, improve workflows, increase efficiency, and create scalable business processes.",
    icon: GearIcon,
  },
];

function ServiceCard({
  service,
  item,
}: {
  service: Service;
  item: ReturnType<typeof fadeUpVariants>;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col gap-4 rounded-2xl border border-[#024ABF]/10 bg-white p-7 shadow-[0_10px_28px_-18px_rgba(2,23,89,0.14)] transition-all duration-300 hover:border-[#02B5F6]/50 hover:shadow-[0_18px_44px_-16px_rgba(2,74,191,0.28)]"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium tracking-wide text-[#024ABF]/40">
          {service.number}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#024ABF]/10 bg-[#F7FAFF] text-[#024ABF] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#017EF3] group-hover:to-[#02B5F6] group-hover:text-white">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <h3 className="text-lg font-semibold text-[#021759]">{service.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-[#021759]/60">
        {service.description}
      </p>

      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#017EF3]">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </motion.article>
  );
}

export default function WhatWeDo() {
  const reducedMotion = usePrefersReducedMotion();
  const stagger = staggerVariants(reducedMotion);
  const item = fadeUpVariants(reducedMotion);

  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="relative bg-[#F7FAFF] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUpVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium tracking-wide text-[#017EF3]">
            What We Do
          </p>
          <h2
            id="what-we-do-heading"
            className="mt-4 text-3xl font-semibold text-[#021759] sm:text-4xl"
          >
            Digital Solutions Built Around Your Business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#021759]/65">
            WebVanta Technologies provides a range of digital services designed
            to help businesses establish, improve, and scale their online
            presence.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.number} service={service} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
