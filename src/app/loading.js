'use client';
import { useState, useEffect } from 'react';

const Loading = () => {
  const [weavingStep, setWeavingStep] = useState(0);
  const [fabricProgress, setFabricProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setWeavingStep(prev => (prev + 1) % 100);
    }, 50);

    const progressInterval = setInterval(() => {
      setFabricProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 60);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Factory floor grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, #000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Spinning spools/bobbins in background */}
      <div className="absolute top-20 left-20">
        <div 
          className="relative w-16 h-20 overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-rose-600 to-rose-700"
          style={{ transform: `rotate(${weavingStep * 3.6}deg)` }}
        >
          <div className="absolute inset-x-0 h-1 top-2 bg-rose-800/50" />
          <div className="absolute inset-x-0 h-1 bottom-2 bg-rose-800/50" />
        </div>
      </div>

      <div className="absolute top-32 right-24">
        <div 
          className="relative overflow-hidden rounded-lg shadow-lg w-14 h-18 bg-gradient-to-b from-emerald-600 to-emerald-700"
          style={{ transform: `rotate(${-weavingStep * 4}deg)` }}
        >
          <div className="absolute inset-x-0 h-1 top-2 bg-emerald-800/50" />
          <div className="absolute inset-x-0 h-1 bottom-2 bg-emerald-800/50" />
        </div>
      </div>

      <div className="absolute bottom-32 left-32">
        <div 
          className="relative w-12 h-16 overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-blue-600 to-blue-700"
          style={{ transform: `rotate(${weavingStep * 2.8}deg)` }}
        >
          <div className="absolute inset-x-0 top-1.5 h-0.5 bg-blue-800/50" />
          <div className="absolute inset-x-0 bottom-1.5 h-0.5 bg-blue-800/50" />
        </div>
      </div>

      {/* Main sewing animation */}
      <div className="relative z-10 mb-12">
        <div className="relative w-64 h-48 md:w-80 md:h-56">
          
          {/* Fabric piece being sewn */}
          <div className="absolute w-48 h-32 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-lg shadow-xl left-1/2 top-1/2 md:w-56 md:h-36 bg-gradient-to-br from-slate-200 to-slate-300 border-slate-300">
            
            {/* Fabric texture */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 3px),
                repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 3px)
              `,
              backgroundSize: '3px 3px'
            }} />

            {/* Stitching line being created */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path
                d={`M 10 50 Q 30 ${48 + Math.sin(weavingStep * 0.3) * 2} 50 50 T 90 50 T 130 50 T 170 50`}
                stroke="#dc2626"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 4"
                strokeLinecap="round"
                style={{
                  strokeDashoffset: -weavingStep * 2
                }}
              />
              <path
                d={`M 10 65 Q 30 ${63 + Math.sin(weavingStep * 0.3 + 1) * 2} 50 65 T 90 65 T 130 65 T 170 65`}
                stroke="#dc2626"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 4"
                strokeLinecap="round"
                style={{
                  strokeDashoffset: -weavingStep * 2
                }}
              />
            </svg>
          </div>

          {/* Button being sewn */}
          <div 
            className="absolute z-20"
            style={{
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative w-16 h-16 bg-black rounded-full shadow-2xl md:w-20 md:h-20">
              {/* Button holes */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full shadow-inner" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full shadow-inner" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full shadow-inner" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full shadow-inner" />
                  </div>
                </div>
              </div>
              
              {/* Button rings */}
              <div className="absolute border-2 border-gray-700 rounded-full inset-1" />
              <div className="absolute border border-gray-600 rounded-full inset-2" />

              {/* Thread through button */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <line
                  x1="35" y1="42" x2="65" y2="58"
                  stroke="#dc2626"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="35" y1="58" x2="65" y2="42"
                  stroke="#dc2626"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Animated sewing needle */}
          <div 
            className="absolute z-30"
            style={{
              top: `${35 + Math.sin(weavingStep * 0.4) * 15}%`,
              left: '50%',
              transform: 'translateX(-50%)',
              transition: 'top 0.1s ease'
            }}
          >
            <div 
              className="relative w-1.5 h-16 md:h-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-xl"
              style={{
                transform: `rotate(${Math.sin(weavingStep * 0.3) * 5}deg)`,
              }}
            >
              {/* Needle eye */}
              <div className="absolute top-0 w-2 h-3 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 border-2 border-gray-400 rounded-full left-1/2" />
              {/* Needle point */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-600" />
            </div>
            
            {/* Thread from needle */}
            <svg className="absolute top-0 w-32 h-32 overflow-visible pointer-events-none left-1/2" viewBox="0 0 100 100" style={{ transform: 'translate(-50%, -100%)' }}>
              <path
                d={`M 50 100 Q ${45 + Math.sin(weavingStep * 0.2) * 10} ${80 + Math.cos(weavingStep * 0.3) * 15} 50 ${60 + Math.sin(weavingStep * 0.25) * 10}`}
                stroke="#dc2626"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Presser foot */}
          <div 
            className="absolute z-25"
            style={{
              top: '38%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-8 h-3 rounded-sm shadow-lg bg-gradient-to-b from-gray-600 to-gray-700" />
          </div>
        </div>
      </div>

      {/* Industrial loom weaving animation */}
      <div className="relative h-20 mb-10 overflow-hidden border-2 rounded-lg shadow-xl w-80 md:w-96 bg-gradient-to-b from-slate-200 to-slate-300 border-slate-400">
        {/* Warp threads (vertical) */}
        <div className="absolute inset-0">
          {[...Array(24)].map((_, i) => (
            <div
              key={`warp-${i}`}
              className="absolute w-0.5 h-full"
              style={{
                left: `${i * 4.2}%`,
                background: '#059669',
                opacity: 0.6,
                transform: `translateY(${Math.sin((weavingStep + i * 5) * 0.15) * 3}px)`
              }}
            />
          ))}
        </div>

        {/* Weft threads (horizontal) being woven */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`weft-${i}`}
              className="absolute h-0.5 rounded-full"
              style={{
                top: `${15 + i * 10}%`,
                left: 0,
                width: `${Math.min(100, (fabricProgress + i * 5) % 110)}%`,
                background: 'linear-gradient(90deg, #dc2626, #ef4444)',
                opacity: 0.7,
                transition: 'width 0.1s linear'
              }}
            />
          ))}
        </div>

        {/* Shuttle moving across */}
        <div 
          className="absolute z-10 w-8 h-3 rounded-full shadow-lg bg-gradient-to-r from-amber-500 to-amber-600"
          style={{
            top: '45%',
            left: `${(fabricProgress % 100)}%`,
            transform: 'translateY(-50%)',
            transition: 'left 0.1s linear'
          }}
        />
      </div>

      {/* Brand section */}
      <div className="z-10 mb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-[0.3em] mb-3 text-slate-900">
          TWINS APPARELS
        </h1>
        <div className="h-0.5 w-64 mx-auto mb-3 bg-gradient-to-r from-transparent via-rose-600 to-transparent" />
        <p className="text-sm tracking-[0.35em] text-slate-600 font-medium">
          PREMIUM TEXTILE MANUFACTURING
        </p>
      </div>

      {/* Fabric roll progress */}
      <div className="relative mb-6 w-80 md:w-96">
        <div className="flex items-center gap-4">
          {/* Left spool */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-br from-slate-700 to-slate-800">
            <div 
              className="w-8 h-8 border-4 rounded-full border-rose-600"
              style={{ transform: `rotate(${weavingStep * 5}deg)` }}
            />
          </div>

          {/* Progress fabric */}
          <div className="flex-1 h-3 overflow-hidden rounded-full shadow-inner bg-slate-300">
            <div 
              className="relative h-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600"
              style={{
                width: `${fabricProgress}%`,
                transition: 'width 0.1s linear',
                backgroundSize: '200% 100%',
                backgroundPosition: `${weavingStep}% 0`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" 
                   style={{ transform: `translateX(${weavingStep}%)` }} />
            </div>
          </div>

          {/* Right spool */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-br from-slate-700 to-slate-800">
            <div 
              className="w-8 h-8 border-4 rounded-full border-emerald-600"
              style={{ transform: `rotate(${-weavingStep * 5}deg)` }}
            />
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="text-center">
        <p className="mb-2 text-lg font-semibold tracking-wide text-slate-700">
          {fabricProgress < 25 ? 'Preparing Fabric...' :
           fabricProgress < 50 ? 'Stitching Precision...' :
           fabricProgress < 75 ? 'Weaving Excellence...' : 
           'Finishing Touches...'}
        </p>
        
        <div className="flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-rose-600"
              style={{
                opacity: Math.sin((weavingStep + i * 33) * 0.15) * 0.5 + 0.5,
                transform: `scale(${0.8 + Math.sin((weavingStep + i * 33) * 0.15) * 0.4})`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;