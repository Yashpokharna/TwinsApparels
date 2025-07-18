"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkCard = ({ num, title, animationDirection }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: animationDirection === "up" ? 50 : -50,
        x: animationDirection === "left" ? 50 : animationDirection === "right" ? -50 : 0,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 120%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [animationDirection]);

  return (
    <div
      ref={cardRef}
      className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left"
    >
      <span className="px-4 py-4 mx-auto text-3xl font-bold text-blue-800 bg-white rounded-full md:mx-0 w-fit">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
    </div>
  );
};

const workData = [
  "Yarn Sourcing",
  "Twisting",
  "Dyeing",
  "Winding",
  "Weaving",
  "Fabric Checking",
  "Stitching",
  "Inspection",
  "Trimming & Checking",
  "Packing",
  "Inspection",
  "Final Shipment",
];

const Work = () => {
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionTitleRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 120%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const animationDirections = [
    "up",
    "left",
    "right",
    "up",
    "left",
    "right",
    "up",
    "left",
    "right",
    "up",
    "left",
    "right",
  ];

  const renderCards = () => {
    return Array.from({ length: 3 }).map((_, rowIndex) => {
      const rowCards = workData.slice(rowIndex * 4, rowIndex * 4 + 4);

      return (
        <div
          key={rowIndex}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-5"
        >
          {rowCards.map((title, i) => {
            const index = rowIndex * 4 + i;
            return (
              <div className="relative mx-14" key={index}>
                <WorkCard
                  num={`${(index + 1).toString().padStart(2, "0")}`}
                  title={title}
                  animationDirection={animationDirections[index % animationDirections.length]}
                />
                {index % 4 !== 3 && (
                  <Image
                    src={"/work/arrow.svg"}
                    width={210}
                    height={300}
                    alt="arrow"
                    className={`hidden xl:block absolute top-2 left-[4.5rem] ${
                      index % 2 === 1 ? "rotate" : ""
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <section className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="container flex flex-col gap-10 px-5 py-12 text-center lg:gap-16 md:px-16 sm:py-20 md:py-36">
        <div ref={sectionTitleRef}>
          <span className="block text-lg font-semibold tracking-widest text-center uppercase">
            OPERATION&apos;S OVERVIEW
          </span>
          <h2 className="my-3 text-2xl font-semibold text-center sm:text-4xl">
            Let&apos;s see how it works
          </h2>
        </div>
        {renderCards()}
      </div>
    </section>
  );
};

export default Work;
