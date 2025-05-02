import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Alert } from '@mui/material';
import { motion } from 'framer-motion';

function Signup({ setCurrentPage, handleSignup }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    // Username validation
    if (!formData.username) {
      tempErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      tempErrors.username = 'Username must be at least 3 characters long';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      tempErrors.username = 'Username can only contain letters, numbers, and underscores';
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)/.test(formData.password)) {
      tempErrors.password = 'Password must contain both letters and numbers';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    // First Name validation
    if (!formData.firstName) {
      tempErrors.firstName = 'First name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      tempErrors.firstName = 'First name can only contain letters';
    }

    // Last Name validation
    if (!formData.lastName) {
      tempErrors.lastName = 'Last name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      tempErrors.lastName = 'Last name can only contain letters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          const data = await response.json();
          handleSignup(data.user);
        } else {
          const errorData = await response.json();
          setErrors({ ...errors, general: errorData.error || 'Signup failed. Please try again.' });
        }
      } catch (error) {
        console.error('Error during signup:', error);
        setErrors({ ...errors, general: 'An unexpected error occurred. Please try again.' });
      }
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
            {errors.general && <Alert severity="error" sx={{ mb: 2 }}>{errors.general}</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              inputProps={{ pattern: '[a-zA-Z]+', title: 'Only letters allowed' }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              inputProps={{ pattern: '[a-zA-Z]+', title: 'Only letters allowed' }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              autoComplete="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              inputProps={{ pattern: '[a-zA-Z0-9_]+', title: 'Only letters, numbers, and underscores allowed' }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2">
                Already have an account?{' '}
                <Button variant="text" onClick={() => setCurrentPage('login')}>
                  Sign In
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Signup;
