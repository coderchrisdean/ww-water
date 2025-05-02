import React, { useState } from 'react';
import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Navbar({ setCurrentPage, isLoggedIn, handleLogout }) {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(page);
    setCurrentPage(page);
  };

  return (
    <Box>
      <Flex
        bg="primary.700"
        color="white"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4, md: 10 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="primary.800"
        align="center"
        justify="space-between"
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        position="sticky"
        top="0"
        zIndex="50"
        boxShadow="md"
      >
        <Flex align="center">
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            onClick={() => handleNavigation('/')}
            cursor="pointer"
          >
            Wet N Wild Water Toys
          </Text>
        </Flex>

        <Flex display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
            color="white"
          />
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} align="center">
          <Stack direction="row" spacing={7} align="center">
            <Text onClick={() => handleNavigation('/')} cursor="pointer">Home</Text>
            <Text onClick={() => handleNavigation('/about')} cursor="pointer">About</Text>
            <Text onClick={() => handleNavigation('/services')} cursor="pointer">Services</Text>
            <Text onClick={() => handleNavigation('/faq')} cursor="pointer">FAQ</Text>
            <Text onClick={() => handleNavigation('/contact')} cursor="pointer">Contact</Text>
            {isLoggedIn ? (
              <>
                <Text onClick={() => handleNavigation('/dashboard')} cursor="pointer">Dashboard</Text>
                <Button
                  as={Button}
                  variant="link"
                  color="white"
                  onClick={() => {
                    handleLogout();
                    handleNavigation('/');
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Text onClick={() => handleNavigation('/login')} cursor="pointer">Login</Text>
                <Button
                  as={Button}
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize="sm"
                  fontWeight={600}
                  color="primary.700"
                  bg="white"
                  onClick={() => handleNavigation('/signup')}
                  _hover={{
                    bg: 'gray.100',
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg="primary.700"
          p={4}
          display={{ md: 'none' }}
          color="white"
        >
          <Stack>
            <Text onClick={() => { handleNavigation('/'); onToggle(); }} cursor="pointer">Home</Text>
            <Text onClick={() => { handleNavigation('/about'); onToggle(); }} cursor="pointer">About</Text>
            <Text onClick={() => { handleNavigation('/services'); onToggle(); }} cursor="pointer">Services</Text>
            <Text onClick={() => { handleNavigation('/faq'); onToggle(); }} cursor="pointer">FAQ</Text>
            <Text onClick={() => { handleNavigation('/contact'); onToggle(); }} cursor="pointer">Contact</Text>
            {isLoggedIn ? (
              <>
                <Text onClick={() => { handleNavigation('/dashboard'); onToggle(); }} cursor="pointer">Dashboard</Text>
                <Text
                  onClick={() => {
                    handleLogout();
                    handleNavigation('/');
                    onToggle();
                  }}
                  cursor="pointer"
                >
                  Logout
                </Text>
              </>
            ) : (
              <>
                <Text onClick={() => { handleNavigation('/login'); onToggle(); }} cursor="pointer">Login</Text>
                <Text onClick={() => { handleNavigation('/signup'); onToggle(); }} cursor="pointer">Sign Up</Text>
              </>
            )}
          </Stack>
        </Stack>
      </Collapse>
    </Box>
  );
}

export default Navbar;
