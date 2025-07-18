import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-1 lg:flex-row sm:flex-col sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="mb-4 text-lg font-semibold md:text-xl">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="container px-5 mx-auto md:px-16" id="Products">
      <span className="text-center service-name ">OUR PRODUCTS</span>
      <h2 className="text-center title ">Style. Comfort. Quality. Always.</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Formal Wear"
          desc="• Men’s Formal Trouser • Women Formal Trouser • Men’s Formal Shirts • Men & Women Blazer • Uniform Blazer."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Casual Wear"
          desc="• Men’s Cotton Trouser • Chinos • Men’s Five Pocket • Men’s Flexi Waist Trouser • Draw Cord Trouser • Men’s Casual Shirts • Shorts for Men & Women"
        />
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Uniform & Workwear"
          desc="• Uniform/Cargo Pants/Work Wear • Uniform Blazer"
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Stretch & Comfort Wear"
          desc="• Men’s Flexi Waist Trouser • Draw Cord Trouser • Shorts for Men & Women"
        />
      </div>
    </section>
  );
};

export default Products;
