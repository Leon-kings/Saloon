/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function SignIn() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
  
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        message: ''
      },
      validationSchema: Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required')
      }),
      onSubmit: async (values, { resetForm }) => {
        setIsSubmitting(true);
        try {
          // Replace with your actual API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Form submitted:', values);
          setSubmitSuccess(true);
          resetForm();
          setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
          console.error('Submission error:', error);
        } finally {
          setIsSubmitting(false);
        }
      }
    });
  return (
    <>
       <div className="w-full mt-8 rounded-2xl bg-gray-800 text-white">
      {/* Footer Top */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <motion.div 
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <div 
                className="signin w-full h-full bg-cover bg-center"
                
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg"
              id="contact"
            >
              <Box className="mb-8">
                <Typography variant="h4" component="h2" className="font-bold mb-2">
                  Contact
                </Typography>
          
              </Box>

              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  className="bg-gray-700 rounded-lg"
                  InputProps={{
                    className: "text-white"
                  }}
                  InputLabelProps={{
                    className: "text-gray-400"
                  }}
                />

                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  className="bg-gray-700 rounded-lg"
                  InputProps={{
                    className: "text-white"
                  }}
                  InputLabelProps={{
                    className: "text-gray-400"
                  }}
                />

                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  className="bg-gray-700 rounded-lg"
                  InputProps={{
                    className: "text-white"
                  }}
                  InputLabelProps={{
                    className: "text-gray-400"
                  }}
                />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    className="w-full py-3"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 bg-green-500 text-white rounded text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
