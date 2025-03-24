/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <>
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        id="main-banner"
      >
        <div className="w-full px-4">
          <div className="row flex justify-center">
            <div className="w-full">
              <div className="banner-content text-center">
                {/* Responsive Heading */}
                <motion.h1
                  className="h1-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-wrapper">
                    <b className="letters">Our Beauty Center</b>
                  </span>
                </motion.h1>

                {/* Responsive Button */}
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className="sec-btn text-sm sm:text-base md:text-lg"
                    onClick={() => alert("Book an Appointment")}
                  >
                    Book an Appointment
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
