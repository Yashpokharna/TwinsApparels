"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MachineCard = ({ name, count, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.05,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="relative p-6 overflow-hidden transition-all duration-300 bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:border-rose-300 hover:-translate-y-1 group"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 group-hover:opacity-100 rounded-2xl" />
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 transition-all duration-300 rounded-bl-full bg-gradient-to-br from-rose-500/5 to-transparent group-hover:from-rose-500/10" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="mb-2 text-base font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-rose-600">
            {name}
          </h4>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="font-medium">Operational</span>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <div className="relative flex items-center justify-center transition-all duration-300 shadow-lg w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl group-hover:shadow-rose-500/40 group-hover:scale-105">
            <span className="text-xl font-black text-white">{count}</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl" />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-transparent via-rose-500/30 to-transparent group-hover:opacity-100" />
    </div>
  );
};

const Machinery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);

  const allMachines = [
    { name: "Single Needle", count: "50" },
    { name: "Edge Cutter", count: "2" },
    { name: "Tandom", count: "6" },
    { name: "5 Thread Overlock", count: "8" },
    { name: "Bottom Hemming Blind Stitch", count: "2" },
    { name: "Loop Blind", count: "1" },
    { name: "Loop Kansai", count: "1" },
    { name: "Waistband Kansai", count: "1" },
    { name: "Bartack", count: "2" },
    { name: "Button Attachment", count: "1" },
    { name: "Eyelet", count: "1" },
    { name: "Snap Button (Kaaj)", count: "1" },
    { name: "Auto Pocket Weld (APW)", count: "1" },
    { name: "Pressing Table", count: "1" },
    { name: "Seam Buster", count: "1" },
    { name: "Fusing Machine", count: "1" },
    { name: "Cutting Machine", count: "1" },
    { name: "Boiler", count: "1" }
  ];

  const totalMachines = 82;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
    .fromTo(headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(statsRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
      "-=0.3"
    );
  }, []);

  return (
    <section ref={sectionRef} className="container relative px-5 py-16 mx-auto md:px-16" id="Machinery">
      
      {/* Subtle background decoration */}
      <div className="absolute right-0 rounded-full top-20 w-72 h-72 bg-gradient-to-br from-rose-100/30 to-pink-100/30 blur-3xl -z-10" />
      <div className="absolute left-0 rounded-full bottom-20 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-rose-100/30 blur-3xl -z-10" />

      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-12 text-center">
        <span ref={titleRef} className="text-sm font-semibold tracking-wider uppercase service-name text-rose-600">
          OUR MACHINES
        </span>
        <h2 ref={headingRef} className="max-w-3xl mx-auto text-3xl font-bold text-gray-800 md:text-5xl">
          Advanced machinery ensuring garment precision
        </h2>
      </div>

      {/* Stats Card */}
      <div ref={statsRef} className="flex justify-center mb-14">
        <div className="relative group">
          {/* Subtle glow */}
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-rose-300/20 to-pink-300/20 rounded-2xl blur-xl group-hover:opacity-100" />
          
          <div className="relative inline-flex items-center gap-6 px-10 py-6 transition-all duration-300 bg-white border-2 border-gray-200 shadow-lg rounded-2xl hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 shadow-md bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                {totalMachines}
              </div>
              <div className="mt-1 text-sm font-bold tracking-wide text-gray-600 uppercase">
                Total Machines
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute w-3 h-3 border-t-2 border-l-2 rounded-tl top-2 left-2 border-rose-300" />
            <div className="absolute w-3 h-3 border-b-2 border-r-2 border-pink-300 rounded-br bottom-2 right-2" />
          </div>
        </div>
      </div>

      {/* Machine Cards Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allMachines.map((machine, index) => (
            <MachineCard
              key={index}
              name={machine.name}
              count={machine.count}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom feature bar */}
      <div className="flex justify-center mt-14">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500" />
            <span className="font-semibold">Quality Assured</span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500" />
            <span className="font-semibold">ISO Certified</span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500" />
            <span className="font-semibold">Expert Operators</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Machinery;