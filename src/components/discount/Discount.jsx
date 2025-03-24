/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

export const Discount = () => {
  return (
    <section
      className="w-full py-20 bg-cover bg-center relative"
      id="discount"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="row flex flex-col lg:flex-row items-center">
          {/* Left Column: Empty (for spacing) */}
          <div className="col-lg-6 w-full lg:w-1/2"></div>

          {/* Right Column: Discount Text */}
          <div className="col-lg-6 w-full lg:w-1/2 text-center">
            <motion.div
              className="discount-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="ml4 text-5xl lg:text-6xl font-bold text-white">
                <motion.span
                  className="letters letters-1 block"
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Skin Care
                </motion.span>
                <motion.span
                  className="letters letters-2 block text-6xl lg:text-7xl my-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  50%
                </motion.span>
                <motion.span
                  className="letters letters-3 block"
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Off!
                </motion.span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

