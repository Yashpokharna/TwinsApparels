"use client";
import Community from "@/components/Community";
import CoreFeatures from "@/components/About";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import QualityFeatures from "@/components/Products";
import Services from "@/components/Machinery";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import About from "@/components/About";
import Machinery from "@/components/Machinery";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <About/>
      <Features />
      <Machinery/>
      <Products/>
      <Work />
      <Community />
      <Team />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Subscribe /> */}
    </div>
  );
}
