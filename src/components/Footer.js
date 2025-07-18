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

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const iconsRef = useRef([]);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo: scale and slide from top
      gsap.from(logoRef.current, {
        y: -40,
        scale: 0.9,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 150%",
        },
      });

      // Icons: rotate and lift one by one
      gsap.from(iconsRef.current, {
        y: 30,
        rotate: 10,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 150%",
        },
      });

      // Text: slide from below
      gsap.from(copyrightRef.current, {
        y: 20,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 150%",
        },
        delay: 0.4,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="px-5 py-10 mt-16 border-t border-neutral-200 md:px-16 md:py-16"
      id="Footer"
    >
      <div className="container flex flex-col items-center mx-auto">
        <div className="items-center">
          <div className="flex flex-col items-center justify-center">
            <div ref={logoRef}>
              <Link href={"/"} className="items-center text-3xl font-semibold">
                <span className="text-rose-600">Twins</span>Apparels.
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
                  <Icon className="transition-all hover:text-rose-600 hover:-translate-y-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="mt-8 text-sm text-center" ref={copyrightRef}>
            © 2025 TwinsApparels - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
