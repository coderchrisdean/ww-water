import React from 'react';
import { Box, Button, Heading, Text, Container, VStack, Grid, GridItem, Card, CardBody, CardHeader, Divider, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Home({ setCurrentPage, isLoggedIn }) {
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
    <Box>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        as="section"
        h={{ base: '60vh', md: '80vh' }}
        maxH="400px"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        mb={10}
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bg: 'black',
          opacity: 0.75, // Darkened overlay for better text contrast
          zIndex: 2 // Increased z-index to ensure overlay is above image
        }}
      >
        {/* Commented out image to resolve visibility issues */}
        {/* 
        <Image 
          src="/images/hero-jet-ski.jpg" 
          alt="Hero Jet Ski Image" 
          objectFit="cover" 
          objectPosition="center" 
          position="absolute" 
          top="0" 
          left="0" 
          width="100%" 
          height="100%" 
          zIndex="1" // Lower z-index to keep image below overlay and text
        />
        */}
        <Container maxW="container.lg" zIndex={3} textAlign="center" p={{ base: 4, md: 6 }}>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size={{ base: '2xl', md: '3xl' }} color="white" mb={4} fontWeight="extrabold" fontFamily="'Poppins', sans-serif">Experience the Thrill of Jet Skiing</Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="white" mb={6}>Rent top-quality jet skis for an unforgettable water adventure!</Text>
            <Button
              onClick={() => setCurrentPage(isLoggedIn ? 'dashboard' : 'login')}
              bg="primary.700"
              color="white"
              _hover={{ bg: 'primary.800', transform: 'scale(1.05)' }}
              _active={{ bg: 'primary.900' }}
              size="lg"
              px={8}
              py={3}
              fontWeight="bold"
              borderRadius="md"
              boxShadow="lg"
              transition="all 0.3s ease-in-out"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Login to Rent Now'}
            </Button>
          </motion.div>
        </Container>
      </motion.section>

      {/* Welcome Section */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={10} textAlign="center">
        <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="xl" mb={4} color="primary.700" fontWeight="bold">Welcome to Wet N Wild Water Toys LLC</Heading>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Text fontSize="lg" mb={6} color="gray.600">Your premier destination for jet ski rentals in Los Angeles. Experience the thrill of the water with our top-quality equipment and exceptional service.</Text>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button
              onClick={() => setCurrentPage(isLoggedIn ? 'dashboard' : 'login')}
              bg="primary.700"
              color="white"
              _hover={{ bg: 'primary.800' }}
              _active={{ bg: 'primary.900' }}
              size="md"
              px={6}
              py={2}
              fontWeight="bold"
              borderRadius="md"
              transition="duration 0.2s"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Login'}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Features Section */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} mb={12}>
        <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
            <GridItem>
              <motion.div variants={fadeInUp}>
                <Card bg="white" boxShadow="md" borderRadius="lg" border="1px solid" borderColor="gray.200" h="full" minH="250px" display="flex" flexDirection="column" transition="transform 0.3s ease-in-out" _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}>
                  <CardHeader p={6} pb={0}>
                    <Heading as="h3" size="lg" mb={3} color="primary.700" fontWeight="bold">About Us</Heading>
                  </CardHeader>
                  <CardBody p={6} flex="1" display="flex" alignItems="flex-start">
                    <Text color="gray.700">Wet N Wild Water Toys LLC is dedicated to providing the best jet ski rental experience in Los Angeles. Our team ensures safety and fun on the water!</Text>
                  </CardBody>
                </Card>
              </motion.div>
            </GridItem>
            <GridItem>
              <motion.div variants={fadeInUp}>
                <Card bg="white" boxShadow="md" borderRadius="lg" border="1px solid" borderColor="gray.200" h="full" minH="250px" display="flex" flexDirection="column" transition="transform 0.3s ease-in-out" _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}>
                  <CardHeader p={6} pb={0}>
                    <Heading as="h3" size="lg" mb={3} color="primary.700" fontWeight="bold">Our Services</Heading>
                  </CardHeader>
                  <CardBody p={6} flex="1" display="flex" alignItems="flex-start">
                    <Text color="gray.700">We offer hourly and daily jet ski rentals, guided tours, and safety training. Book online today!</Text>
                  </CardBody>
                </Card>
              </motion.div>
            </GridItem>
            <GridItem>
              <motion.div variants={fadeInUp}>
                <Card bg="white" boxShadow="md" borderRadius="lg" border="1px solid" borderColor="gray.200" h="full" minH="250px" display="flex" flexDirection="column" transition="transform 0.3s ease-in-out" _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}>
                  <CardHeader p={6} pb={0}>
                    <Heading as="h3" size="lg" mb={3} color="primary.700" fontWeight="bold">Why Choose Us?</Heading>
                  </CardHeader>
                  <CardBody p={6} flex="1" display="flex" alignItems="flex-start">
                    <Text color="gray.700">Choose Wet N Wild for unparalleled customer service, well-maintained equipment, and a passion for water sports. We prioritize your safety and enjoyment on every ride!</Text>
                  </CardBody>
                </Card>
              </motion.div>
            </GridItem>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home;
