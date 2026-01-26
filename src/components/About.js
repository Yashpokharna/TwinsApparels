"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const statsContainerRef = useRef(null);
  const buttonRef = useRef(null);
  const decorativeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      // Animate title
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.5)" }
      )
      // Animate heading
      .fromTo(headingRef.current.children,
        { opacity: 0, y: 40, rotationX: -20 },
        { opacity: 1, y: 0, rotationX: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      // Animate paragraphs
      .fromTo([paragraph1Ref.current, paragraph2Ref.current],
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      )
      // Animate stats
      .fromTo(statsContainerRef.current.children,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.4"
      )
      // Animate button
      .fromTo(buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.3)" },
        "-=0.3"
      );

      // Decorative elements animation
      gsap.to(decorativeRef.current.children, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

      // Hover animation for stats
      statsContainerRef.current.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="About"
      ref={containerRef}
      className="relative px-6 py-20 overflow-hidden bg-white md:px-12 lg:px-20"
    >
      {/* Decorative Background Elements */}
      <div ref={decorativeRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full w-96 h-96 bg-rose-200 opacity-20 blur-3xl -top-20 -left-20"></div>
        <div className="absolute bg-blue-200 rounded-full w-80 h-80 opacity-20 blur-3xl top-1/3 -right-20"></div>
        <div className="absolute bg-purple-200 rounded-full w-72 h-72 opacity-20 blur-3xl -bottom-20 left-1/4"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Text Content */}
        <div className="space-y-8">
          {/* Title Badge */}
          <div ref={titleRef}>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-wider uppercase bg-white border-2 rounded-full shadow-md border-rose-600 text-rose-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <div ref={headingRef}>
            <h2 className="text-4xl font-bold leading-snug text-gray-900 md:text-5xl lg:text-6xl md:leading-snug lg:leading-snug">
              <span className="block">Crafting Quality,</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">
                Delivering Excellence
              </span>
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-6">
            <p ref={paragraph1Ref} className="pl-4 text-lg leading-relaxed text-gray-700 border-l-4 border-rose-600">
              At Twins Apparels, we transform fabric into fashion. With cutting-edge technology and skilled craftsmanship, we've been manufacturing premium ready-to-wear garments that our partners trust and customers love.
            </p>

            <p ref={paragraph2Ref} className="text-base leading-relaxed text-gray-600">
              Every stitch tells a story of precision. Every garment reflects our commitment to quality. We don't just meet standards—we set them.
            </p>
          </div>

          {/* Stats Cards */}
          <div ref={statsContainerRef} className="grid grid-cols-3 gap-4 pt-4">
            <div className="relative p-6 overflow-hidden text-white shadow-lg cursor-pointer stat-card bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 translate-x-10 -translate-y-10 bg-white rounded-full opacity-10"></div>
              <div className="relative">
                <div className="text-3xl font-bold">25K+</div>
                <div className="mt-2 text-sm text-rose-100">Garments/Month</div>
              </div>
            </div>

            <div className="relative p-6 overflow-hidden text-white shadow-lg cursor-pointer stat-card bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 translate-x-10 -translate-y-10 bg-white rounded-full opacity-10"></div>
              <div className="relative">
                <div className="text-3xl font-bold">110+</div>
                <div className="mt-2 text-sm text-blue-100">Skilled Employees</div>
              </div>
            </div>

            <div className="relative p-6 overflow-hidden text-white shadow-lg cursor-pointer stat-card bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 translate-x-10 -translate-y-10 bg-white rounded-full opacity-10"></div>
              <div className="relative">
                <div className="text-3xl font-bold">100+</div>
                <div className="mt-2 text-sm text-purple-100">Machinery</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div ref={buttonRef} className="pt-6">
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-xl group rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 hover:shadow-2xl hover:scale-105"
            >
              Discover Our Story
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;