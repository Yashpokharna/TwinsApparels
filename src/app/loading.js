'use client';
import { useState, useEffect } from 'react';

const Loading = () => {
  const [weavingStep, setWeavingStep] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setWeavingStep(prev => (prev + 1) % 16);
    }, 300); // Slower, more gentle weaving animation

    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="w-full h-screen bg-white absolute top-0 left-0 flex flex-col items-center justify-center opacity-100 z-[100] overflow-hidden">
      
      {/* Animated Logo Section */}
      <div className="relative mb-8">
        <div className="relative w-48 h-32 md:w-64 md:h-40">
          
          {/* Animated Needle and Thread */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Button (from your logo) */}
            <div className="relative">
              <div className="relative w-20 h-20 bg-black rounded-full shadow-xl md:w-24 md:h-24">
                {/* Button holes */}
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                      <div className="w-3 h-3 bg-white rounded-full" />
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="w-3 h-3 bg-white rounded-full" />
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Button rings */}
                <div className="absolute border-2 border-gray-600 rounded-full inset-1" />
                <div className="absolute border border-gray-700 rounded-full inset-2" />
              </div>
              
              {/* Animated Needle */}
              <div 
                className="absolute z-10 w-1 bg-gray-400 rounded-full shadow-lg"
                style={{
                  height: '60px',
                  top: '-20px',
                  right: '-10px',
                  transform: `rotate(${Math.sin(weavingStep * 0.5) * 15 + 45}deg)`,
                  transformOrigin: 'bottom center',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="absolute w-2 h-2 transform -translate-x-1/2 bg-gray-300 rounded-full -top-1 left-1/2" />
              </div>
              
              {/* Animated Thread */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100">
                <path
                  d={`M 75 25 Q ${85 + Math.sin(weavingStep * 0.3) * 20} ${30 + Math.cos(weavingStep * 0.4) * 15} ${95 + Math.sin(weavingStep * 0.2) * 25} ${40 + Math.sin(weavingStep * 0.6) * 20}`}
                  stroke="#e11d48"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d={`M 25 75 Q ${15 + Math.cos(weavingStep * 0.4) * 15} ${85 + Math.sin(weavingStep * 0.3) * 15} ${5 + Math.cos(weavingStep * 0.5) * 20} ${95 + Math.sin(weavingStep * 0.2) * 15}`}
                  stroke="#e11d48"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                
                {/* Thread through button holes */}
                <line
                  x1="35" y1="45"
                  x2="65" y2="55"
                  stroke="#e11d48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="35" y1="55"
                  x2="65" y2="45"
                  stroke="#e11d48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Fast Weaving Pattern */}
      <div className="relative mb-8">
        <div className="relative h-24 w-72 md:w-80 md:h-28">
          
          {/* Fast Horizontal Threads */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-1 rounded-full"
                style={{
                  top: `${12 + i * 10}%`,
                  background: `linear-gradient(90deg, #e11d48, #f43f5e, #e11d48)`,
                  opacity: 0.7,
                  transform: `translateY(${Math.sin((weavingStep * 2 + i) * 0.8) * 3}px)`,
                  transition: 'transform 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* Fast Vertical Threads */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-1 h-full rounded-full"
                style={{
                  left: `${8 + i * 7}%`,
                  background: `linear-gradient(180deg, #059669, #10b981, #059669)`,
                  opacity: 0.6,
                  transform: `translateX(${Math.cos((weavingStep * 2 + i) * 0.6) * 4}px) scaleY(${0.7 + Math.sin((weavingStep * 2 + i) * 0.5) * 0.3})`,
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* Fast Shuttle */}
          <div 
            className="absolute z-10 w-6 h-2 rounded-full shadow-lg bg-gradient-to-r from-amber-400 to-yellow-500"
            style={{
              top: '45%',
              left: `${50 + Math.sin(weavingStep * 1.2) * 35}%`,
              transform: `translateY(${Math.sin(weavingStep * 1.5) * 6}px) rotate(${Math.sin(weavingStep * 0.8) * 10}deg)`,
              transition: 'all 0.3s ease'
            }}
          />
        </div>
      </div>

      {/* Brand Section with Logo Text */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-wider text-black md:text-6xl">
          TWINS APPARELS
        </h1>
        <p className="text-lg font-medium tracking-widest text-gray-700">PREMIUM TEXTILE MANUFACTURING</p>
      </div>

      {/* Infinite Loop Progress Bar */}
      <div className="relative mb-6 w-80 md:w-96">
        <div className="relative h-3 overflow-hidden bg-gray-200 rounded-full shadow-inner">
          {/* Animated progress bar with infinite loop */}
          <div 
            className="absolute top-0 left-0 h-full rounded-full"
            style={{
              width: '40%',
              background: 'linear-gradient(90deg, #e11d48, #f43f5e, #ec4899, #e11d48)',
              backgroundSize: '200% 100%',
              animation: 'infiniteProgress 3s linear infinite, gradientShift 2s linear infinite',
              boxShadow: '0 0 10px rgba(225, 29, 72, 0.5)'
            }}
          />
        </div>
        
        {/* Add CSS animation styles */}
        <style jsx>{`
          @keyframes infiniteProgress {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(350%);
            }
          }
          
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}</style>
      </div>

      {/* Alternative: Pulsing dots infinite loader */}
      <div className="relative mb-6">
        <div className="flex items-center justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: '#e11d48',
                animation: `pulseWave 2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                transform: `scale(${0.6 + Math.sin((weavingStep * 2 + i) * 0.8) * 0.4})`
              }}
            />
          ))}
        </div>
        
        <style jsx>{`
          @keyframes pulseWave {
            0%, 60%, 100% {
              transform: scale(0.6);
              opacity: 0.5;
            }
            30% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
        `}</style>
      </div>

      {/* Status Updates */}
      <div className="text-center">
        <p className="mb-2 text-lg font-semibold text-gray-800 md:text-xl">
          {Math.floor((weavingStep % 4)) === 0 ? 'Threading Needle...' :
           Math.floor((weavingStep % 4)) === 1 ? 'Stitching Pattern...' :
           Math.floor((weavingStep % 4)) === 2 ? 'Weaving Fabric...' : 
           'Crafting Excellence...'}
        </p>
        
        {/* Fast bouncing dots */}
        <div className="flex items-center justify-center gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-black rounded-full animate-bounce"
              style={{ 
                animationDelay: `${i * 0.15}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;