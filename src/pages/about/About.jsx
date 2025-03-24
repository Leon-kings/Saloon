/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <section className="w-full rounded-2xl mb-6 py-16 bg-gray-800">
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

              <h3 className="h3-title text-2xl font-semibold mb-4">
                Our History
              </h3>
              <div className="overflow-text">
                <p className="text-white leading-relaxed">
                  A hairstyle, hairdo, haircut, or coiffure refers to the
                  styling of hair, usually on the human head but sometimes on
                  the face or body. The fashioning of hair can be considered an
                  aspect of personal grooming, fashion, and cosmetics, although
                  practical, cultural, and popular considerations also influence
                  some hairstyles.
                </p>
                <p className="text-red-800 font-medium p-4">Roman Empire and Middle Ages</p>
                <p>
                  Between 27 BC and 102 AD, in Imperial Rome, women wore their
                  hair in complicated styles: a mass of curls on top, or in rows
                  of waves, drawn back into ringlets or braids. Eventually noble
                  women's hairstyles grew so complex that they required daily
                  attention from several enslaved people and a stylist in order
                  to be maintained. The hair was often lightened using wood ash,
                  unslaked lime and sodium bicarbonate, or darkened with copper
                  filings, oak-apples or leeches marinated in wine and vinegar.
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
              <div className="about-image h-96 bg-cover bg-center rounded-lg shadow-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
