import React from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Center } from '@chakra-ui/react';

export default function ClerkAuth() {
  return (
    <Center minH="100vh" bg="blue.50">
      <Box bg="white" p={8} rounded="lg" shadow="lg" minW={{ base: '90vw', md: '400px' }}>
        <Box mb={6} textAlign="center">
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Montserrat, sans-serif', color: '#0072A0' }}>
            Sign in to Wet N Wild Water Toys
          </span>
        </Box>
        <SignIn />
      </Box>
    </Center>
  );
}
