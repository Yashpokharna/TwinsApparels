"use client";
import Image from "next/image";
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
  const imageRef = useRef(null);
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
      )
      // Animate image
      .fromTo(imageRef.current,
        { opacity: 0, x: 50, rotationY: -10 },
        { opacity: 1, x: 0, rotationY: 0, duration: 1, ease: "power2.out" },
        "-=1"
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

      // Parallax effect for image
      gsap.to(imageRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
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
      className="relative px-6 py-20 overflow-hidden md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-rose-50"
    >
      {/* Decorative Background Elements */}
      <div ref={decorativeRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full w-96 h-96 bg-rose-200 opacity-20 blur-3xl -top-20 -left-20"></div>
        <div className="absolute bg-blue-200 rounded-full w-80 h-80 opacity-20 blur-3xl top-1/3 -right-20"></div>
        <div className="absolute bg-purple-200 rounded-full w-72 h-72 opacity-20 blur-3xl -bottom-20 left-1/4"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
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
              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
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

          {/* Image Section */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              {/* Image with overlay effect */}
              <div className="relative w-full h-full">
                <Image
                  src="/hero.png"
                  alt="Twins Apparels Manufacturing"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute p-4 shadow-xl top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">Quality</div>
                    <div className="text-lg font-bold text-gray-800">Certified</div>
                  </div>
                </div>
              </div>

              {/* Bottom Info Card */}
              <div className="absolute p-6 transition-transform duration-500 transform translate-y-4 shadow-xl bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl group-hover:translate-y-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-600">Manufacturing Excellence</div>
                    <div className="mt-1 text-2xl font-bold text-gray-800">Premium Quality</div>
                  </div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-4 border-rose-200 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;