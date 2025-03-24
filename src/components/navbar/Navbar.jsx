/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/images/logo/images.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/S-849' },
    { name: 'About', path: '/A-673' },
    { name: 'Category', path: '/C-926' },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
    <div className="w-full mb-16">
    <Box className='w-full '
      component="header" 
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1100,
        backgroundColor: 'background.paper',
        boxShadow: 1,
        py: 1
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          {/* Logo */}
          <Box sx={{ width: 260 }}>
           <Link to={'/'}>
              <Box 
                component="img"
                src={logo}
                alt=""
                sx={{
                  height: 60,
                  display: theme.palette.mode === 'light' ? 'block' : 'none'
                }}
              />
              <Box 
                component="img"
                src={logo}
                alt=""
                sx={{
                  height: 50,
                  display: theme.palette.mode === 'dark' ? 'block' : 'none'
                }}
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Box component="nav">
              <Box component="ul" sx={{ display: 'flex', gap: 4 }}>
                {navItems.map((item) => (
                  <ListItem key={item.name} NavLink={item.path}>
                    {item.name}
                  </ListItem>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, ml: 4 }}>
              <Button 
                href="/#" 
                variant="text"
                sx={{ 
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Sign In
              </Button>
              <Button 
                href="/#" 
                variant="contained"
                sx={{ 
                  backgroundColor: 'primary.main',
                  '&:hover': { backgroundColor: 'primary.dark' }
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Button 
              onClick={() => setOpen(!open)}
              sx={{ 
                minWidth: 'auto',
                p: 1,
                color: 'text.primary'
              }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </Box>
        </Box>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && isMobile && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
                borderRadius: theme.shape.borderRadius,
                overflow: 'hidden',
                zIndex: 1200
              }}
            >
              <Box component="nav" sx={{ p: 2 }}>
                <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {navItems.map((item) => (
                    <ListItem key={item.name} NavLink={item.path} mobile>
                      {item.name}
                    </ListItem>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                  <Button 
                    href="/#" 
                    variant="text"
                    fullWidth
                    sx={{ 
                      color: 'text.primary',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    href="/#" 
                    variant="contained"
                    fullWidth
                    sx={{ 
                      backgroundColor: 'primary.main',
                      '&:hover': { backgroundColor: 'primary.dark' }
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
    </div>
    </>
  );
};

const ListItem = ({ children, NavLink, mobile = false }) => {
  return (
    <Box component="li" sx={{ listStyle: 'none' }}>
      <Button
        href={NavLink}
        fullWidth={mobile}
        sx={{
          justifyContent: mobile ? 'flex-start' : 'center',
          px: mobile ? 2 : 0,
          py: 1,
          color: 'text.secondary',
          '&:hover': {
            color: 'primary.main',
            backgroundColor: 'transparent'
          }
        }}
      >
        <Typography variant="body1" component="span">
          {children}
        </Typography>
      </Button>
    </Box>
  );
};

export default Navbar;