/* eslint-disable no-unused-vars */
import React from "react";
import { service } from "../../assets/data/data";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function ServicesCategory() {
  return (
    <>
      <section
        className="w-full mt-10 bg-gray-800 py-16"
        id="service-provide"
      >
        <div className="container mx-auto px-4">
          <div className="row flex flex-col lg:flex-row gap-8">
            {service.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="w-full lg:w-1/3"
              >
                <Card className="h-full">
                  <CardContent className="text-center">
                    {/* Service Image */}
                    <Box
                      className="h-44 w-full object-cover rounded-2xl mx-auto bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></Box>

                    {/* Service Title */}
                    <Typography
                      variant="h5"
                      component="h3"
                      className="mt-4 font-bold"
                    >
                      {service.title}
                    </Typography>

                    {/* Service Description */}
                    <Typography variant="body1" className="mt-4 text-gray-700">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
