"use client";
import { useEffect, useRef } from "react";
import { 
  Facebook, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Github, href: '#' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About Us', href: '#About' },
    { name: 'Products', href: '#Products' },
    { name: 'Machinery', href: '#Machinery' },
    { name: 'Contact', href: '#Contact' }
  ];

  return (
    <>
      <style>{`
        .wave-animation {
          animation: wave 15s ease-in-out infinite;
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(-10px); }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }

        .creator-badge {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      <footer ref={footerRef} className="relative overflow-hidden bg-rose-600">
        {/* Background Animation - Same as original */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="flex w-[200%] h-full">
            {/* first strip */}
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 150,
                ease: "linear",
              }}
              className="flex items-center h-full whitespace-nowrap will-change-transform"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={`text1-${i}`}
                  className="text-[15vw] font-black text-white/10 tracking-tight select-none leading-none flex items-center"
                >
                  TWINSAPPARELS&nbsp;
                </span>
              ))}
            </motion.div>

            {/* second strip */}
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 150,
                ease: "linear",
              }}
              className="flex items-center h-full whitespace-nowrap will-change-transform"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={`text2-${i}`}
                  className="text-[15vw] font-black text-white/10 tracking-tight select-none leading-none flex items-center"
                >
                  TWINSAPPARELS&nbsp;
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wavy Top Border */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-full h-20 wave-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>

        <div className="container relative z-10 px-5 pt-32 pb-12 mx-auto md:px-16 max-w-7xl">
          {/* Main Content Grid */}
          <div className="grid gap-12 mb-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Column 1: Brand */}
            <div className="opacity-0 fade-in-up stagger-1">
              <Link href="/" className="inline-block mb-6">
                <h2 className="text-5xl font-black text-white md:text-6xl">
                  Twins
                  <span className="block text-3xl text-rose-100 md:text-4xl">Apparels</span>
                </h2>
              </Link>
              <p className="mb-6 text-lg leading-relaxed text-rose-50">
                Weaving excellence into every fabric. Your trusted partner in premium textile manufacturing.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-rose-50">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">connect@twinsapparels.com</span>
                </div>
                <div className="flex items-center gap-3 text-rose-50">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+91 94142-12340</span>
                </div>
                <div className="flex items-center gap-3 text-rose-50">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="opacity-0 fade-in-up stagger-2">
              <h3 className="mb-6 text-2xl font-bold text-white">Explore</h3>
              <nav>
                <ul className="space-y-4">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link 
                        href={link.href}
                        className="inline-flex items-center gap-2 text-lg font-medium transition-all text-rose-50 hover:text-white hover:gap-3 group"
                      >
                        <span className="flex items-center justify-center w-8 h-8 transition-colors rounded-lg bg-white/20 group-hover:bg-white/30">
                          →
                        </span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3: Social & Creator */}
            <div className="opacity-0 fade-in-up stagger-3">
              <h3 className="mb-6 text-2xl font-bold text-white">Connect With Us</h3>
              
              {/* Social Icons */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={idx}
                        href={social.href}
                        target="_blank"
                        className="flex items-center justify-center w-12 h-12 transition-all bg-white rounded-full text-rose-600 hover:bg-rose-50 hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Creator Credit */}
              {/* <div className="pt-4 border-t border-white/20">
                <p className="mb-2 text-sm text-rose-100">
                  A Product By
                </p>
                <Link 
                  href="https://yashpokharna.in/" 
                  target="_blank"
                  className="inline-block text-xl font-bold text-white transition-all link-item hover:text-rose-100"
                >
                  Yash Pokharna 💻
                </Link>
              </div> */}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-8 opacity-0 bg-white/20 fade-in-up stagger-4"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 opacity-0 md:flex-row fade-in-up stagger-5">
            <p className="text-sm text-rose-50">
              © 2026 TwinsApparels. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-rose-50">
              <Link href="#" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="#" className="transition-colors hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <motion.div
          animate={{ 
            x: [0, -50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400"
        />
      </footer>
    </>
  );
};

export default Footer;