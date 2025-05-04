import React, { useState } from 'react';
import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
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
            onClick={() => navigate('/')}
            cursor="pointer"
          >
            Wet N Wild Water Toys
          </Text>
        </Flex>

        <Flex display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={5} h={5} color="white" /> : <HamburgerIcon w={6} h={6} color="white" />}
            variant="ghost"
            aria-label="Toggle Navigation"
            _hover={{ bg: 'primary.600' }}
            _active={{ bg: 'primary.800' }}
          />
        </Flex>

        <Stack direction="row" spacing={4} display={{ base: 'none', md: 'flex' }} align="center">
          <Button onClick={() => navigate('/')} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} fontSize="md">Home</Button>
          <Button onClick={() => navigate('/about')} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} fontSize="md">About</Button>
          <Button onClick={() => navigate('/services')} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} fontSize="md">Services</Button>
          <Button onClick={() => navigate('/faq')} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} fontSize="md">FAQ</Button>
          <Button onClick={() => navigate('/contact')} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} fontSize="md">Contact</Button>
          {isLoggedIn ? (
            <>
              <Button onClick={() => navigate('/dashboard')} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} fontSize="md">Dashboard</Button>
              <Button onClick={handleLogout} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} fontSize="md">Logout</Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate('/login')} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} fontSize="md">Login</Button>
              <Button onClick={() => navigate('/signup')} variant="solid" bg="secondary.500" _hover={{ bg: 'secondary.600' }} color="white" fontSize="md">Sign Up</Button>
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg="primary.700"
          p={4}
          display={{ md: 'none' }}
          borderBottom={1}
          borderStyle="solid"
          borderColor="primary.800"
        >
          <Button onClick={() => { navigate('/'); onToggle(); }} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} justifyContent="flex-start">Home</Button>
          <Button onClick={() => { navigate('/about'); onToggle(); }} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} justifyContent="flex-start">About</Button>
          <Button onClick={() => { navigate('/services'); onToggle(); }} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} justifyContent="flex-start">Services</Button>
          <Button onClick={() => { navigate('/faq'); onToggle(); }} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} justifyContent="flex-start">FAQ</Button>
          <Button onClick={() => { navigate('/contact'); onToggle(); }} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} justifyContent="flex-start">Contact</Button>
          {isLoggedIn ? (
            <>
              <Button onClick={() => { navigate('/dashboard'); onToggle(); }} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} justifyContent="flex-start">Dashboard</Button>
              <Button onClick={() => { handleLogout(); onToggle(); }} variant="ghost" color="white" _hover={{ bg: 'primary.600' }} justifyContent="flex-start">Logout</Button>
            </>
          ) : null}
        </Stack>
      </Collapse>
    </Box>
  );
}

export default Navbar;
