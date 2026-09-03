import CTA from "./components/Cta";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyWebVanta from "./components/Whywebvanta";

export default function Home() {
  return (
    <main >
      <Hero />
      <Services />
      <WhyWebVanta />
      <Process />
      <CTA/>
    </main>
  );
}
