import React from "react";
import Hero from "../../components/hero/Hero";
import { Discount } from "../../components/discount/Discount";
import StatsCounter from "../count/Count";
import Services from "../services/Services";
import ServicesCategory from "../serv-category/ServicesCategory";
import Price from "../price/Price";
import Testimony from "../testimony/Testimony";
import Gallery from "../../components/gallery/Gallery";
import Brands from "../../components/brands/Brands";
import WorkingHrs from "../../components/hrs/WorkingHrs";

export default function Home() {
  return (
    <>
      <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="w-full mt-20">
          <Hero />
        </div>
        <div className="w-full">
          <StatsCounter />
        </div>
        <div className="w-full">
          <Services />
        </div>{" "}
        <div className="w-full">
          <Discount />
        </div>
        <div className="w-full">
          <ServicesCategory />
        </div>
        <div className="w-full">
          <Price />
        </div>
        <div className="w-full">
          <Testimony />
        </div>
        <div className="w-full">
          <Gallery />
        </div>
        <div className="w-full">
          <Brands />
        </div>
        <div className="w-full">
          <WorkingHrs />
        </div>
      </div>
    </>
  );
}
