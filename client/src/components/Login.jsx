import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Container, useToast, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

import { useLocation, useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [accountCreatedMsg, setAccountCreatedMsg] = useState(false);

  React.useEffect(() => {
    if (location.state && location.state.accountCreated) {
      setAccountCreatedMsg(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        // Decode JWT to check role
        const [, payloadBase64] = data.token.split('.');
        const payload = JSON.parse(atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/')));
        if (payload.role === 'admin') {
          const adminHost = process.env.REACT_APP_ADMIN_PANEL_HOST || 'http://localhost';
          const adminPort = process.env.REACT_APP_ADMIN_PANEL_PORT || '3001';
          const adminUrl = `${adminHost.replace(/\/$/, '')}:${adminPort}`;
          window.location.href = adminUrl;
        } else {
          navigate('/dashboard');
        }
        toast({
          title: 'Login Successful',
          description: "You've logged in successfully.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top'
        });
      } else {
        toast({
          title: 'Login Failed',
          description: data.error || 'Invalid username or password.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top'
        });
      }
    } catch (err) {
      toast({
        title: 'Login Failed',
        description: 'Network error. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top'
      });
    }
  };


  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Container maxW="container.sm" py={10} px={{ base: 4, md: 8 }}>
      <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
        <Box bg="white" p={8} borderRadius="xl" boxShadow="lg" borderTop="4px solid" borderColor="primary.500">
          <VStack spacing={6} align="flex-start">
            <motion.div variants={fadeInUp} style={{ width: '100%', textAlign: 'center' }}>
              <Heading as="h2" size="2xl" mb={2} color="primary.700" fontFamily="heading">Welcome Back</Heading>
              <Text fontSize="md" color="gray.600">Sign in to rent jet skis and manage bookings.</Text>
            </motion.div>
            <motion.div variants={fadeInUp} style={{ width: '100%' }}>
              <FormControl id="username">
                <FormLabel fontWeight="medium" color="gray.700">Username</FormLabel>
                <Input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Enter username"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'primary.300' }}
                  _focus={{ borderColor: 'primary.500', boxShadow: '0 0 0 3px rgba(0, 114, 160, 0.2)' }}
                  borderRadius="md"
                  fontSize="md"
                  autoComplete="username"
                />
              </FormControl>
            </motion.div>
            <motion.div variants={fadeInUp} style={{ width: '100%' }}>
              <FormControl id="password">
                <FormLabel fontWeight="medium" color="gray.700">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    borderColor="gray.300"
                    _hover={{ borderColor: 'primary.300' }}
                    _focus={{ borderColor: 'primary.500', boxShadow: '0 0 0 3px rgba(0, 114, 160, 0.2)' }}
                    borderRadius="md"
                    fontSize="md"
                    autoComplete="current-password"
                  />
                  <InputRightElement>
                    <IconButton
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      variant="ghost"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      color="gray.500"
                      _hover={{ color: 'primary.500' }}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </motion.div>
            <motion.div variants={fadeInUp} style={{ width: '100%', textAlign: 'center' }}>
              <Button
                onClick={handleLogin}
                bg="primary.600"
                color="white"
                _hover={{ bg: 'primary.700' }}
                _active={{ bg: 'primary.800' }}
                width="full"
                size="lg"
                py={3}
                fontSize="md"
                borderRadius="md"
                isDisabled={!username || !password}
              >
                Sign In
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} style={{ width: '100%', textAlign: 'center' }}>
              <Text fontSize="md" color="gray.600">
                Don't have an account? <Button variant="link" color="primary.600" _hover={{ color: 'primary.800', textDecoration: 'underline' }} onClick={() => setCurrentPage('signup')}>Sign Up</Button>
              </Text>
            </motion.div>
          </VStack>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Login;
