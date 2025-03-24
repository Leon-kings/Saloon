/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../assets/data/data";

export default function Testimony() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full mt-10 mb-8 py-16 dark:text-white text-white bg-gray-800">
        <div className="w-full px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="h2-title text-4xl font-bold mb-4">They said</h2>
              <h3 className="h3-title text-2xl text-gray-700">Testimonials</h3>
            </motion.div>
          </div>

          {/* Testimonials Slider */}
          <div className="testimonial-section">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.8 }}
                className=" bg-white rounded-lg shadow-lg p-8 mx-auto max-w-2xl text-center"
              >
                <img
                  src={testimonials[currentIndex].image}
                  className="w-20  justify-items-center rounded-full"
                  alt=""
                />
                <div className="overflow-text">
                  <p className="text-gray-700">
                    {testimonials[currentIndex].text}
                  </p>
                </div>
                <h3 className="text-xl text-black font-semibold mt-4">
                  - {testimonials[currentIndex].name}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
