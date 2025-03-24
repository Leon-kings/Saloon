/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Grid, Typography } from "@mui/material";
import { galleryImages } from "../../assets/data/data";
// If using Next.js, otherwise use regular img tag

export default function Gallery() {
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <>
      <Box
        component="section"
        id="gallery"
        className="w-full py-12 bg-gray-800 mt-8 mb-8"
      >
        <Container className="w-full">
          <Grid container justifyContent="center" className="mb-12">
            <Grid className="text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                className="mb-4"
              >
                <Typography
                  variant="h3"
                  component="h3"
                  className="text-3xl md:text-4xl font-light"
                >
                  gallery
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          {/* Desktop Gallery */}
          <Box className="hidden md:block w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              className="w-full"
              variants={imageVariants}
            >
              <Grid className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                {galleryImages.map((image) => (
                  <Grid
                    item
                    md={image.col}
                    key={`desk-${image.id}`}
                    style={{
                      position: image.position || "relative",
                      top: image.top,
                      left: image.left,
                      zIndex: image.zIndex,
                    }}
                    className={image.offset ? "md:mt-8" : ""}
                  >
                    <Box className="gallery-img overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <a href={image.src} className="block">
                        <Box
                          className="w-full h-64 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                          style={{ backgroundImage: `url(${image.src})` }}
                        />
                      </a>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>

          {/* Mobile Gallery */}
          <Box className="md:hidden">
            <Grid container spacing={4}>
              {galleryImages
                .filter((img) => img.mobile)
                .map((image) => (
                  <Grid item xs={10} key={`mobile-${image.id}`}>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={imageVariants}
                      className="gallery-img overflow-hidden rounded-lg shadow-lg"
                    >
                      <a href={image.src} className="block">
                        <Box
                          className="w-full h-64 bg-cover bg-center"
                          style={{ backgroundImage: `url(${image.src})` }}
                        />
                      </a>
                    </motion.div>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
