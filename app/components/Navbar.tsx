"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Manrope } from "next/font/google";
import logo from "@/public/images/logoimages.png";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
});

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

type NavItem = {
  label: string;
  href: string;
};

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

/* -------------------------------------------------------------------------- */
/* NAVIGATION                                                                  */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

/* -------------------------------------------------------------------------- */
/* ICONS                                                                       */
/* -------------------------------------------------------------------------- */

function IconSEO({ className }: { className?: string }) {
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
        strokeWidth="1.7"
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPPC({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 6.5h15v11h-15z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 14.5 10.5 12l2 2 3.5-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWebDev({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.5 8 5 12l3.5 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8 19 12l-3.5 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6.5 11 17.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWebApp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5.5"
        width="16"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="7" cy="7.5" r="0.6" fill="currentColor" />
      <circle cx="9" cy="7.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function IconMobile({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="7"
        y="3.5"
        width="10"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M10 6h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconMarketing({ className }: { className?: string }) {
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
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.2a4 4 0 0 1 0 5.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.3 7a7.2 7.2 0 0 1 0 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGrowth({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 16.5 9.5 11l3.3 3.3L20 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 7h5.5v5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAutomation({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.7" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 4.5v2M12 17.5v2M19.5 12h-2M6.5 12h-2M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4M17.5 17.5l-1.4-1.4M7.9 7.9 6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHealthcare({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 20s-7-4.5-7-10.2A4 4 0 0 1 12 7a4 4 0 0 1 7 2.8C19 15.5 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.5 11.5h2l1-2.2 1.5 4 1-1.8h1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRealEstate({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="m4 11 8-7 8 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10.5V20h12v-9.5M10 20v-5h4v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEducation({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="m3.5 9 8.5-4 8.5 4-8.5 4-8.5-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11v4.5c2.7 2.2 8.3 2.2 11 0V11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20.5 9v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTravel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="m4 15 16-6-4 10-4-5-5 1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m12 14-3-9 3 2 3-1-3 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBeauty({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 4.5c1.2 2 1.8 3.2 1.8 4.7A3.2 3.2 0 1 1 3.5 9.2C3.5 7.7 4.6 6.1 8 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 19.5c-1.2-2-1.8-3.2-1.8-4.7a3.2 3.2 0 1 1 6.3 0c0 1.5-1.1 3.1-4.5 4.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 12h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* MENUS                                                                      */
/* -------------------------------------------------------------------------- */

const SERVICES: MenuItem[] = [
  {
    title: "SEO",
    description: "Rank higher and win qualified organic traffic.",
    href: "/services#seo",
    icon: IconSEO,
  },
  {
    title: "Pay Per Click",
    description: "Performance campaigns built around measurable growth.",
    href: "/services#ppc",
    icon: IconPPC,
  },
  {
    title: "Web Development",
    description: "Fast, accessible websites designed to convert.",
    href: "/services#web-development",
    icon: IconWebDev,
  },
  {
    title: "Web Application Development",
    description: "Custom platforms and portals built to scale.",
    href: "/services#web-application-development",
    icon: IconWebApp,
  },
  {
    title: "Mobile App Development",
    description: "Modern mobile experiences for iOS and Android.",
    href: "/services#mobile-app-development",
    icon: IconMobile,
  },
  {
    title: "Digital Marketing",
    description: "Full-funnel campaigns that create demand.",
    href: "/services#digital-marketing",
    icon: IconMarketing,
  },
  {
    title: "Business Growth",
    description: "Strategy and systems designed for sustainable growth.",
    href: "/services#business-growth",
    icon: IconGrowth,
  },
  {
    title: "Automation & Technology",
    description: "Streamline operations with intelligent systems.",
    href: "/services#automation-technology",
    icon: IconAutomation,
  },
];

const INDUSTRIES: MenuItem[] = [
  {
    title: "Healthcare",
    description: "Digital solutions for modern healthcare businesses.",
    href: "/industries/healthcare",
    icon: IconHealthcare,
  },
  {
    title: "Real Estate",
    description: "Technology and growth solutions for property businesses.",
    href: "/industries/real-estate",
    icon: IconRealEstate,
  },
  {
    title: "Education",
    description: "Digital platforms that improve learning experiences.",
    href: "/industries/education",
    icon: IconEducation,
  },
  {
    title: "Tours & Travel",
    description: "Digital experiences that turn visitors into travelers.",
    href: "/industries/tours-travel",
    icon: IconTravel,
  },
  {
    title: "Beauty & Salon",
    description: "Digital tools that help beauty brands grow.",
    href: "/industries/beauty-salon",
    icon: IconBeauty,
  },
];

/* -------------------------------------------------------------------------- */
/* DECORATIVE CIRCUIT                                                          */
/* -------------------------------------------------------------------------- */

function CircuitTrace() {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 opacity-20"
      aria-hidden="true"
    >
      <path d="M15 45h70v42h70v55h70" stroke="#02B5F6" strokeWidth="1.4" />
      <path d="M38 15v58h54v76h92" stroke="#017EF3" strokeWidth="1.4" />
      <path d="M25 190h50v-35h75" stroke="#02B5F6" strokeWidth="1.4" />

      <circle cx="15" cy="45" r="3" fill="#02B5F6" />
      <circle cx="85" cy="87" r="3" fill="#02B5F6" />
      <circle cx="155" cy="142" r="3" fill="#017EF3" />
      <circle cx="38" cy="15" r="3" fill="#017EF3" />
      <circle cx="92" cy="73" r="3" fill="#02B5F6" />
      <circle cx="25" cy="190" r="3" fill="#02B5F6" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* NAVBAR                                                                     */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "industries" | null>(
    null,
  );
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<
    "services" | "industries" | null
  >(null);

  const servicesRef = useRef<HTMLLIElement | null>(null);
  const industriesRef = useRef<HTMLLIElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ------------------------------- SCROLL -------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ---------------------------- ROUTE CHANGE ------------------------------ */

  useEffect(() => {
    setOpenMenu(null);
    setIsMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  /* --------------------------- OUTSIDE CLICK ------------------------------ */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) return;

      const clickedServices = servicesRef.current?.contains(target);
      const clickedIndustries = industriesRef.current?.contains(target);

      if (!clickedServices && !clickedIndustries) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* ---------------------------- ESCAPE KEY -------------------------------- */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setIsMobileOpen(false);
        setMobileSection(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* ---------------------------- MOBILE BODY ------------------------------- */

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  /* --------------------------- CLEAN TIMER -------------------------------- */

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  /* ---------------------------- HELPERS ----------------------------------- */

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isServicesActive = pathname.startsWith("/services");
  const isIndustriesActive = pathname.startsWith("/industries");

  const openDropdown = (menu: "services" | "industries") => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setOpenMenu(menu);
  };

  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimer.current = null;
    }, 140);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <header className={`${manrope.className} fixed inset-x-0 top-0 z-[100]`}>
      {/* ------------------------------------------------------------------ */}
      {/* TOP BRAND LINE                                                     */}
      {/* ------------------------------------------------------------------ */}

      <div className="h-[2px] w-full bg-gradient-to-r from-[#021759] via-[#017EF3] to-[#02B5F6]" />

      {/* ------------------------------------------------------------------ */}
      {/* MAIN NAVBAR                                                        */}
      {/* ------------------------------------------------------------------ */}

      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#021759]/[0.07] bg-white/90 shadow-[0_14px_40px_-18px_rgba(2,23,89,0.30)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-10 xl:px-12 ${
            isScrolled ? "h-[70px]" : "h-[82px]"
          }`}
        >
          {/* ---------------------------------------------------------------- */}
          {/* LOGO                                                             */}
          {/* ---------------------------------------------------------------- */}

          <Link
            href="/"
            aria-label="WebVanta Technologies — Home"
            onClick={closeMobileMenu}
            className="group relative shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 24,
              }}
              className="relative flex items-center"
            >
              <Image
                src={logo}
                alt="WebVanta Technologies"
                width={48}
                height={48}
                priority
                className="h-10 w-10 object-contain sm:h-11 sm:w-11 lg:h-12 lg:w-12"
              />
            </motion.div>
          </Link>

          {/* ---------------------------------------------------------------- */}
          {/* DESKTOP NAVIGATION                                               */}
          {/* ---------------------------------------------------------------- */}

          <div className="hidden items-center lg:flex">
            <ul className="flex items-center gap-0.5">
              {/* HOME */}

              <li>
                <DesktopNavLink href="/" label="Home" active={isActive("/")} />
              </li>

              {/* SERVICES */}

              <li
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => openDropdown("services")}
                onMouseLeave={scheduleClose}
              >
                <DropdownTrigger
                  label="Services"
                  active={isServicesActive}
                  open={openMenu === "services"}
                  onClick={() =>
                    setOpenMenu((value) =>
                      value === "services" ? null : "services",
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setOpenMenu("services");
                    }
                  }}
                />

                <AnimatePresence>
                  {openMenu === "services" && (
                    <MegaMenu
                      items={SERVICES}
                      type="services"
                      onMouseEnter={() => openDropdown("services")}
                      onMouseLeave={scheduleClose}
                    />
                  )}
                </AnimatePresence>
              </li>

              {/* INDUSTRIES */}

              <li
                ref={industriesRef}
                className="relative"
                onMouseEnter={() => openDropdown("industries")}
                onMouseLeave={scheduleClose}
              >
                <DropdownTrigger
                  label="Industries"
                  active={isIndustriesActive}
                  open={openMenu === "industries"}
                  onClick={() =>
                    setOpenMenu((value) =>
                      value === "industries" ? null : "industries",
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setOpenMenu("industries");
                    }
                  }}
                />

                <AnimatePresence>
                  {openMenu === "industries" && (
                    <MegaMenu
                      items={INDUSTRIES}
                      type="industries"
                      onMouseEnter={() => openDropdown("industries")}
                      onMouseLeave={scheduleClose}
                    />
                  )}
                </AnimatePresence>
              </li>

              {/* OTHER NAV ITEMS */}

              {NAV_ITEMS.slice(1).map((item) => (
                <li key={item.href}>
                  <DesktopNavLink
                    href={item.href}
                    label={item.label}
                    active={isActive(item.href)}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* DESKTOP CTA                                                      */}
          {/* ---------------------------------------------------------------- */}

          <div className="hidden lg:block">
            <Link href="/get-started">
              <motion.span
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#017EF3] to-[#024ABF] px-5 py-2.5 text-[14px] font-semibold tracking-[-0.01em] text-white shadow-[0_14px_30px_-13px_rgba(1,126,243,0.65)] transition-all duration-300 hover:shadow-[0_18px_38px_-12px_rgba(1,126,243,0.78)]"
              >
                <span>Get Started</span>

                <motion.span
                  aria-hidden="true"
                  variants={{
                    hover: {
                      x: 3,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 22,
                  }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* MOBILE MENU BUTTON                                               */}
          {/* ---------------------------------------------------------------- */}

          <button
            type="button"
            onClick={() => {
              setIsMobileOpen((value) => !value);
              setOpenMenu(null);
            }}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#021759] transition-colors hover:bg-[#F4F8FF] lg:hidden"
          >
            <span className="relative block h-[16px] w-[21px]">
              <span
                className={`absolute left-0 top-0 h-[1.8px] w-[21px] rounded-full bg-current transition-all duration-300 ${
                  isMobileOpen ? "translate-y-[7px] rotate-45" : "translate-y-0"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-[1.8px] w-[21px] -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                  isMobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute bottom-0 left-0 h-[1.8px] w-[21px] rounded-full bg-current transition-all duration-300 ${
                  isMobileOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : "translate-y-0"
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* MOBILE MENU                                                          */}
      {/* -------------------------------------------------------------------- */}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-b border-[#021759]/[0.07] bg-white shadow-[0_20px_40px_-24px_rgba(2,23,89,0.3)] lg:hidden"
          >
            <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto px-5 py-4 sm:px-8">
              <ul className="flex flex-col">
                {/* HOME */}

                <MobileNavLink
                  href="/"
                  label="Home"
                  active={isActive("/")}
                  onClick={closeMobileMenu}
                />

                {/* SERVICES */}

                <MobileDropdown
                  label="Services"
                  active={isServicesActive}
                  open={mobileSection === "services"}
                  onClick={() =>
                    setMobileSection((value) =>
                      value === "services" ? null : "services",
                    )
                  }
                >
                  {SERVICES.map((item) => (
                    <MobileMenuItem
                      key={item.href}
                      item={item}
                      onClick={closeMobileMenu}
                    />
                  ))}

                  <MobileViewAll
                    href="/services"
                    label="View all services"
                    onClick={closeMobileMenu}
                  />
                </MobileDropdown>

                {/* INDUSTRIES */}

                <MobileDropdown
                  label="Industries"
                  active={isIndustriesActive}
                  open={mobileSection === "industries"}
                  onClick={() =>
                    setMobileSection((value) =>
                      value === "industries" ? null : "industries",
                    )
                  }
                >
                  {INDUSTRIES.map((item) => (
                    <MobileMenuItem
                      key={item.href}
                      item={item}
                      onClick={closeMobileMenu}
                    />
                  ))}

                  <MobileViewAll
                    href="/industries"
                    label="View all industries"
                    onClick={closeMobileMenu}
                  />
                </MobileDropdown>

                {/* OTHER LINKS */}

                {NAV_ITEMS.slice(1).map((item) => (
                  <MobileNavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    active={isActive(item.href)}
                    onClick={closeMobileMenu}
                  />
                ))}
              </ul>

              {/* MOBILE CTA */}

              <Link
                href="/get-started"
                onClick={closeMobileMenu}
                className="mt-5 block"
              >
                <motion.span
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#017EF3] to-[#024ABF] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(1,126,243,0.7)]"
                >
                  Get Started
                  <span aria-hidden="true">→</span>
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ========================================================================== */
/* DESKTOP NAV LINK                                                           */
/* ========================================================================== */

function DesktopNavLink({
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
      className={`group relative flex items-center rounded-full px-4 py-2.5 text-[14.5px] font-semibold tracking-[-0.015em] transition-colors duration-200 ${
        active ? "text-[#017EF3]" : "text-[#021759]/75 hover:text-[#021759]"
      }`}
    >
      {label}

      <span
        className={`absolute bottom-[1px] left-4 right-4 h-[2px] origin-center rounded-full bg-gradient-to-r from-[#017EF3] to-[#02B5F6] transition-all duration-300 ${
          active
            ? "scale-x-100 opacity-100"
            : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}

/* ========================================================================== */
/* DROPDOWN TRIGGER                                                           */
/* ========================================================================== */

function DropdownTrigger({
  label,
  active,
  open,
  onClick,
  onKeyDown,
}: {
  label: string;
  active: boolean;
  open: boolean;
  onClick: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      type="button"
      aria-haspopup="true"
      aria-expanded={open}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`group relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14.5px] font-semibold tracking-[-0.015em] transition-colors duration-200 ${
        active || open
          ? "text-[#017EF3]"
          : "text-[#021759]/75 hover:text-[#021759]"
      }`}
    >
      {label}

      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={`h-3.5 w-3.5 transition-transform duration-200 ${
          open ? "rotate-180" : ""
        }`}
      >
        <path
          d="m6 9 6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className={`absolute bottom-[1px] left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#017EF3] to-[#02B5F6] transition-all duration-300 ${
          active || open
            ? "scale-x-100 opacity-100"
            : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

/* ========================================================================== */
/* MEGA MENU                                                                  */
/* ========================================================================== */

function MegaMenu({
  items,
  type,
  onMouseEnter,
  onMouseLeave,
}: {
  items: MenuItem[];
  type: "services" | "industries";
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const isServices = type === "services";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 10,
        scale: 0.98,
      }}
      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
      role="menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-1/2 top-full z-[110] mt-4 -translate-x-1/2 overflow-hidden rounded-[22px] border border-[#021759]/[0.07] bg-white shadow-[0_35px_90px_-28px_rgba(2,23,89,0.35)] ${
        isServices
          ? "w-[760px] max-w-[calc(100vw-40px)]"
          : "w-[650px] max-w-[calc(100vw-40px)]"
      }`}
    >
      <div
        className={`grid ${
          isServices ? "grid-cols-[1fr_255px]" : "grid-cols-[1fr_230px]"
        }`}
      >
        {/* LEFT */}

        <div className="p-3">
          <div className="mb-2 px-3 py-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#017EF3]">
              {isServices ? "What we do" : "Who we serve"}
            </p>

            <p className="mt-1 text-[12px] text-slate-500">
              {isServices
                ? "Technology and growth solutions built around your goals."
                : "Digital solutions tailored to your industry."}
            </p>
          </div>

          <div
            className={`grid ${
              isServices ? "grid-cols-2" : "grid-cols-1"
            } gap-1`}
          >
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="group relative flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-[#F5F9FF]"
                >
                  <span className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#017EF3] to-[#02B5F6] transition-all duration-200 group-hover:h-[65%]" />

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F4F8FF] text-[#024ABF] transition-all duration-200 group-hover:bg-[#017EF3] group-hover:text-white">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[13.5px] font-bold tracking-[-0.01em] text-[#021759]">
                      {item.title}
                    </span>

                    <span className="mt-0.5 block text-[11.5px] leading-[1.45] text-slate-500">
                      {item.description}
                    </span>
                  </span>

                  <span className="ml-auto mt-1 text-[13px] text-[#017EF3] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT FEATURE PANEL */}

        <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#021759] p-6">
          <CircuitTrace />

          <div className="relative z-10">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#02B5F6] ring-1 ring-white/10">
              {isServices ? (
                <IconAutomation className="h-5 w-5" />
              ) : (
                <IconGrowth className="h-5 w-5" />
              )}
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#02B5F6]">
              WebVanta Technologies
            </p>

            <h3 className="mt-2 max-w-[190px] text-[21px] font-extrabold leading-[1.15] tracking-[-0.04em] text-white">
              {isServices
                ? "Build. Automate. Grow."
                : "Solutions built for your industry."}
            </h3>

            <p className="mt-3 max-w-[205px] text-[12.5px] leading-relaxed text-white/60">
              {isServices
                ? "From digital presence to intelligent automation, we build technology that moves businesses forward."
                : "Combine technology, digital growth and automation to create a stronger digital business."}
            </p>
          </div>

          <Link
            href={isServices ? "/services" : "/industries"}
            className="group relative z-10 mt-8 inline-flex w-fit items-center gap-2 text-[13px] font-bold text-[#02B5F6] transition-colors hover:text-white"
          >
            {isServices ? "Explore all services" : "Explore all industries"}

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ========================================================================== */
/* MOBILE NAV LINK                                                            */
/* ========================================================================== */

function MobileNavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li className="border-b border-[#021759]/[0.06]">
      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center justify-between py-3.5 text-[15px] font-semibold ${
          active ? "text-[#017EF3]" : "text-[#021759]"
        }`}
      >
        <span>{label}</span>

        {active && <span className="h-1.5 w-1.5 rounded-full bg-[#02B5F6]" />}
      </Link>
    </li>
  );
}

/* ========================================================================== */
/* MOBILE DROPDOWN                                                            */
/* ========================================================================== */

function MobileDropdown({
  label,
  active,
  open,
  onClick,
  children,
}: {
  label: string;
  active: boolean;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <li className="border-b border-[#021759]/[0.06]">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className={`flex w-full items-center justify-between py-3.5 text-[15px] font-semibold ${
          active ? "text-[#017EF3]" : "text-[#021759]"
        }`}
      >
        <span>{label}</span>

        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full bg-[#F4F8FF] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ========================================================================== */
/* MOBILE MENU ITEM                                                           */
/* ========================================================================== */

function MobileMenuItem({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[#F5F9FF]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F4F8FF] text-[#024ABF]">
        <Icon className="h-[17px] w-[17px]" />
      </span>

      <span className="min-w-0">
        <span className="block text-[13.5px] font-bold text-[#021759]">
          {item.title}
        </span>

        <span className="mt-0.5 block text-[11.5px] leading-[1.45] text-slate-500">
          {item.description}
        </span>
      </span>

      <span className="ml-auto mt-1 text-[#017EF3] opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}

/* ========================================================================== */
/* MOBILE VIEW ALL                                                            */
/* ========================================================================== */

function MobileViewAll({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="mt-2 flex items-center justify-between rounded-xl bg-[#021759] px-4 py-3 text-[12.5px] font-semibold text-white"
    >
      <span>{label}</span>

      <span className="text-[#02B5F6]">→</span>
    </Link>
  );
}
