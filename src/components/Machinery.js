"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
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
  return (
    <section className="container relative px-5 mx-auto md:px-16" id="Machinery">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
        <div className="relative flex-1 w-full">
          <Image
            src={"/videobanner.png"}
            width={500}
            height={500}
            alt="video banner"
            className="object-cover w-full"
          />
          <button className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Link href={"https://youtu.be/aVNa8Dka5MA"} target="_blank">
              <span className="absolute block w-full h-full duration-700 -translate-x-1/2 -translate-y-1/2 rounded-full playButton bg-rose-500 top-1/2 left-1/2"></span>
              <PlayArrowIcon className="w-16 h-16 md:w-24 md:h-24 text-white bg-[#ffffffb8] rounded-full" />
            </Link>
          </button>
        </div>
        <div className="flex flex-col flex-1 gap-5 md:gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-center service-name lg:text-left">
              OUR MACHINES
            </span>
            <h2 className="text-3xl font-bold text-center md:text-5xl lg:text-left">
              Advanced looms ensuring fabric precision
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="Production Machinery"
            desc="60 Single Needle Juki DDL7000A, 9 Juki Overlock, 7 Tendem, 3 Chain Stitch, 3 Edge Cutter, 1 Juki Auto Pocket Weld, 2 Blind Loop, 1 Kansai Loop, 1 11-Needle Kansai, 2 Blind Hemming, 1 Suttel Stitch Machines (Rice Takka), 1 Zigzag Machine."
          />
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="Finishing & Processing Equipment"
            desc="1 Elastic Kansai, 2 Double Needle, 1 Pick Stitch, 1 Revert Machine (Snap Button), 1 Feed Of The Arm, 2 Cutting Machine, 2 Juki Bartake, 1 Juki Button Machine, 1 Eyelet, 4 Ramson Press, 1 Tagging Machine, 2 Fusing 450, 1 Sim Buster"
          />
        </div>
      </div>
    </section>
  );
};

export default Machinery;
