"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);

  const workData = [
    { num: "01", title: "Yarn Sourcing", desc: "Selecting premium quality yarn" },
    { num: "02", title: "Twisting", desc: "Strengthening fiber structure" },
    { num: "03", title: "Dyeing", desc: "Adding vibrant colors" },
    { num: "04", title: "Winding", desc: "Preparing yarn for weaving" },
    { num: "05", title: "Weaving", desc: "Creating fabric patterns" },
    { num: "06", title: "Fabric Checking", desc: "Quality control inspection" },
    { num: "07", title: "Stitching", desc: "Precision garment construction" },
    { num: "08", title: "Inspection", desc: "Detailed quality verification" },
    { num: "09", title: "Trimming & Checking", desc: "Final touch refinements" },
    { num: "10", title: "Packing", desc: "Secure product packaging" },
    { num: "11", title: "Inspection", desc: "Pre-shipment verification" },
    { num: "12", title: "Final Shipment", desc: "Delivery to destination" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      // Steps animation
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: step,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .step-number {
          animation: float 3s ease-in-out infinite;
        }

        .step-item:hover .step-number {
          animation-play-state: paused;
          transform: scale(1.2) rotate(360deg);
          transition: transform 0.6s ease;
        }

        .connector-line {
          position: relative;
        }

        .connector-line::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          width: 50px;
          height: 3px;
          background: linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.2));
          transform: translateY(-50%);
        }

        @media (max-width: 1024px) {
          .connector-line::before {
            display: none;
          }
        }

        .step-item:nth-child(4n)::before {
          display: none;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="operations"
        className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center"
      >
        <div className="container px-5 py-12 md:px-16 sm:py-20 md:py-36">
          {/* Header */}
          <div ref={titleRef} className="mb-20 text-center">
            <span className="block mb-3 text-sm font-bold tracking-widest uppercase text-rose-100">
              OPERATION'S OVERVIEW
            </span>
            <h2 className="mb-4 text-4xl font-black text-white md:text-6xl">
              Our Production Process
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 bg-white rounded-full"></div>
            <p className="max-w-2xl mx-auto text-lg text-rose-50">
              From yarn to finished product—witness the journey of excellence
            </p>
          </div>

          {/* Process Steps - Zigzag Flow */}
          <div className="relative max-w-5xl mx-auto">
            {workData.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={`flex items-center gap-6 mb-10 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } step-item connector-line`}
              >
                {/* Step Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 text-2xl font-black text-white transition-all duration-500 bg-white rounded-full shadow-2xl step-number bg-opacity-20 backdrop-blur-md">
                    {step.num}
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-lg"></div>
                </div>

                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="mb-1 text-xl font-bold text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-sm text-rose-100 md:text-base">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Indicator */}
                {index < workData.length - 1 && (
                  <div className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} -bottom-5`}>
                    <ArrowRight className={`w-6 h-6 text-white/60 ${index % 2 === 1 ? 'rotate-180' : ''}`} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connecting Line - Vertical */}
          <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block"></div>
        </div>
      </section>
    </>
  );
};

export default Work;