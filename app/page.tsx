import CTA from "./components/Cta";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import TrustedBy from "./components/Trustedby";
import WhyWebVanta from "./components/Whywebvanta";

export default function Home() {
  return (
    <main >
      <Hero />
      <Services />
      <WhyWebVanta />
      <Process />
      <TrustedBy/>
      <FAQ/>
      <CTA/>
    </main>
  );
}
