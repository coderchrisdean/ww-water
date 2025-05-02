import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Define custom theme with red color scheme
const theme = extendTheme({
  colors: {
    primary: {
      50: '#ffe6e6',
      100: '#ffb3b3',
      200: '#ff8080',
      300: '#ff4d4d',
      400: '#ff1a1a',
      500: '#e60000',
      600: '#b30000',
      700: '#800000', // Main red color used
      800: '#4d0000',
      900: '#1a0000',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
