"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CircularProgress = ({ count, maxCount, color, index }) => {
  const circleRef = useRef(null);
  const percentage = (count / maxCount) * 100;
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    gsap.fromTo(circleRef.current,
      { strokeDashoffset: circumference },
      {
        strokeDashoffset: offset,
        duration: 1.5,
        ease: "power2.out",
        delay: index * 0.05,
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, [offset, circumference, index]);

  return (
    <svg className="w-20 h-20 -rotate-90 md:w-24 md:h-24" viewBox="0 0 80 80">
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke="#e5e7eb"
        strokeWidth="6"
        fill="none"
      />
      <circle
        ref={circleRef}
        cx="40"
        cy="40"
        r={radius}
        stroke={color}
        strokeWidth="6"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
      />
    </svg>
  );
};

const MachineCard = ({ name, count, maxCount, index, color }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.8, rotationY: -20 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.6,
        ease: "back.out(1.5)",
        delay: index * 0.04,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 92%",
          toggleActions: "play none none none"
        }
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative p-4 transition-all duration-300 bg-white border border-gray-100 shadow-md group rounded-xl hover:shadow-2xl hover:border-transparent hover:-translate-y-2"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
      
      <div className="relative flex flex-col items-center gap-3 text-center">
        {/* Circular Progress */}
        <div className="relative">
          <CircularProgress count={parseInt(count)} maxCount={maxCount} color={color.split(' ')[1]} index={index} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800 md:text-2xl">{count}</span>
          </div>
        </div>
        
        {/* Machine Name */}
        <h4 className="text-xs md:text-sm font-semibold text-gray-700 leading-tight min-h-[40px] flex items-center">
          {name}
        </h4>
      </div>

      {/* Decorative corner */}
      <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${color.split(' ')[1]} opacity-0 group-hover:opacity-100 transition-opacity`} />
    </div>
  );
};

const CategoryCircle = ({ title, count, color, icon, index }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(circleRef.current,
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, [index]);

  return (
    <div ref={circleRef} className="flex flex-col items-center">
      <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${color} flex flex-col items-center justify-center shadow-2xl group hover:scale-110 transition-transform duration-300`}>
        <div className="mb-2 text-white">
          {icon}
        </div>
        <div className="text-4xl font-bold text-white md:text-5xl">{count}</div>
        <div className="mt-1 text-xs md:text-sm text-white/90">machines</div>
      </div>
      <h3 className="mt-4 text-base md:text-lg font-bold text-gray-800 text-center max-w-[150px]">{title}</h3>
    </div>
  );
};

const Machinery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const connectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("production");

  const productionMachines = [
    { name: "Single Needle Juki DDL7000A", count: "60" },
    { name: "Juki Overlock", count: "9" },
    { name: "Tendem", count: "7" },
    { name: "Chain Stitch", count: "3" },
    { name: "Edge Cutter", count: "3" },
    { name: "Juki Auto Pocket Weld", count: "1" },
    { name: "Blind Loop", count: "2" },
    { name: "Kansai Loop", count: "1" },
    { name: "11-Needle Kansai", count: "1" },
    { name: "Blind Hemming", count: "2" },
    { name: "Suttel Stitch Machines (Rice Takka)", count: "1" },
    { name: "Zigzag Machine", count: "1" }
  ];

  const finishingMachines = [
    { name: "Elastic Kansai", count: "1" },
    { name: "Double Needle", count: "2" },
    { name: "Pick Stitch", count: "1" },
    { name: "Revert Machine (Snap Button)", count: "1" },
    { name: "Feed Of The Arm", count: "1" },
    { name: "Cutting Machine", count: "2" },
    { name: "Juki Bartake", count: "2" },
    { name: "Juki Button Machine", count: "1" },
    { name: "Eyelet", count: "1" },
    { name: "Ramson Press", count: "4" },
    { name: "Tagging Machine", count: "1" },
    { name: "Fusing 450", count: "2" },
    { name: "Sim Buster", count: "1" }
  ];

  const maxProductionCount = Math.max(...productionMachines.map(m => parseInt(m.count)));
  const maxFinishingCount = Math.max(...finishingMachines.map(m => parseInt(m.count)));

  const productionTotal = productionMachines.reduce((sum, m) => sum + parseInt(m.count), 0);
  const finishingTotal = finishingMachines.reduce((sum, m) => sum + parseInt(m.count), 0);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const heading = headingRef.current;
    const connection = connectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(title,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(heading,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    // Animate connection line
    gsap.fromTo(connection,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: connection,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const currentMachines = activeTab === "production" ? productionMachines : finishingMachines;
  const maxCount = activeTab === "production" ? maxProductionCount : maxFinishingCount;
  const color = activeTab === "production" ? "from-blue-500 to-blue-600" : "from-rose-500 to-rose-600";
  const circleColor = activeTab === "production" ? "#3b82f6" : "#f43f5e";

  return (
    <section ref={sectionRef} className="container relative px-5 py-16 mx-auto overflow-hidden md:px-16" id="Machinery">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12 text-center">
        <span ref={titleRef} className="text-sm font-semibold tracking-wider uppercase service-name text-rose-600">
          OUR MACHINES
        </span>
        <h2 ref={headingRef} className="max-w-3xl mx-auto text-3xl font-bold text-gray-800 md:text-5xl">
          Advanced looms ensuring fabric precision
        </h2>
      </div>

      {/* Category Overview with Connection */}
      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="relative flex items-center justify-around">
          <CategoryCircle
            title="Production Machinery"
            count={productionTotal}
            color="from-blue-500 to-blue-700"
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            }
            index={0}
          />
          
          {/* Connection Line */}
          <div ref={connectionRef} className="absolute hidden h-1 origin-left top-16 left-1/4 right-1/4 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 md:block" />
          
          <CategoryCircle
            title="Finishing & Processing"
            count={finishingTotal}
            color="from-rose-500 to-rose-700"
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            }
            index={1}
          />
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="max-w-md mx-auto mb-10">
        <div className="bg-gray-100 rounded-full p-1.5 flex">
          <button
            onClick={() => setActiveTab("production")}
            className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "production"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Production
          </button>
          <button
            onClick={() => setActiveTab("finishing")}
            className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "finishing"
                ? "bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Finishing
          </button>
        </div>
      </div>

      {/* Machine Cards Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {currentMachines.map((machine, index) => (
            <MachineCard
              key={`${activeTab}-${index}`}
              name={machine.name}
              count={machine.count}
              maxCount={maxCount}
              index={index}
              color={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Machinery;