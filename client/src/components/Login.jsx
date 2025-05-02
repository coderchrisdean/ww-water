import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Container, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Login({ setCurrentPage, handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    handleLogin(username, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="container.sm" py={10}>
        <Box
          p={8}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg="white"
          width="full"
          maxW={{ base: '90%', md: '400px' }}
          mx="auto"
        >
          <VStack spacing={4} align="flex-start">
            <Heading color="primary.700" size="lg" textAlign="center" width="full">Login</Heading>
            <Text fontSize="md" color="gray.600" textAlign="center" width="full">
              Sign in to access your dashboard and rent jet skis!
            </Text>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                focusBorderColor="primary.500"
                size="lg"
                variant="outline"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                focusBorderColor="primary.500"
                size="lg"
                variant="outline"
              />
            </FormControl>
            <Button
              onClick={handleSubmit}
              colorScheme="primary"
              size="lg"
              width="full"
              bg="primary.700"
              _hover={{ bg: 'primary.800', transform: 'scale(1.02)' }}
              _active={{ bg: 'primary.900' }}
              transition="all 0.2s ease-in-out"
            >
              Login
            </Button>
            <Button
              onClick={() => setCurrentPage('signup')}
              variant="outline"
              colorScheme="primary"
              size="lg"
              width="full"
              borderColor="primary.700"
              color="primary.700"
              _hover={{ bg: 'primary.50' }}
            >
              Sign Up
            </Button>
          </VStack>
        </Box>
      </Container>
    </motion.div>
  );
}

export default Login;
