"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(textRef.current.querySelectorAll("span, p"), {
        y: 60,
        opacity: 0,
        stagger: 0.3,         // slower stagger
        duration: 1.2,         // slower animation
      })
        .from(
          buttonRef.current,
          {
            scale: 0.9,
            opacity: 0,
            y: 20,
            duration: 1,       // slower button animation
          },
          "-=0.6"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.05,
            rotateZ: 3,
            duration: 1.6,     // slower image animation
            ease: "power2.out",
          },
          "-=1"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="container flex flex-col items-center px-4 mx-auto md:px-16 lg:flex-row lg:gap-20 gap-14"
      id="About"
      ref={containerRef}
    >
      <div className="flex flex-col flex-1 gap-4" ref={textRef}>
        <span className="block text-3xl font-semibold tracking-widest uppercase text-rose-600">
          ABOUT US
        </span>
        <p className="text-lg leading-loose">
          Twins Apparels stands as a beacon of excellence in the realm of ready-to-wear manufacturing. Renowned for our steadfast commitment to quality, professionalism, and trust, we epitomize sophistication through a fusion of state-of-the-art technology and the craftsmanship of skilled artisans.
          <br />
          At Twins Apparels, we don't merely create garments; we craft experiences tailored to our client's exact needs. Our enduring partnerships are built on a foundation of perfection, ensuring that every piece that bears our name is a testament to our dedication to excellence.
        </p>
        <button
          ref={buttonRef}
          className="px-8 py-3 mt-2 text-sm font-semibold text-white border-2 border-transparent rounded-full w-fit md:text-base hover:border-2 md:px-10 bg-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:shadow-rose-600 hover:shadow-2xl"
        >
          <Link href="/" target="_blank">Know More</Link>
        </button>
      </div>

      <div className="relative flex-1 w-full" ref={imageRef}>
        <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.png')]">
          <Image
            src={"/hero.png"}
            width={300}
            height={300}
            alt="core features"
            className="object-cover w-full md:w-[90%] xl:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
