import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ClerkProvider } from '@clerk/clerk-react';

// Define custom theme with water-inspired colors
const theme = extendTheme({
  colors: {
    primary: {
      50: '#E6F1F7',
      100: '#CCE3EF',
      200: '#99C7DF',
      300: '#66AACF',
      400: '#338EBF',
      500: '#0072A0',
      600: '#005B80',
      700: '#004460',
      800: '#002D40',
      900: '#001720'
    },
    secondary: {
      500: '#00A0B0',
      600: '#00808C'
    }
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Roboto', sans-serif"
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md'
      }
    }
  }
});

// TODO: Replace with your real Clerk publishable key from the Clerk dashboard
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ClerkProvider>
  </React.StrictMode>
);
