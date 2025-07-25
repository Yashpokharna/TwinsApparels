"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Instagram } from "@mui/icons-material";

gsap.registerPlugin(ScrollTrigger);

const TeamCard = ({ imgSrc, name, title, facebook, instagram, linkedin, index }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 120%",
      },
    });

    tl.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: index * 0.2,
      }
    );

    // Continuous bounce animation for the profile image
    gsap.to(imgRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1 + index * 0.3, // small offset between them
    });
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer"
    >
      <Image
        ref={imgRef}
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="object-cover w-32 h-32 mx-auto mb-3 border-2 rounded-full drop-shadow-2xl md:mb-5 border-rose-500"
      />
      <h2 className="text-base font-semibold text-center sm:text-xl">{name}</h2>
      <p className="text-sm text-center sm:text-base">{title}</p>

      <div className="flex gap-3 mx-auto md:flex-col md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 md:mx-0 md:text-rose-600">
        {facebook && (
          <Link href={facebook} target="_blank">
            <FacebookRoundedIcon className="text-xl cursor-pointer hover:text-rose-600 md:hover:text-gray-500" />
          </Link>
        )}
        {instagram && (
          <Link href={instagram} target="_blank">
            <Instagram className="text-xl cursor-pointer hover:text-rose-600 md:hover:text-gray-500" />
          </Link>
        )}
        {linkedin && (
          <Link href={linkedin} target="_blank">
            <LinkedInIcon className="text-xl cursor-pointer hover:text-rose-600 md:hover:text-gray-500" />
          </Link>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="container px-5 mx-auto md:px-16 lg:px-24" id="Team">
      <span className="block text-center service-name">OUR TEAM</span>
      <h2 className="mx-auto text-center title md:w-1/2">Driven By Teamwork</h2>

      <div className="grid grid-cols-2 mx-auto mt-16 lg:grid-cols-2 gap-y-8 sm:gap-8">
        <TeamCard
          imgSrc="/team/2.png"
          name="Satyam Goyal"
          title="Founder"
          facebook="https://www.facebook.com/satyam.goyal.393"
          instagram="https://www.instagram.com/satyam__goyal/"
          linkedin="https://www.linkedin.com/in/satyam-goyal-4082792ba/"
          index={0}
        />
        <TeamCard
          imgSrc="/team/3.png"
          name="Shivam Goyal"
          title="Founder"
          facebook="https://www.facebook.com/shivam.09.goyal"
          instagram="https://www.instagram.com/shiivamgoyall/"
          index={1}
        />
      </div>
    </section>
  );
};

export default Team;
