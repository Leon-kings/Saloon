/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Close, RemoveRedEye } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { services } from "../../assets/data/data";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // Track the selected service for the modal
  const visibleServices = showAll ? services : services.slice(0, 4); // Show only 4 items initially

  // Open modal with service details
  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedService(null);
  };
  return (
    <>
 <section className="w-full mt-8 mb-8 p-10 justify-center bg-gray-800 ">
      <div className="w-full px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300"
          >
            Explore Our Services
          </motion.h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}>
                <h3 className="absolute top-4 left-4 text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                  {service.number}
                </h3>
              </div>
              <div className="p-6 flex justify-between items-center">
                <p className="text-xl font-semibold">{service.title}</p>
                <button onClick={() => handleOpenModal(service)} className="text-blue-500">
                  <RemoveRedEye fontSize="large" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More / View Less Button */}
        {services.length > 4 && (
          <div className="w-full text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

        {/* Modal for Service Details */}
        <Modal open={!!selectedService} onClose={handleCloseModal}>
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
            {selectedService && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-black">{selectedService.title}</h2>
                <img src={selectedService.image} alt="" className="w-full h-48 object-cover mb-4 rounded-lg" />
                <p className="text-gray-700">{selectedService.description}</p>
                <button
                  onClick={handleCloseModal}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
                >
                  <Close fontSize="large" />
                </button>
              </>
            )}
          </Box>
        </Modal>
      </div>
    </section>
    </>
  );
}
