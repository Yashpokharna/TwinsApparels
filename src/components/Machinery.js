"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServiceCard = ({ imgSrc, title, desc, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    // Animate card on scroll
    gsap.fromTo(card, 
      {
        opacity: 0,
        x: -50,
        scale: 0.95
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1, // Reduced stagger delay for faster sequence
        scrollTrigger: {
          trigger: card,
          start: "top 100%",
          toggleActions: "play none none none"
        }
      }
    );

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  return (
    <div ref={cardRef} className="flex items-start gap-3 sm:gap-10 lg:w-[90%] cursor-pointer">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Machinery = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const playButton = playButtonRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const heading = headingRef.current;

    // Initial animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 100%",
        toggleActions: "play none none none"
      }
    });

    // Animate text elements
    tl.fromTo(title, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(heading, 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(video, 
      { opacity: 0, scale: 0.8, rotationY: -15 },
      { opacity: 1, scale: 1, rotationY: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    // Animate play button with continuous pulse
    gsap.set(playButton, { scale: 0 });
    gsap.to(playButton, {
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.8,
      scrollTrigger: {
        trigger: video,
        start: "top 100%",
        toggleActions: "play none none none"
      }
    });

    // Continuous pulse animation for play button
    gsap.to(playButton, {
      scale: 1.1,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Hover effects for play button
    const handlePlayButtonEnter = () => {
      gsap.to(playButton, {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handlePlayButtonLeave = () => {
      gsap.to(playButton, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    playButton.addEventListener('mouseenter', handlePlayButtonEnter);
    playButton.addEventListener('mouseleave', handlePlayButtonLeave);

    // Parallax effect for video
    gsap.to(video, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      playButton.removeEventListener('mouseenter', handlePlayButtonEnter);
      playButton.removeEventListener('mouseleave', handlePlayButtonLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="container relative px-5 mx-auto md:px-16" id="Machinery">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
        <div className="relative flex-1 w-full">
          <Image
            ref={videoRef}
            src={"/videobanner.png"}
            width={500}
            height={500}
            alt="video banner"
            className="object-cover w-full cursor-pointer"
          />
          <button ref={playButtonRef} className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Link href={"https://www.youtube.com/@beastwillgaxxgaming3952/featured"} target="_blank">
              <span className="absolute block w-full h-full duration-700 -translate-x-1/2 -translate-y-1/2 rounded-full playButton bg-rose-500 top-1/2 left-1/2"></span>
              <PlayArrowIcon className="w-16 h-16 md:w-24 md:h-24 text-white bg-[#ffffffb8] rounded-full" />
            </Link>
          </button>
        </div>
        <div className="flex flex-col flex-1 gap-5 md:gap-10">
          <div className="flex flex-col gap-4">
            <span ref={titleRef} className="text-center service-name lg:text-left">
              OUR MACHINES
            </span>
            <h2 ref={headingRef} className="text-3xl font-bold text-center md:text-5xl lg:text-left">
              Advanced looms ensuring fabric precision
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="Production Machinery"
            desc="60 Single Needle Juki DDL7000A, 9 Juki Overlock, 7 Tendem, 3 Chain Stitch, 3 Edge Cutter, 1 Juki Auto Pocket Weld, 2 Blind Loop, 1 Kansai Loop, 1 11-Needle Kansai, 2 Blind Hemming, 1 Suttel Stitch Machines (Rice Takka), 1 Zigzag Machine."
            index={0}
          />
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="Finishing & Processing Equipment"
            desc="1 Elastic Kansai, 2 Double Needle, 1 Pick Stitch, 1 Revert Machine (Snap Button), 1 Feed Of The Arm, 2 Cutting Machine, 2 Juki Bartake, 1 Juki Button Machine, 1 Eyelet, 4 Ramson Press, 1 Tagging Machine, 2 Fusing 450, 1 Sim Buster"
            index={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Machinery;