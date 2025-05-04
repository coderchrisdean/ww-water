import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Login from './Login';
import ClerkSignUp from './SignUp';
import Profile from './Profile';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/clerk-react';

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
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  // You can use Clerk's publicMetadata or email to distinguish admin
  const isAdmin = user && (user.publicMetadata?.role === 'admin' || user.emailAddresses[0]?.emailAddress === 'admin@wetnwild.com');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<ClerkSignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/"
            element={
              <SignedIn>
                {isAdmin ? <AdminDashboard /> : <UserDashboard />}
              </SignedIn>
            }
          />
          <Route
            path="*"
            element={
              <SignedOut>
                <Navigate to="/sign-in" replace />
              </SignedOut>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
