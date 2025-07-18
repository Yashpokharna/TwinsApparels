import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container px-5 mx-auto md:px-16" id="features">
      <span className="text-center service-name">PLANT AND MACHINERY</span>
      <h2 className="text-center title">Modern Machines, Maximum Efficiency</h2>

      <div className="grid gap-8 text-center mt-11 md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Production"
          desc="With the help of our cutting-edge technology and more than great employees, we can produce over 25k ready- to-wear garments."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Employees"
          desc="Our team comprises over 110 skilled floor operators, along with dedicated staff members who cater to every requirement, guaranteeing the delivery of flawless products."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Machinery"
          desc="As an industry leader, we boast over 100 versatile machines that can transform any design into reality, providing innovative precision for limitless creativity."
        />
        {/* <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        /> */}
      </div>
    </section>
  );
};

export default Features;
