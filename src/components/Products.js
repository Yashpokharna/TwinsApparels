"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const QualityFeature = ({ imgSrc, title, desc, index }) => {
  const featureRef = useRef(null);

  useEffect(() => {
    const feature = featureRef.current;

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(feature, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(feature, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    feature.addEventListener('mouseenter', handleMouseEnter);
    feature.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      feature.removeEventListener('mouseenter', handleMouseEnter);
      feature.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  return (
    <div ref={featureRef} className="flex items-start gap-1 cursor-pointer lg:flex-row sm:flex-col sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="mb-4 text-lg font-semibold md:text-xl">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Products = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const heading = headingRef.current;
    const grid = gridRef.current;

    // Header animation timeline
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 120%",
        toggleActions: "play none none none"
      }
    });

    // Animate header elements
    headerTl.fromTo(title, 
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    )
    .fromTo(heading, 
      { opacity: 0, y: 40, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    // Grid container animation with all cards
    gsap.fromTo(grid.children,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9,
        rotation: 2
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 120%",
          toggleActions: "play none none none"
        }
      }
    );

    // Floating animation for the entire section
    gsap.to(section, {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

  }, []);

  return (
    <section ref={sectionRef} className="container px-5 mx-auto md:px-16" id="Products">
      <span ref={titleRef} className="text-center service-name ">OUR PRODUCTS</span>
      <h2 ref={headingRef} className="text-center title ">Style. Comfort. Quality. Always.</h2>

      <div ref={gridRef} className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Formal Wear"
          desc="• Men's Formal Trouser • Women Formal Trouser • Men's Formal Shirts • Men & Women Blazer • Uniform Blazer."
          index={0}
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Casual Wear"
          desc="• Men's Cotton Trouser • Chinos • Men's Five Pocket • Men's Flexi Waist Trouser • Draw Cord Trouser • Men's Casual Shirts • Shorts for Men & Women"
          index={1}
        />
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Uniform & Workwear"
          desc="• Uniform/Cargo Pants/Work Wear • Uniform Blazer"
          index={2}
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Stretch & Comfort Wear"
          desc="• Men's Flexi Waist Trouser • Draw Cord Trouser • Shorts for Men & Women"
          index={3}
        />
      </div>
    </section>
  );
};

export default Products;