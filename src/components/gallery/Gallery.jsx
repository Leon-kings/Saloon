/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Grid, Typography } from "@mui/material";
import { galleryImages } from "../../assets/data/data";
// If using Next.js, otherwise use regular img tag

export default function Gallery() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <>
      <Box
        component="section"
        id="gallery"
        className="w-full py-12 rounded-2xl bg-gray-800 mt-8 mb-8"
      >
        <Container maxWidth={false} className="px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <Box className="w-full flex justify-center mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={titleVariants}
              className="text-center"
            >
              <Typography
                variant="h3"
                component="h3"
                className="text-3xl md:text-4xl font-light text-white"
              >
                Gallery
              </Typography>
            </motion.div>
          </Box>

          {/* Desktop Gallery */}
          <Box className="hidden md:block w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="w-full"
            >
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image) => (
                  <motion.div
                    key={`desk-${image.id}`}
                    variants={imageVariants}
                    className={`relative ${image.offset ? "lg:mt-8" : ""}`} >
                    <Box className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <a href={image.src} className="block h-full">
                        <Box
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                          style={{ backgroundImage: `url(${image.src})` }}
                        />
                      </a>
                    </Box>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Box>

          {/* Mobile Gallery */}
          <Box className="md:hidden w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <div className="w-full grid grid-cols-1 gap-4">
                {galleryImages
                  .filter((img) => img.mobile)
                  .map((image) => (
                    <motion.div
                      key={`mobile-${image.id}`}
                      variants={imageVariants}
                    >
                      <Box className="w-full aspect-square overflow-hidden rounded-lg shadow-lg">
                        <a href={image.src} className="block h-full">
                          <Box
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${image.src})` }}
                          />
                        </a>
                      </Box>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </>
  );
}
