import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Container, Card, CardBody, CardHeader, CardFooter, Divider, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Login({ setCurrentPage, handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    handleLogin(username, password);
  };

  // Animation variants for staggered fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Container maxW="container.sm" py={{ base: 6, md: 12 }}>
        <motion.div variants={fadeInUp}>
          <Card
            borderRadius="xl"
            boxShadow="2xl"
            overflow="hidden"
            border="1px solid"
            borderColor="gray.200"
            bg="white"
            maxW={{ base: '90%', md: '400px' }}
            mx="auto"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: 'translateY(-5px)', boxShadow: '3xl' }}
          >
            <CardHeader bg="primary.700" color="white" py={6} textAlign="center">
              <Heading size="lg" fontWeight="bold">Welcome Back</Heading>
              <Text mt={2} fontSize="md">Sign in to rent jet skis!</Text>
            </CardHeader>
            <Divider borderColor="gray.300" />
            <CardBody p={8}>
              {error && (
                <Box mb={4} p={3} bg="red.100" borderRadius="md" textAlign="center">
                  <Text color="red.700" fontWeight="medium">{error}</Text>
                </Box>
              )}
              <VStack spacing={5} align="stretch">
                <FormControl id="username">
                  <FormLabel color="gray.700" fontWeight="medium">Username</FormLabel>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    focusBorderColor="primary.500"
                    size="lg"
                    variant="outline"
                    borderRadius="md"
                    borderColor="gray.300"
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ boxShadow: 'outline' }}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel color="gray.700" fontWeight="medium">Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    focusBorderColor="primary.500"
                    size="lg"
                    variant="outline"
                    borderRadius="md"
                    borderColor="gray.300"
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ boxShadow: 'outline' }}
                  />
                </FormControl>
              </VStack>
            </CardBody>
            <CardFooter p={6} flexDirection="column" alignItems="center" gap={3}>
              <Button
                onClick={handleSubmit}
                colorScheme="primary"
                size="lg"
                width="full"
                bg="primary.700"
                _hover={{ bg: 'primary.800', transform: 'scale(1.03)' }}
                _active={{ bg: 'primary.900' }}
                transition="all 0.2s ease-in-out"
                borderRadius="md"
                fontWeight="bold"
                boxShadow="md"
              >
                Login
              </Button>
              <Button
                onClick={() => setCurrentPage('signup')}
                variant="outline"
                colorScheme="primary"
                size="md"
                width="full"
                borderColor="primary.700"
                color="primary.700"
                _hover={{ bg: 'primary.50', transform: 'scale(1.02)' }}
                transition="all 0.2s ease-in-out"
                borderRadius="md"
              >
                Sign Up
              </Button>
              <Center mt={2}>
                <Text fontSize="sm" color="gray.500">Forgot Password?</Text>
              </Center>
            </CardFooter>
          </Card>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default Login;
