"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Manrope } from "next/font/google";
import logo from "@/public/images/logoimages.png";



const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
});

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type NavItem = {
  label: string;
  href: string;
};

type Service = {
  title: string;
  description: string;
  href: string;
  icon: (props: { className?: string }) => JSX.Element;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

/* -------------------------------------------------------------------------- */
/*  Icons (hand-rolled, no icon library)                                      */
/* -------------------------------------------------------------------------- */

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

function IconWebDev({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M8.5 8 5 12l3.5 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8 19 12l-3.5 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6.5 11 17.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWebApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="4"
        y="5.5"
        width="16"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="7.5" r="0.6" fill="currentColor" />
      <circle cx="9" cy="7.5" r="0.6" fill="currentColor" />
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

function IconAutomation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 4.5v2M12 17.5v2M19.5 12h-2M6.5 12h-2M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4M17.5 17.5l-1.4-1.4M7.9 7.9 6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SERVICES: Service[] = [
  {
    title: "SEO",
    description: "Rank higher and win qualified organic traffic.",
    href: "/services/seo",
    icon: IconSEO,
  },
  {
    title: "Web Development",
    description: "Fast, accessible websites built to convert.",
    href: "/services/web-development",
    icon: IconWebDev,
  },
  {
    title: "Web Application Development",
    description: "Custom platforms and portals that scale.",
    href: "/services/web-application-development",
    icon: IconWebApp,
  },
  {
    title: "Digital Marketing",
    description: "Full-funnel campaigns that drive demand.",
    href: "/services/digital-marketing",
    icon: IconMarketing,
  },
  {
    title: "Business Growth",
    description: "Strategy and systems to scale revenue.",
    href: "/services/business-growth",
    icon: IconGrowth,
  },
  {
    title: "Automation & Technology",
    description: "Streamline operations with smart systems.",
    href: "/services/automation-technology",
    icon: IconAutomation,
  },
];

/* -------------------------------------------------------------------------- */
/*  Decorative circuit trace — a quiet nod to the brand mark, used once as    */
/*  a low-opacity backdrop inside the mega-menu's highlight panel.           */
/* -------------------------------------------------------------------------- */

function CircuitTrace() {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      className="absolute -right-6 -top-6 h-44 w-44 opacity-[0.14]"
    >
      <path d="M10 40h60v40h80v50h60" stroke="#02B5F6" strokeWidth="1.4" />
      <path d="M30 10v50h50v70h90" stroke="#017EF3" strokeWidth="1.4" />
      <circle cx="10" cy="40" r="3" fill="#02B5F6" />
      <circle cx="70" cy="80" r="3" fill="#02B5F6" />
      <circle cx="150" cy="130" r="3" fill="#017EF3" />
      <circle cx="30" cy="10" r="3" fill="#017EF3" />
      <circle cx="80" cy="60" r="3" fill="#02B5F6" />
      <circle cx="170" cy="130" r="3" fill="#017EF3" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const isServicesActive = pathname.startsWith("/services");

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 120);
  };

  return (
    <header className={`${manrope.className} fixed inset-x-0 top-0 z-50`}>
      {/* Signature hairline — a quiet circuit-trace gradient that always caps the viewport */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-[#021759] via-[#017EF3] to-[#02B5F6]" />

      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-900/[0.06] bg-white/85 shadow-[0_12px_34px_-16px_rgba(2,23,89,0.28)] backdrop-blur-md"
            : "border-b border-white/0 bg-white/0"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-10 ${
            isScrolled ? "h-[68px]" : "h-[84px]"
          }`}
        >
          {/* Logo — mark only, no wordmark */}
          <Link
            href="/"
            aria-label="WebVanta Technologies — home"
            className="shrink-0"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center justify-center rounded-xl"
            >
              <Image
                src={logo}
                alt="WebVanta Technologies"
                width={44}
                height={44}
                priority
                className="h-10 w-10 object-contain lg:h-11 lg:w-11"
              />
            </motion.span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            <li>
              <NavLink href="/" label="Home" active={isActive("/")} />
            </li>

            {/* Services — dropdown */}
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setIsServicesOpen(false);
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setIsServicesOpen(true);
                  }
                }}
                className={`group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium tracking-[-0.01em] transition-colors ${
                  isServicesActive || isServicesOpen
                    ? "text-[#017EF3]"
                    : "text-[#021759]/75 hover:text-[#021759]"
                }`}
              >
                Services
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {(isServicesActive || isServicesOpen) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-[3px] left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#017EF3] to-[#02B5F6]"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    role="menu"
                    aria-label="Services"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 mt-4 w-[680px] max-w-[90vw] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-900/[0.06] bg-white shadow-[0_30px_70px_-20px_rgba(2,23,89,0.3)]"
                  >
                    <div className="grid grid-cols-[1fr_240px]">
                      {/* Service list */}
                      <div className="p-3">
                        {SERVICES.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              role="menuitem"
                              className="group/item relative flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F7FAFF]"
                            >
                              <span className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#017EF3] to-[#02B5F6] transition-all duration-200 group-hover/item:h-[70%]" />
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F7FAFF] text-[#024ABF] transition-colors group-hover/item:bg-[#017EF3] group-hover/item:text-white">
                                <Icon className="h-[18px] w-[18px]" />
                              </span>
                              <span>
                                <span className="block text-[14px] font-semibold tracking-[-0.01em] text-[#021759]">
                                  {service.title}
                                </span>
                                <span className="mt-0.5 block text-[12.5px] leading-snug text-slate-500">
                                  {service.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Highlight sidebar */}
                      <div className="relative flex flex-col justify-between overflow-hidden bg-[#021759] p-6">
                        <CircuitTrace />
                        <div className="relative">
                          <span className="block text-[15px] font-bold leading-snug text-white">
                            Not sure where to start?
                          </span>
                          <span className="mt-2 block text-[13px] leading-relaxed text-white/65">
                            Tell us your goal and we&apos;ll map the right
                            services to it.
                          </span>
                        </div>
                        <Link
                          href="/services"
                          role="menuitem"
                          className="relative mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#02B5F6] transition-colors hover:text-white"
                        >
                          View all services
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {NAV_ITEMS.slice(1).map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  active={isActive(item.href)}
                />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/get-started">
              <motion.span
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#017EF3] to-[#024ABF] px-5 py-2.5 text-[14.5px] font-semibold tracking-[-0.01em] text-white shadow-[0_14px_30px_-12px_rgba(1,126,243,0.65)] transition-shadow hover:shadow-[0_16px_34px_-10px_rgba(1,126,243,0.75)]"
              >
                Get Started
                <motion.span
                  aria-hidden="true"
                  variants={{ hover: { x: 3 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#021759] lg:hidden"
          >
            <span className="relative block h-[14px] w-5">
              <span
                className={`absolute left-0 top-0 h-[1.6px] w-5 bg-current transition-transform duration-300 ${
                  isMobileOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.6px] w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  isMobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.6px] w-5 bg-current transition-transform duration-300 ${
                  isMobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-900/[0.06] bg-white lg:hidden"
          >
            <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto px-6 py-4">
              <ul className="flex flex-col">
                <MobileLink href="/" label="Home" active={isActive("/")} />

                <li className="border-b border-slate-900/[0.05] py-1">
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen((v) => !v)}
                    aria-expanded={isMobileServicesOpen}
                    aria-controls="mobile-services"
                    className={`flex w-full items-center justify-between py-3 text-[15px] font-medium ${
                      isServicesActive ? "text-[#017EF3]" : "text-[#021759]"
                    }`}
                  >
                    Services
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        id="mobile-services"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pb-3 pl-1">
                          {SERVICES.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-[#F7FAFF]"
                              >
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7FAFF] text-[#024ABF]">
                                  <Icon className="h-4 w-4" />
                                </span>
                                <span>
                                  <span className="block text-[13.5px] font-semibold text-[#021759]">
                                    {service.title}
                                  </span>
                                  <span className="mt-0.5 block text-[12px] leading-snug text-slate-500">
                                    {service.description}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="relative mb-3 overflow-hidden rounded-xl bg-[#021759] px-4 py-3">
                          <CircuitTrace />
                          <div className="relative flex items-center justify-between">
                            <span className="text-[13px] font-medium text-white/90">
                              Not sure where to start?
                            </span>
                            <Link
                              href="/services"
                              className="text-[13px] font-semibold text-[#02B5F6]"
                            >
                              View all →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {NAV_ITEMS.slice(1).map((item) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    active={isActive(item.href)}
                  />
                ))}
              </ul>

              <Link href="/get-started" className="mt-4 block">
                <span className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#017EF3] to-[#024ABF] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(1,126,243,0.7)]">
                  Get Started
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Small subcomponents                                                       */
/* -------------------------------------------------------------------------- */

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-2 text-[15px] font-medium tracking-[-0.01em] transition-colors ${
        active ? "text-[#017EF3]" : "text-[#021759]/75 hover:text-[#021759]"
      }`}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-[3px] left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#017EF3] to-[#02B5F6]"
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
      )}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <li className="border-b border-slate-900/[0.05]">
      <Link
        href={href}
        className={`block py-3 text-[15px] font-medium ${active ? "text-[#017EF3]" : "text-[#021759]"}`}
      >
        {label}
      </Link>
    </li>
  );
}
