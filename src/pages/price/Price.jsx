/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { price } from "../../assets/data/data";

export default function Price() {
  return (
    <>
      <section className="w-full py-16 mt-10 mb-8 text-white dark:text-white bg-gray-800" id="price">
        <div className="w-full px-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
            {/* Left Column: Price Image */}
            <motion.div
              className="w-full price-img rounded-2xl"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="price-frame rounded-lg overflow-hidden">
                <div className=" h-96 bg-cover bg-center"></div>
              </div>
            </motion.div>

            {/* Right Column: Price Content */}
            <div className="w-full order-1 lg:order-2">
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="h2-title text-4xl font-bold mb-4">Prices</h2>
                <h3 className="h3-title text-2xl text-white">
                  Haircut Prices
                </h3>
              </motion.div>

              {/* Services Grid */}
              <div className="w-full mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {price.map((service) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: service.delay }}
                      className="w-full text-black bg-white rounded-lg shadow-lg p-6 text-center"
                    >
                      <img
                        src={service.image}
                        alt=""
                        className="w-full object-cover mx-auto"
                      />
                      <h3 className="text-xl font-semibold mt-4">
                        {service.title}
                      </h3>
                      <div className="hover mt-4">
                        <a
                          href="#"
                          className="price-tag text-blue-500 font-bold"
                        >
                          {service.price}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
