"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, AlertCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);

  const productionProcess = [
    // Planning & Preparation Phase
    { 
      phase: "Planning & Preparation",
      steps: [
        { title: "Order Receiving", type: "start", desc: "Client requirements and specifications" },
        { title: "Planning", type: "process", desc: "Manpower, materials, and machine allocation" },
        { title: "Sampling", type: "process", desc: "FIT sample and size set sample creation" },
        { title: "Material Sourcing", type: "process", desc: "Fabric and trim procurement" },
        { title: "Material Inspection", type: "quality", desc: "Quality check of received materials", hasFailPath: true },
      ]
    },
    // Pre-Production Phase
    {
      phase: "Pre-Production",
      steps: [
        { title: "PP Sample Approval", type: "process", desc: "Pre-production sample verification" },
        { title: "PP Meeting", type: "process", desc: "Production planning discussion" },
        { title: "Marker & Plotter Making", type: "process", desc: "Pattern layout preparation" },
        { title: "Fabric Spreading", type: "process", desc: "Layer preparation for cutting" },
      ]
    },
    // Cutting Phase
    {
      phase: "Cutting",
      steps: [
        { title: "Fabric Cutting", type: "process", desc: "Precision cutting with re-cutting if needed" },
        { title: "Checking Cuttings", type: "quality", desc: "Cut piece inspection" },
        { title: "Stickering & Fusing", type: "process", desc: "Labeling and interlining application" },
        { title: "Sorting & Bundling", type: "process", desc: "Organizing cut pieces" },
      ]
    },
    // Production Phase
    {
      phase: "Production",
      steps: [
        { title: "Printing/Embroidery", type: "process", desc: "Design application (if required)" },
        { title: "Sewing", type: "process", desc: "Garment assembly and stitching" },
        { title: "Checking Garments", type: "quality", desc: "In-line quality inspection", hasFailPath: true },
      ]
    },
    // Finishing Phase
    {
      phase: "Finishing",
      steps: [
        { title: "Thread Cutting", type: "process", desc: "Removing loose threads" },
        { title: "Initial Checking", type: "quality", desc: "Pre-wash inspection" },
        { title: "Washing", type: "process", desc: "Garment washing process" },
        { title: "Pressing", type: "process", desc: "Steam pressing and ironing" },
        { title: "Measurement Checking", type: "quality", desc: "Size verification", hasFailPath: true },
        { title: "Final Checking", type: "quality", desc: "Comprehensive quality check", hasFailPath: true },
      ]
    },
    // Packing & Dispatch Phase
    {
      phase: "Packing & Dispatch",
      steps: [
        { title: "Tagging", type: "process", desc: "Price tags and labels" },
        { title: "Folding & Packing", type: "process", desc: "Individual garment packing" },
        { title: "Packing to Box", type: "process", desc: "Carton packing" },
        { title: "Final Inspection", type: "quality", desc: "Ready-to-ship verification" },
        { title: "Shipment Audit", type: "quality", desc: "Pre-dispatch final check", hasFailPath: true },
        { title: "Shipment Dispatch", type: "end", desc: "Delivery to destination" },
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      // Steps animation
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(
            step,
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: step,
                start: "top 92%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getStepColor = (type) => {
    switch(type) {
      case 'start': return 'from-emerald-50 to-emerald-100 border-emerald-400';
      case 'end': return 'from-blue-50 to-blue-100 border-blue-400';
      case 'quality': return 'from-amber-50 to-amber-100 border-amber-400';
      case 'process': return 'from-white to-gray-50 border-gray-300';
      default: return 'from-white to-gray-50 border-gray-300';
    }
  };

  const getIconBg = (type) => {
    switch(type) {
      case 'start': return 'bg-emerald-500';
      case 'end': return 'bg-blue-500';
      case 'quality': return 'bg-amber-500';
      default: return 'bg-rose-500';
    }
  };

  let stepIndex = 0;

  return (
    <section
      ref={sectionRef}
      id="operations"
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-rose-50"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-rose-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-blue-100/30 blur-3xl" />

      <div className="container relative z-10 px-5 py-16 md:px-16 md:py-24">
        {/* Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <span className="inline-block px-4 py-2 mb-3 text-xs font-bold tracking-widest uppercase rounded-full bg-rose-100 text-rose-700">
            OPERATION'S OVERVIEW
          </span>
          <h2 className="mb-4 text-4xl font-black text-gray-800 md:text-6xl">
            Our Production Process
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-rose-500 to-pink-500"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Complete garment manufacturing workflow from order to delivery
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto space-y-12">
          {productionProcess.map((phase, phaseIdx) => (
            <div key={phaseIdx} className="relative">
              {/* Phase Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 text-xl font-black text-white shadow-lg bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl">
                  {phaseIdx + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  {phase.phase}
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {phase.steps.map((step, stepIdx) => {
                  const currentIndex = stepIndex++;
                  return (
                    <div
                      key={stepIdx}
                      ref={(el) => (stepsRef.current[currentIndex] = el)}
                      className={`
                        relative group
                        bg-gradient-to-br ${getStepColor(step.type)}
                        border-2 rounded-2xl p-5 shadow-md hover:shadow-xl
                        transition-all duration-300 hover:-translate-y-1
                      `}
                    >
                      {/* Step Icon */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`
                          flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg
                          ${getIconBg(step.type)}
                          text-white shadow-md
                        `}>
                          {step.type === 'quality' ? (
                            <AlertCircle className="w-5 h-5" />
                          ) : (
                            <Check className="w-5 h-5" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="mb-1 text-base font-bold leading-tight text-gray-800">
                            {step.title}
                          </h4>
                          <p className="text-xs leading-snug text-gray-600">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Quality Check Badge */}
                      {step.type === 'quality' && (
                        <div className="flex items-center gap-2 pt-3 mt-3 border-t border-amber-200">
                          <span className="text-xs font-semibold text-amber-700">
                            Quality Checkpoint
                          </span>
                          {step.hasFailPath && (
                            <span className="px-2 py-1 ml-auto text-xs font-medium text-red-700 bg-red-100 rounded-full">
                              Repair if fail
                            </span>
                          )}
                        </div>
                      )}

                      {/* Start/End Badge */}
                      {(step.type === 'start' || step.type === 'end') && (
                        <div className="pt-3 mt-3 border-t border-gray-200">
                          <span className={`text-xs font-semibold ${
                            step.type === 'start' ? 'text-emerald-700' : 'text-blue-700'
                          }`}>
                            {step.type === 'start' ? '🚀 Process Start' : '✅ Process Complete'}
                          </span>
                        </div>
                      )}

                      {/* Arrow for flow indication */}
                      {stepIdx < phase.steps.length - 1 && (
                        <div className="absolute z-10 hidden -translate-y-1/2 lg:block -right-2 top-1/2">
                          <div className="w-4 h-4 rotate-45 bg-gray-200 shadow-sm" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Phase connector */}
              {phaseIdx < productionProcess.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-1 h-12 rounded-full bg-gradient-to-b from-gray-300 to-gray-100" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Legend */}
        <div className="max-w-4xl p-6 mx-auto mt-16 bg-white border border-gray-200 shadow-lg rounded-2xl">
          <h4 className="mb-4 font-bold text-center text-gray-800">Process Legend</h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-emerald-500" />
              <span className="font-medium text-gray-700">Process Start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-amber-500" />
              <span className="font-medium text-gray-700">Quality Checks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-rose-500" />
              <span className="font-medium text-gray-700">Process Steps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded" />
              <span className="font-medium text-gray-700">Process End</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;