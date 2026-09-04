import type { Metadata } from "next";

import TechnologyGrowth from "@/app/components/TechnologyGrowth";
import WhoWeAre from "../components/WhoweAre";
import OurMission from "../components/OurMission";
import WhatWeDo from "../components/Whatwedo";
import WhyWebVanta from "../components/Whywebvanta";
import AboutHero from "../components/AboutHero";

export const metadata: Metadata = {
  title:
    "About WebVanta Technologies | Web Development & Digital Growth Company",
  description:
    "Learn about WebVanta Technologies, a digital technology company providing web development, web applications, SEO, digital marketing, automation, and business growth solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "About WebVanta Technologies | Web Development & Digital Growth Company",
    description:
      "Learn about WebVanta Technologies, a digital technology company providing web development, web applications, SEO, digital marketing, automation, and business growth solutions.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      
        <AboutHero />
        <WhoWeAre />
        <OurMission />
        <WhatWeDo/>
        <WhyWebVanta />
        <TechnologyGrowth />
        
    </>
  );
}
