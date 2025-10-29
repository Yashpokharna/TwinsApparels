"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const iconsRef = useRef([]);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(logoRef.current, {
        y: -40,
        scale: 0.9,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 150%",
        },
      });

      // Icons animation
      gsap.from(iconsRef.current, {
        y: 30,
        rotate: 10,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 150%",
        },
      });

      // Text animation
      gsap.from(copyrightRef.current, {
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 150%",
        },
        delay: 0.3,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative px-5 py-10 mt-16 overflow-hidden text-white border-t border-rose-300/30 md:px-16 md:py-16 bg-rose-600"
      id="Footer"
    >
      {/* ✅ Seamless never-ending background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="flex w-[200%] h-full">
          {/* first strip */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 150, // 🐢 slower, smooth and continuous
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
              duration: 150, // 🐢 same speed as above
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

      {/* Foreground content */}
      <div className="container relative z-10 flex flex-col items-center mx-auto">
        <div className="items-center">
          <div className="flex flex-col items-center justify-center">
            <div ref={logoRef}>
              <Link href={"/"} className="items-center text-3xl font-semibold">
                <span className="text-white">Twins</span>
                <span className="text-rose-100">Apparels.</span>
              </Link>
            </div>

            <div className="flex justify-center mt-8 space-x-6">
              {[
                { href: "", Icon: FacebookOutlinedIcon },
                { href: "", Icon: GitHubIcon },
                { href: "", Icon: LinkedInIcon },
                { href: "", Icon: TwitterIcon },
                { href: "", Icon: InstagramIcon },
              ].map(({ href, Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  ref={(el) => (iconsRef.current[i] = el)}
                >
                  <Icon className="transition-all hover:text-white hover:-translate-y-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p
            className="mt-8 text-sm text-center text-rose-100"
            ref={copyrightRef}
          >
            © 2025 TwinsApparels — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
