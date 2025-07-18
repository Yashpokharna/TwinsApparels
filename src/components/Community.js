// components/Community.jsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ imgSrc, title, index }) => {
  const cardRef = useRef();

  useEffect(() => {
    const animations = [
      {
        from: { opacity: 0, scale: 0.6, rotate: 45 },
        to: { opacity: 1, scale: 1, rotate: 0 },
      },
      {
        from: { opacity: 0, y: 100, rotateX: 90 },
        to: { opacity: 1, y: 0, rotateX: 0 },
      },
      {
        from: { opacity: 0, x: -100, scale: 0.8 },
        to: { opacity: 1, x: 0, scale: 1 },
      },
    ];

    const anim = animations[index % animations.length];

    gsap.fromTo(
      cardRef.current,
      anim.from,
      {
        ...anim.to,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: index === 1 ? "top 130%" : "top 120%", // Middle card animates earlier
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt="community image"
        className="mx-auto"
      />
      <h2 className="text-xl font-medium">{title}</h2>
    </div>
  );
};

const Community = () => {
  return (
    <section className="container px-8 mx-auto lg:px-32" id="Community">
      <div className="mb-16">
        <span className="block mb-2 tracking-widest text-center service-name text-rose-500">
          BUSINESS TENETS
        </span>
        <h2 className="text-3xl font-bold text-center md:text-5xl title">
          Driven By Core Values
        </h2>
      </div>
      <div className="grid gap-8 mx-auto text-center sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-16">
        <Card
          imgSrc="/community/2.svg"
          title="Partner with clients to offer trend-right designs, and innovative constructions at the right value."
          index={0}
        />
        <Card
          imgSrc="/community/1.svg"
          title="Speed to market, flexibility to change and adapt with the industry needs."
          index={1}
        />
        <Card
          imgSrc="/community/3.svg"
          title="Consistently meet and beat the market expectations for quality and value."
          index={2}
        />
      </div>
    </section>
  );
};

export default Community;
