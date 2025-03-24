import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { AboutUs } from "./pages/about/About";
import { Discount } from "./components/discount/Discount";
import Counter from "./pages/count/Count";
import Services from "./pages/services/Services";
import ServicesCategory from "./pages/serv-category/ServicesCategory";
import Price from "./pages/price/Price";
import Testimony from "./pages/testimony/Testimony";
import WorkingHrs from "./components/hrs/WorkingHrs";
import Gallery from "./components/gallery/Gallery";
import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Discount />
      <Counter />
      <Services />
      <ServicesCategory />
      <Price/>
      <Testimony/>
      <WorkingHrs/>
      <Gallery/>
      <Brands/>
      <Footer/>
    </>
  );
}
