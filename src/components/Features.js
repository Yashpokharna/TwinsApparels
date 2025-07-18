"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureProduct = ({ imgSrc, title, desc, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%", // 👈 Trigger sooner
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="p-6 transition-transform duration-300 shadow-lg rounded-xl hover:scale-105"
    >
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto mb-4"
      />
      <h3 className="mb-2 text-xl font-semibold text-rose-600">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
};

const Features = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -40,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%", // 👈 Trigger title earlier
      },
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 95%", // 👈 Trigger subtitle earlier
      },
    });
  }, []);

  const featureData = [
    {
      img: "/features/1.svg",
      title: "Production",
      desc:
        "With the help of cutting-edge technology and great employees, we produce over 25k ready-to-wear garments.",
    },
    {
      img: "/features/2.svg",
      title: "Employees",
      desc:
        "Our 110+ skilled floor operators and staff deliver flawless products with dedication.",
    },
    {
      img: "/features/3.svg",
      title: "Machinery",
      desc:
        "We boast over 100 versatile machines that transform any design into reality.",
    },
  ];

  return (
    <section className="container px-5 mx-auto mt-24 md:px-16" id="features">
      <span
        ref={subtitleRef}
        className="block text-sm font-bold tracking-wide text-center uppercase text-rose-600 md:text-lg"
      >
        PLANT AND MACHINERY
      </span>
      <h2
        ref={titleRef}
        className="mt-2 text-2xl font-bold text-center md:text-4xl"
      >
        Modern Machines, Maximum Efficiency
      </h2>

      <div className="grid gap-10 text-center mt-14 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {featureData.map((item, idx) => (
          <FeatureProduct
            key={idx}
            imgSrc={item.img}
            title={item.title}
            desc={item.desc}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
