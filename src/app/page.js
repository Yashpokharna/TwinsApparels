import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Lookbook from "@/components/Lookbook";
import Machinery from "@/components/Machinery";
import Community from "@/components/Community";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <About />
      <Products />
      <Process />
      <Lookbook />
      <Machinery />
      <Community />
      <Team />
      <Contact />
    </>
  );
}
