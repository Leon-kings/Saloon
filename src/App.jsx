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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/index/Home";
import SignIn from "./pages/contact/SignIn";

export default function App() {
  return (
    <>
      <div className="w-full">
        <BrowserRouter>
          {" "}
          <Navbar />
          <Routes>
            {" "}
            <Route element={<AboutUs />} path="/A-673" />
            <Route element={<Services />} path="/S-849" />
            <Route element={<Home />} path="/" />
            <Route element={<ServicesCategory />} path="/C-926" />
            <Route element={<SignIn />} path="/S-906" />
            {" "}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>{" "}
    </>
  );
}
