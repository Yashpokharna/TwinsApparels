"use client";
import Community from "@/components/Community";
import HeroSection from "@/components/HeroSection";
import Team from "@/components/Team";
import Work from "@/components/Work";
import About from "@/components/About";
import Machinery from "@/components/Machinery";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <About/>
      {/* <Features /> */}
      <Products/>
      <Machinery/>
      <Work />
      <Community />
      <Team />
      <Contact/>
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Subscribe /> */}
    </div>
  );
}
