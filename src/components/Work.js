import Image from "next/image";

const WorkCard = ({ num, title }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="px-4 py-4 mx-auto text-3xl font-bold text-blue-800 bg-white rounded-full md:mx-0 w-fit">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      {/* <p className="leading-loose">
        Get your blood tests delivered at home collect a sample from the your
        blood tests.
      </p> */}
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="container flex flex-col gap-10 px-5 py-12 text-center lg:gap-16 md:px-16 sm:py-20 md:py-36">
        <div>
          <span className="block text-lg font-semibold tracking-widest text-center uppercase">
            OPERATION&apos;S OVERVIEW
          </span>
          <h2 className="my-3 text-2xl font-semibold text-center sm:text-4xl ">
            Let&apos;s see how it works
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
          <div className="relative mx-14">
            <WorkCard num="01" title="Yarn Sourcing" />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative mx-14">
            <WorkCard
              num="02" title="Twisting"
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative mx-14">
            <WorkCard num="03" title="Dyeing" />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <div className="mx-14">
          <WorkCard num="04" title="Winding"/>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
          <div className="relative mx-14">
            <WorkCard num="05" title="Weaving" />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative mx-14">
            <WorkCard
              num="06" title="Fabric Checking"
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative mx-14">
            <WorkCard num="07" title="Stitching" />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <div className="mx-14">
          <WorkCard num="08" title="Inspection" />
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
          <div className="relative mx-14">
            <WorkCard num="09" title="Trimming & Checking" />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative mx-14">
            <WorkCard
              num="10" title="Packing"
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative mx-14">
            <WorkCard num="11" title="Inspection" />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <div className="mx-14">
          <WorkCard num="12" title="Final Shipment" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
