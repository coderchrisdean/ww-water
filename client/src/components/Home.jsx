import React from 'react';
import { Box, Button, Heading, Text, Container, VStack, Grid, GridItem, Card, CardBody, CardHeader, Icon } from '@chakra-ui/react';
import { InfoIcon, SettingsIcon, StarIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

function Home({ setCurrentPage, isLoggedIn }) {
  const navigate = useNavigate();
  // Animation variants for fade-in effects
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } }
  };
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
    <Box bg="gray.50" minH="100vh">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        as="section"
        h={{ base: '70vh', md: '85vh' }}
        maxH="500px"
        bg="primary.700"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        mb={12}
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bg: 'linear-gradient(to right, rgba(0, 114, 160, 0.8), rgba(0, 160, 176, 0.8))',
          zIndex: 1
        }}
      >
        <Container maxW="container.xl" zIndex={2} textAlign="center" p={{ base: 6, md: 10 }}>
          <motion.div variants={fadeInUp}>
            <Heading as="h1" size={{ base: '2xl', md: '4xl' }} color="white" mb={6} fontWeight="extrabold" fontFamily="heading">Unleash Your Water Adventure</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="white" mb={8} maxW="700px" mx="auto">Experience the thrill of jet skiing with top-quality rentals in Los Angeles. Book now for an unforgettable ride!</Text>
            <Button
              onClick={() => {
                if (isLoggedIn) {
                  navigate('/dashboard');
                } else {
                  navigate('/login');
                }
              }}
              bg="secondary.500"
              color="white"
              _hover={{ bg: 'secondary.600', transform: 'scale(1.05)' }}
              _active={{ bg: 'secondary.600' }}
              size="lg"
              px={10}
              py={4}
              fontWeight="bold"
              borderRadius="md"
              boxShadow="lg"
              transition="all 0.3s ease-in-out"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Rent a Jet Ski Now'}
            </Button>
          </motion.div>
        </Container>
      </motion.section>

      {/* Welcome Section */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={12} textAlign="center">
        <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="2xl" mb={6} color="primary.700" fontWeight="bold" fontFamily="heading">Welcome to Wet N Wild Water Toys</Heading>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Text fontSize="lg" mb={8} color="gray.600" maxW="800px" mx="auto">Your premier destination for jet ski rentals in Los Angeles. We provide top-quality equipment and exceptional service to ensure safety and fun on the water.</Text>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button
              onClick={() => {
                if (isLoggedIn) {
                  navigate('/dashboard');
                } else {
                  navigate('/login');
                }
              }}
              bg="primary.600"
              color="white"
              _hover={{ bg: 'primary.700' }}
              _active={{ bg: 'primary.800' }}
              size="md"
              px={8}
              py={3}
              fontWeight="bold"
              borderRadius="md"
              transition="duration 0.2s"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Login to Book'}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Features Section */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={12} mb={12}>
        <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
            <GridItem>
              <motion.div variants={fadeInUp}>
                <Card bg="white" boxShadow="lg" borderRadius="xl" h="full" minH="300px" display="flex" flexDirection="column" transition="transform 0.3s ease-in-out" _hover={{ transform: 'translateY(-10px)', boxShadow: 'xl' }} borderTop="4px solid" borderColor="primary.500">
                  <CardHeader p={6} pb={2} textAlign="center">
                    <Icon as={InfoIcon} w={10} h={10} color="primary.500" mb={3} />
                    <Heading as="h3" size="lg" mb={3} color="primary.700" fontWeight="bold" fontFamily="heading">About Us</Heading>
                  </CardHeader>
                  <CardBody p={6} flex="1" display="flex" alignItems="center" justifyContent="center" textAlign="center">
                    <Text color="gray.700" fontSize="md">Wet N Wild Water Toys LLC is dedicated to providing the best jet ski rental experience in Los Angeles. Our team ensures safety and fun on the water!</Text>
                  </CardBody>
                </Card>
              </motion.div>
            </GridItem>
            <GridItem>
              <motion.div variants={fadeInUp}>
                <Card bg="white" boxShadow="lg" borderRadius="xl" h="full" minH="300px" display="flex" flexDirection="column" transition="transform 0.3s ease-in-out" _hover={{ transform: 'translateY(-10px)', boxShadow: 'xl' }} borderTop="4px solid" borderColor="primary.500">
                  <CardHeader p={6} pb={2} textAlign="center">
                    <Icon as={SettingsIcon} w={10} h={10} color="primary.500" mb={3} />
                    <Heading as="h3" size="lg" mb={3} color="primary.700" fontWeight="bold" fontFamily="heading">Our Services</Heading>
                  </CardHeader>
                  <CardBody p={6} flex="1" display="flex" alignItems="center" justifyContent="center" textAlign="center">
                    <Text color="gray.700" fontSize="md">We offer hourly and daily jet ski rentals, guided tours, and safety training. Book online today for a thrilling water adventure!</Text>
                  </CardBody>
                </Card>
              </motion.div>
            </GridItem>
            <GridItem>
              <motion.div variants={fadeInUp}>
                <Card bg="white" boxShadow="lg" borderRadius="xl" h="full" minH="300px" display="flex" flexDirection="column" transition="transform 0.3s ease-in-out" _hover={{ transform: 'translateY(-10px)', boxShadow: 'xl' }} borderTop="4px solid" borderColor="primary.500">
                  <CardHeader p={6} pb={2} textAlign="center">
                    <Icon as={StarIcon} w={10} h={10} color="primary.500" mb={3} />
                    <Heading as="h3" size="lg" mb={3} color="primary.700" fontWeight="bold" fontFamily="heading">Why Choose Us?</Heading>
                  </CardHeader>
                  <CardBody p={6} flex="1" display="flex" alignItems="center" justifyContent="center" textAlign="center">
                    <Text color="gray.700" fontSize="md">Choose Wet N Wild for unparalleled customer service, well-maintained equipment, and a passion for water sports. Your safety and enjoyment are our priorities!</Text>
                  </CardBody>
                </Card>
              </motion.div>
            </GridItem>
          </Grid>
        </motion.div>
      </Container>

      {/* CTA Section */}
      <Box bg="primary.700" py={16} textAlign="center" mb={12} borderRadius="xl" mx={{ base: 4, md: 8 }} boxShadow="lg">
        <Container maxW="container.md">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Heading as="h2" size="2xl" mb={6} color="white" fontFamily="heading">Ready for the Ride of Your Life?</Heading>
            <Text fontSize="lg" mb={8} color="white" opacity={0.9}>Join us today and experience the thrill of jet skiing in Los Angeles.</Text>
            <Button
              onClick={() => {
                if (isLoggedIn) {
                  navigate('/dashboard');
                } else {
                  navigate('/login');
                }
              }}
              bg="secondary.500"
              color="white"
              _hover={{ bg: 'secondary.600', transform: 'scale(1.05)' }}
              _active={{ bg: 'secondary.600' }}
              size="lg"
              px={10}
              py={4}
              fontWeight="bold"
              borderRadius="md"
              boxShadow="lg"
              transition="all 0.3s ease-in-out"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Sign Up & Book Now'}
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
