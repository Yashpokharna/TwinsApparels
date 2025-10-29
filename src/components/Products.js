"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProductCard = ({ imgSrc, title, items, index, isActive, onClick }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(card,
      { opacity: 0, y: 60, rotationY: -15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
        isActive ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        index === 0 ? 'from-blue-500 to-blue-700' :
        index === 1 ? 'from-rose-500 to-rose-700' :
        index === 2 ? 'from-purple-500 to-purple-700' :
        'from-emerald-500 to-emerald-700'
      } transition-all duration-500`} />
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 transition-all duration-300 bg-black/0 group-hover:bg-black/10" />

      {/* Content */}
      <div className={`relative z-10 p-6 md:p-8 h-full flex flex-col ${
        isActive ? 'justify-between' : 'justify-center'
      }`}>
        {/* Icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center justify-center w-16 h-16 transition-transform duration-300 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110">
            <Image src={imgSrc} width={isActive ? 50 : 40} height={isActive ? 50 : 40} alt={title} className="brightness-0 invert" />
          </div>
          {isActive && (
            <div className="hidden lg:block">
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-4 transition-all duration-300 ${
          isActive ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'
        }`}>
          {title}
        </h3>

        {/* Items list */}
        <ul className={`space-y-2 text-white/90 transition-all duration-300 ${
          isActive ? 'text-base md:text-lg' : 'text-sm md:text-base'
        }`}>
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Hover indicator */}
        {!isActive && (
          <div className="flex items-center gap-2 mt-6 text-sm transition-colors text-white/80 group-hover:text-white">
            <span>Click to expand</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 transition-transform duration-700 translate-x-16 -translate-y-16 rounded-full bg-white/5 group-hover:scale-150" />
      <div className="absolute bottom-0 left-0 w-24 h-24 transition-transform duration-700 -translate-x-12 translate-y-12 rounded-full bg-white/5 group-hover:scale-150" />
    </div>
  );
};

const Products = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const products = [
    {
      imgSrc: "/features/2.svg",
      title: "Formal Wear",
      items: [
        "Men's Formal Trouser",
        "Women Formal Trouser",
        "Men's Formal Shirts"
      ]
    },
    {
      imgSrc: "/features/3.svg",
      title: "Casual Wear",
      items: [
        "Men's Cotton Trouser",
        "Chinos",
        "Men's Five Pocket",
        "Men's Flexi Waist Trouser",
        "Draw Cord Trouser",
        "Men's Casual Shirts",
        "Shorts for Men & Women"
      ]
    },
    {
      imgSrc: "/features/1.svg",
      title: "Uniform & Workwear",
      items: [
        "Uniform/Cargo Pants/Work Wear"
      ]
    },
    {
      imgSrc: "/features/4.svg",
      title: "Stretch & Comfort Wear",
      items: [
        "Men's Flexi Waist Trouser",
        "Draw Cord Trouser",
        "Shorts for Men & Women"
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(title,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" }
    )
    .fromTo(heading,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(subtitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Parallax effect for section
    gsap.to(section, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="container px-5 py-16 mx-auto md:px-16" id="Products">
      <div className="mb-12 text-center md:mb-16">
        <span ref={titleRef} className="text-sm font-semibold tracking-wider uppercase service-name text-rose-600">
          OUR PRODUCTS
        </span>
        <h2 ref={headingRef} className="mt-4 mb-4 text-3xl font-bold text-gray-800 md:text-5xl">
          Style. Comfort. Quality. Always.
        </h2>
        <p ref={subtitleRef} className="max-w-2xl mx-auto text-lg text-gray-600">
          Explore our diverse range of premium textile products
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:gap-4 max-w-7xl">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            index={index}
            isActive={activeCard === index}
            onClick={() => setActiveCard(activeCard === index ? null : index)}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mt-16 md:grid-cols-4">
        <div className="p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">4</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
        <div className="p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">15+</div>
          <div className="text-sm text-gray-600">Product Types</div>
        </div>
        <div className="p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">100%</div>
          <div className="text-sm text-gray-600">Quality</div>
        </div>
        <div className="p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">24/7</div>
          <div className="text-sm text-gray-600">Support</div>
        </div>
      </div>
    </section>
  );
};

export default Products;