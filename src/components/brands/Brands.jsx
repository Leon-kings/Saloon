/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Grid } from '@mui/material';
import { brands } from '../../assets/data/data';

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
            staggerChildren: 0.2
          }
        }
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        }
      };
    
  return (
    <>
      <Box component="section" id="brands" className="w-full py-12 bg-gray-800">
      <Container maxWidth="lg">
        {/* Desktop View */}
        <Box className="hidden md:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Grid className='w-full grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
              {brands.map((brand) => (
                <Grid  key={`desktop-${brand.id}`}>
                  <motion.div variants={itemVariants}>
                    
                      {/* Hover Image */}
                      <Box 
                        className=" absolute inset-0 w-full h-32 bg-contain bg-no-repeat bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundImage: `url(${brand.image})` }}
                      />
                      {/* Default Image */}
                      <Box 
                        className="w-full h-32 bg-contain bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${brand.image})` }}
                      />
                   
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* Mobile View */}
        <Box className="md:hidden">
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <a href="#">
                  <Box 
                    className="w-full h-24 bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: "url('https://s.alicdn.com/@sc04/kf/Hf7fc298846564a26a57a193ed04af0837.jpg_720x720q50.jpg')" }}
                  />
                </a>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    </>
  )
}
