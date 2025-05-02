import React, { useState } from 'react';
import { Box, Flex, Heading, Button, HStack, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Navbar({ currentPage, setCurrentPage, isLoggedIn, handleLogout }) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleNavClick = (page) => {
    setCurrentPage(page);
    onClose(); // Close menu on navigation
  };

  // Animation variants for menu fade-in
  const fadeIn = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      <Box bg="primary.700" color="white" p={4} shadow="md">
        <Flex container mx="auto" alignItems="center" justifyContent="space-between" maxW="container.xl">
          <Heading
            size="lg"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ color: 'primary.300' }}
            transition="color 0.2s ease-in-out"
            onClick={() => handleNavClick('home')}
          >
            Wet N Wild Water Toys
          </Heading>

          {/* Hamburger Icon for Mobile */}
          {isMobile && (
            <Button
              aria-label="Toggle navigation menu"
              onClick={onToggle}
              bg="transparent"
              color="white"
              _hover={{ bg: 'primary.600' }}
              size="md"
              p={0}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          )}

          {/* Navigation Links - Desktop */}
          {!isMobile && (
            <HStack spacing={6} alignItems="center">
              <Button variant="ghost" colorScheme="whiteAlpha" onClick={() => handleNavClick('home')} fontWeight={currentPage === 'home' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>Home</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" onClick={() => handleNavClick('about')} fontWeight={currentPage === 'about' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>About</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" onClick={() => handleNavClick('services')} fontWeight={currentPage === 'services' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>Services</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" onClick={() => handleNavClick('faq')} fontWeight={currentPage === 'faq' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>FAQ</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" onClick={() => handleNavClick('contact')} fontWeight={currentPage === 'contact' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>Contact</Button>
              {isLoggedIn ? (
                <>
                  <Button variant="ghost" colorScheme="whiteAlpha" onClick={() => handleNavClick('dashboard')} fontWeight={currentPage === 'dashboard' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>Dashboard</Button>
                  <Button onClick={handleLogout} bg="white" color="primary.700" px={4} py={2} rounded="lg" _hover={{ bg: 'gray.100' }}>Logout</Button>
                </>
              ) : (
                <Button onClick={() => handleNavClick('login')} bg="white" color="primary.700" px={4} py={2} rounded="lg" _hover={{ bg: 'gray.100' }}>Login</Button>
              )}
            </HStack>
          )}
        </Flex>

        {/* Mobile Menu */}
        {isMobile && isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{ backgroundColor: 'rgba(229, 62, 62, 0.95)', padding: '1rem', marginTop: '1rem', borderRadius: '0.5rem', width: '100%', maxHeight: '50vh', overflowY: 'auto' }}
          >
            <Flex direction="column" alignItems="center" gap={3}>
              <Button variant="ghost" colorScheme="whiteAlpha" w="full" onClick={() => handleNavClick('home')} fontWeight={currentPage === 'home' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>Home</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" w="full" onClick={() => handleNavClick('about')} fontWeight={currentPage === 'about' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>About</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" w="full" onClick={() => handleNavClick('services')} fontWeight={currentPage === 'services' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>Services</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" w="full" onClick={() => handleNavClick('faq')} fontWeight={currentPage === 'faq' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>FAQ</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" w="full" onClick={() => handleNavClick('contact')} fontWeight={currentPage === 'contact' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>Contact</Button>
              {isLoggedIn ? (
                <>
                  <Button variant="ghost" colorScheme="whiteAlpha" w="full" onClick={() => handleNavClick('dashboard')} fontWeight={currentPage === 'dashboard' ? 'bold' : 'normal'} _hover={{ color: 'primary.300' }}>Dashboard</Button>
                  <Button onClick={handleLogout} bg="white" color="primary.700" w="full" py={2} rounded="lg" _hover={{ bg: 'gray.100' }}>Logout</Button>
                </>
              ) : (
                <Button onClick={() => handleNavClick('login')} bg="white" color="primary.700" w="full" py={2} rounded="lg" _hover={{ bg: 'gray.100' }}>Login</Button>
              )}
            </Flex>
          </motion.div>
        )}
      </Box>
    </motion.nav>
  );
}

export default Navbar;
