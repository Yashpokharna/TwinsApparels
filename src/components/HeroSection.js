"use client";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animated text on mount
  useEffect(() => {
    const animateElements = [
      { ref: line1Ref, delay: 0 },
      { ref: line2Ref, delay: 200 },
      { ref: paraRef, delay: 400 },
      { ref: btnRef, delay: 600 }
    ];

    animateElements.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";
        }
      }, delay);
    });
  }, []);

  // Canvas particle effect following cursor
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const maxParticles = 100;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = Math.random() * 0.015 + 0.01;
        this.size = Math.random() * 3 + 1;
        this.color = Math.random() > 0.3 ? '220, 38, 38' : '107, 114, 128';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.vx *= 0.98;
        this.vy *= 0.98;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.life * 0.4})`;
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x: (x / window.innerWidth - 0.5) * 2, y: (y / window.innerHeight - 0.5) * 2 });

      // Create particles at cursor position
      for (let i = 0; i < 3; i++) {
        if (particles.length < maxParticles) {
          particles.push(new Particle(x, y));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);

        // Remove dead particles
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = (1 - distance / 100) * 0.3;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeHandler);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white"
      id="Home"
    >
      {/* Canvas for thread drawing effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Subtle fabric texture background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 3px),
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 3px)
          `,
          backgroundSize: '3px 3px'
        }}
      />

      {/* Subtle decorative elements that respond to cursor */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side decoration */}
        <div
          className="absolute left-0 w-px transition-transform duration-700 top-1/4 h-96 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          style={{
            transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 30}px)`
          }}
        />
        
        {/* Right side decoration */}
        <div
          className="absolute right-0 w-px transition-transform duration-700 top-1/3 h-80 bg-gradient-to-b from-transparent via-rose-300 to-transparent"
          style={{
            transform: `translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -30}px)`
          }}
        />

        {/* Subtle circles */}
        <div
          className="absolute w-64 h-64 transition-transform duration-1000 border border-gray-200 rounded-full top-20 left-20 opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px) scale(${1 + mousePosition.x * 0.1})`
          }}
        />
        
        <div
          className="absolute transition-transform duration-1000 border rounded-full bottom-20 right-20 w-80 h-80 border-rose-200 opacity-30"
          style={{
            transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px) scale(${1 + mousePosition.y * 0.1})`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-20 max-w-5xl px-6 mx-auto text-center">
        <h1 className="flex flex-col gap-3 text-4xl font-bold leading-tight text-gray-900 md:gap-4 sm:text-5xl md:text-6xl lg:text-7xl">
          <span
            ref={line1Ref}
            className="transition-all duration-700 translate-y-8 opacity-0"
          >
            Precision In Every Thread,
          </span>
          <span
            ref={line2Ref}
            className="transition-all duration-700 translate-y-8 opacity-0 text-rose-600"
          >
            Excellence In Every Roll
          </span>
        </h1>
        
        <p
          ref={paraRef}
          className="max-w-3xl mx-auto mt-8 mb-10 text-lg leading-relaxed text-gray-600 transition-all duration-700 translate-y-8 opacity-0 md:text-xl"
        >
          We manufacture high-quality textiles with consistency, care, and
          craftsmanship. Trusted by industries that demand nothing but the best.
        </p>
        
        <div ref={btnRef} className="transition-all duration-700 translate-y-8 opacity-0">
          <a
            href="/Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-base font-semibold tracking-wider text-white uppercase transition-all duration-300 rounded bg-rose-600 hover:bg-rose-700 hover:shadow-xl hover:scale-105"
          >
            View Catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;