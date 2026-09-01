"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import web from "@/public/images/webDev.png";
import app from "@/public/images/aapdev.png";
import seo from "@/public/images/seo.png";
import digital from "@/public/images/digital.png";
import automation from "@/public/images/automation.png";
import growth from "@/public/images/growth.png";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
};

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Build fast, responsive and SEO-friendly websites that turn visitors into customers.",
    href: "/services/web-development",
    image: web,
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Develop custom web applications designed around your business processes and requirements.",
    href: "/services/web-application-development",
    image: app,
  },
  {
    number: "03",
    title: "SEO Services",
    description:
      "Improve search visibility, organic traffic and qualified leads with a strategic SEO approach.",
    href: "/services/seo",
    image: seo,
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Reach your target audience through data-driven digital marketing and conversion-focused campaigns.",
    href: "/services/digital-marketing",
    image: digital,
  },
  {
    number: "05",
    title: "Business Growth",
    description:
      "Identify digital opportunities and create strategies that help your business attract customers and grow.",
    href: "/services/business-growth",
    image: growth,
  },
  {
    number: "06",
    title: "Automation & Technology",
    description:
      "Streamline repetitive processes with practical automation and scalable technology solutions.",
    href: "/services/automation-technology",
    image: automation,
  },
];

/* -------------------------------------------------------------------------- */
/*  Services section                                                         */
/* -------------------------------------------------------------------------- */

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#F7FAFF] py-24 lg:py-32"
    >
      {/* Ambient brand glow — echoes the Hero's backdrop treatment */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[380px] w-[380px] rounded-full bg-[#02B5F6]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[340px] w-[340px] rounded-full bg-[#017EF3]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#017EF3]">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#021759] sm:text-[42px]"
          >
            Digital Solutions Designed to Help Your Business Grow
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
            From high-performance websites and custom web applications to SEO
            and digital marketing, WebVanta Technologies combines technology and
            growth strategies to help businesses build a stronger digital
            presence and reach their goals.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (index % 3) * 0.1,
              }}
              whileHover="hover"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/[0.06] bg-white shadow-[0_2px_10px_-4px_rgba(2,23,89,0.08)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[#017EF3]/30 hover:shadow-[0_28px_48px_-20px_rgba(2,23,89,0.28)]"
            >
              {/* Signature top accent — draws in on hover */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#017EF3] to-[#02B5F6] transition-transform duration-300 group-hover:scale-x-100"
              />

              {/* Full-size image */}
              <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-56">
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} — WebVanta Technologies`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Index badge */}
               
              </div>

              {/* Content panel — same white surface as the rest of the site */}
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[18px] font-bold leading-snug tracking-[-0.01em] text-[#021759]">
                    {service.title}
                  </h3>

                  <Link
                    href={service.href}
                    aria-label={`Explore ${service.title} service`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7FAFF] text-[#017EF3] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#017EF3] group-hover:to-[#02B5F6] group-hover:text-white"
                  >
                    <motion.span
                      variants={{ hover: { x: 3 } }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      aria-hidden="true"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>

                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-slate-500">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#017EF3] transition-colors duration-300 group-hover:text-[#024ABF]"
                >
                  Explore Service
                  <motion.span
                    aria-hidden="true"
                    variants={{ hover: { x: 4 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
