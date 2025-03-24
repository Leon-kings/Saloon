/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Link } from '@mui/material';
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  LinkedIn,
  GitHub
} from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook fontSize="small" />, name: 'Facebook' },
    { icon: <Twitter fontSize="small" />, name: 'Twitter' },
    { icon: <Google fontSize="small" />, name: 'Google' },
    { icon: <Instagram fontSize="small" />, name: 'Instagram' },
    { icon: <LinkedIn fontSize="small" />, name: 'LinkedIn' },
    { icon: <GitHub fontSize="small" />, name: 'GitHub' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box 
      component="footer" 
      className="bg-gray-900 text-center mt-8 rounded-2xl text-white dark:bg-neutral-600"
    >
      <Container maxWidth="lg" className="pt-9">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mb-9 flex gap-4 justify-center"
        >
          {socialLinks.map((social, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link 
                href="#" 
                className="mr-9 text-neutral-800 dark:text-neutral-200 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Copyright section */}
      <Box 
        component="div"
        className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} 
        
            LD
         
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;