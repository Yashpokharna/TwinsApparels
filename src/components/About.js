import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="container flex flex-col items-center px-4 mx-auto md:px-16 lg:flex-row lg:gap-20 gap-14"
            id="About">
      <div className="flex flex-col flex-1 gap-2">
        <span className="block text-3xl font-semibold tracking-widest uppercase text-rose-600">
          ABOUT US
        </span>
        {/* <h2 className="my-3 text-3xl font-bold capitalize md:text-4xl xl:text-5xl">
          Smart Jackpots that you may love this anytime & anywhere
        </h2> */}
        <p className="text-lg leading-loose">
          Twins Apparels stands as a beacon of excellence in the realm of ready-to-wear manufacturing. Renowned for our steadfast commitment to quality, professionalism, and trust, we epitomize sophistication through a fusion of state-of-the-art technology and the craftsmanship of skilled artisans. <br/>
          At Twins Apparels, we don't merely create garments; we craft experiences tailored to our client's exact needs. Our enduring partnerships are built on a foundation of perfection, ensuring that every piece that bears our name is a testament to our dedication to excellence.
        </p>
        <button className="px-8 py-3 mt-5 text-sm font-semibold text-white border-2 border-transparent rounded-full w-fit md:text-base hover:border-2 md:px-10 bg-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:shadow-rose-600 hover:shadow-2xl">
          <Link href="/" target="_blank">
          Know More
          </Link>
        </button>
      </div>

      <div className="relative flex-1 w-full">
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
