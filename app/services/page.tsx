import type { Metadata } from "next";
import Hero from "../components/Hero";
import ServicesHero from "./ServiceHeroPage";


export const metadata: Metadata = {
  title:
    "Digital Services | Web Development, SEO & Digital Marketing | WebVanta",
  description:
    "Explore WebVanta Technologies' digital services including web development, custom web applications, SEO, digital marketing, business growth, automation, and technology solutions.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Digital Services | Web Development, SEO & Digital Marketing | WebVanta",
    description:
      "Explore WebVanta Technologies' digital services including web development, custom web applications, SEO, digital marketing, business growth, automation, and technology solutions.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      
     <ServicesHero/>

      
    </>
  );
}
