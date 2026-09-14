"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import nextGen from "../../public/images/Nextgen.png";
import Rajniti from "../../public/images/Rajnitik.png";
import Rechabcare from "../../public/images/Rechabcare.png";

/* ============================================================================
   DESIGN TOKENS — kept in sync with the CTA section
============================================================================ */

const COLOR = {
  ink: "#021759",
  inkMuted: "rgba(2,23,89,0.65)",
  inkFaint: "rgba(2,23,89,0.12)",
  accent: "#017EF3",
  accentLight: "#02B5F6",
  page: "#F7FAFF",
} as const;

/* ============================================================================
   CLIENT LOGOS
   Real client marks. Add more entries here as new clients come on board —
   the marquee scales to however many logos are in this array.
============================================================================ */

interface ClientLogo {
  id: string;
  name: string;
  src: StaticImageData;
}

const LOGOS: ClientLogo[] = [
  { id: "nextgen", name: "NextGen Primeway Solutions LLP", src: nextGen },
  { id: "rajnitik", name: "Rajnitik Akhada", src: Rajniti },
  { id: "rechabcare", name: "Rechabcare", src: Rechabcare },
];

/* ============================================================================
   ANIMATION VARIANTS
============================================================================ */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ============================================================================
   SINGLE LOGO MARK
============================================================================ */

function LogoMark({ name, src }: { name: string; src: StaticImageData }) {
  return (
    <div className="flex shrink-0 items-center px-10 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0">
      <Image
        src={src}
        alt={name}
        title={name}
        height={56}
        className="h-14 w-auto object-contain"
        priority={false}
      />
    </div>
  );
}

/* ============================================================================
   AUTO-SCROLLING MARQUEE
============================================================================ */

function LogoMarquee({ reducedMotion }: { reducedMotion: boolean }) {
  const rawId = useId();
  const animationName = `marquee-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  // Duplicate the set so the loop is seamless — the track scrolls exactly
  // one copy's width before snapping back. With only a few logos, repeat
  // a few times so the strip never runs dry on wide screens.
  const track = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];
  const setLength = LOGOS.length;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: `linear-gradient(to right, transparent, black 8%, black 92%, transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black 8%, black 92%, transparent)`,
      }}
    >
      <style>{`
        @keyframes ${animationName} {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="flex w-max items-center py-2"
        role="list"
        aria-label="Clients WebVanta has worked with"
        style={{
          animation: reducedMotion
            ? "none"
            : `${animationName} 24s linear infinite`,
        }}
        onMouseEnter={(e) => {
          if (!reducedMotion)
            e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          if (!reducedMotion)
            e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {track.map((logo, index) => (
          <div
            role="listitem"
            key={`${logo.id}-${index}`}
            aria-hidden={index >= setLength * 2}
          >
            <LogoMark name={logo.name} src={logo.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================================
   MAIN SECTION
============================================================================ */

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="trusted-heading"
      className="relative overflow-hidden bg-[#F7FAFF] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.h2
          id="trusted-heading"
          variants={itemVariants}
          className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#021759] sm:text-4xl"
        >
          Trusted by businesses
          <br />
          building for tomorrow
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-xl text-base leading-7 text-[#021759]/65"
        >
          We work with businesses to create digital experiences that deliver
          meaningful results and long-term growth.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 h-px w-24"
          style={{
            background: `linear-gradient(to right, transparent, ${COLOR.inkFaint}, transparent)`,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mt-12"
      >
        <LogoMarquee reducedMotion={reducedMotion} />
      </motion.div>
    </section>
  );
}
