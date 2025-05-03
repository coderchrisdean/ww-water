import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AdminDashboard from './components/AdminDashboard';

const theme = createTheme({
  palette: {
    primary: { main: '#0072A0' },
    secondary: { main: '#00A0B0' },
    background: { default: '#e0f7fa', paper: '#fff' }
  },
  typography: {
    fontFamily: ['Roboto', 'Montserrat', 'Arial', 'sans-serif'].join(','),
    h1: { fontFamily: 'Montserrat', fontWeight: 700 },
    h2: { fontFamily: 'Montserrat', fontWeight: 700 },
    h3: { fontFamily: 'Montserrat', fontWeight: 700 },
    h4: { fontFamily: 'Montserrat', fontWeight: 700 },
    h5: { fontFamily: 'Montserrat', fontWeight: 700 },
    h6: { fontFamily: 'Montserrat', fontWeight: 700 },
    body1: { fontFamily: 'Roboto' },
    body2: { fontFamily: 'Roboto' }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminDashboard />
    </ThemeProvider>
  );
}

export default App;
