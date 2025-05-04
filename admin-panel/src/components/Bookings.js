import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Bookings() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} fontFamily="Inter, Roboto, Arial, sans-serif" color="#0072A0" mb={2}>
        Bookings
      </Typography>
      <Typography variant="body1">Manage bookings here. (Coming soon!)</Typography>
    </Box>
  );
}
