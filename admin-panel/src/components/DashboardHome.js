import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function DashboardHome() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} fontFamily="Inter, Roboto, Arial, sans-serif" color="#0072A0" mb={2}>
        Overview
      </Typography>
      <Typography variant="body1">
        Welcome to the Wet N Wild Admin Dashboard! Select a menu item to manage users, bookings, inventory, and more.
      </Typography>
    </Box>
  );
}
