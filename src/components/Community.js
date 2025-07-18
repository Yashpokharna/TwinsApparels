import Image from "next/image";

const Card = ({ imgSrc, title }) => {
  return (
    <section>
    <div className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt="community image"
        className="mx-auto"
      />
      <h2 className="text-xl font-medium">{title}</h2>
      {/* <p className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
        tempor.
      </p> */}
    </div>
    </section>
  );
};

const Community = () => {
  return (
    <section className="container px-16 mx-auto lg:px-32">
      <div className="mb-16">
        <span className="text-center service-name ">BUSINESS TENETS</span>
        <h2 className="text-center title ">Driven By Core Values</h2>
      </div>
      <div className="grid gap-8 mx-auto text-center sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:gap-16">
        <Card imgSrc="/community/2.svg" title="Partner with clients to offer trend-right designs, and innovative constructions at the right value." />
        <Card imgSrc="/community/1.svg" title="Speed to market, flexibility to change and adapt with the industry needs." />
        <Card imgSrc="/community/3.svg" title="Consistently meet and beat the market expectations for quality and value." />
        {/* <Card imgSrc="/community/3.svg" title="Plan ahead for adequate capacity expansion at the right cost to service growth and manage productivity of resources in a dynamic global economy." /> */}
      </div>
    </section>
  );
};

export default Community;
