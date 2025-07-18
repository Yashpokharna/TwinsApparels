import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-full gap-10 text-center sm:gap-20 mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="container px-5 mx-auto md:w-2/3 lg:w-1/2 md:px-16">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-5xl font-bold">
          <p>Precision In Every Thread, </p>
          <p>Excellence In Every Roll </p>
        </h1>
        <p className="my-4 text-lg leading-normal sm:leading-loose md:my-6">
          We manufacture high-quality textiles with consistency, care, and craftsmanship.
          Trusted by industries that demand nothing but the best.
        </p>
        <button className="px-8 py-3 text-sm font-semibold text-white border-2 border-transparent rounded-full md:text-base hover:border-2 md:px-10 bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600">
          <Link href="/Catalogue.pdf" target="_blank">
            Catalogue
          </Link>
        </button>
      </div>
      <div className="relative w-full">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src="/hero.png"
            width={700}
            height={700}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
