/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Grid } from "@mui/material";
import { brands } from "../../assets/data/data";

export default function Brands() {
  const containerVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Box component="section" id="brands" className="w-full rounded-2xl mb-8 py-12 bg-gray-800">
        <Container maxWidth="lg">
          {/* Desktop View */}
          <Box className="hidden md:block">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {brands.map((brand) => (
                  <motion.div
                    key={`desktop-${brand.id}`}
                    variants={itemVariants}
                  >
                    <Box className="relative group w-full h-32 rounded-2xl overflow-hidden">
                      {/* Hover Image */}
                      <Box
                        className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundImage: `url(${brand.image})` }}
                      />
                      {/* Default Image */}
                      <Box
                        className="w-full h-full bg-contain bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${brand.image})` }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Box>

          {/* Mobile View */}
          <Box className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {brands.map((brand) => (
                  <div className="w-full grid" key={brand.id}>
                    <Box
                      className="w-full h-24 rounded-2xl bg-contain bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url(${brand.image})`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </>
  );
}
