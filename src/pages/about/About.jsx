/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs = () => {
  return (
    <section className="about-us py-16 bg-gray-800" id="about-us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* Left Column: About Content */}
          <motion.div
            className=" w-full "
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="about-content">
              <h2 className="h2-title text-4xl font-bold mb-4">About Us</h2>
              <h3 className="h3-title text-2xl font-semibold mb-4">Our History</h3>
              <div className="overflow-text">
                <p className="text-white leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum quis sem sed pharetra. Morbi tempus lobortis nunc non commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi enim orci,
                  commodo quis lacinia ac, scelerisque at dui. Aliquam at augue et nulla euismod aliquet ut a nisi. Phasellus a neque eleifend, lacinia felis ut, vestibulum mi. Aliquam interdum, velit non elementum pulvinar, metus neque lobortis eros, sed
                  sodales magna justo quis lectus. Sed consequat leo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Image */}
          <motion.div
            className="w-full "
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="about-frame">
              <div
                className="about-image h-96 bg-cover bg-center rounded-lg shadow-lg"
                
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

