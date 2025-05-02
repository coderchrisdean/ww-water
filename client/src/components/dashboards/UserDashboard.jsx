import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableHead, TableRow, TextField, Button, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { motion } from 'framer-motion';
import DashboardLayout from './DashboardLayout';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [jetSki, setJetSki] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    // Mock API call to fetch user profile
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        email: 'john.doe@example.com',
      });
    }, 1000);

    // Mock API call to fetch bookings
    setTimeout(() => {
      setBookings([
        { id: 1, date: '2025-05-01', jetSki: 'WaveRunner', status: 'Completed' },
        { id: 2, date: '2025-05-15', jetSki: 'Sea-Doo', status: 'Upcoming' },
      ]);
    }, 1000);
  }, []);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Mock API call to create booking
    console.log('Booking submitted:', { jetSki, selectedDate, duration });
    // Reset form
    setJetSki('');
    setSelectedDate(null);
    setDuration('');
  };

  return (
    <DashboardLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader title="Profile" />
              <CardContent>
                {user ? (
                  <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                  </div>
                ) : (
                  <p>Loading profile...</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader title="Book Rental" />
              <CardContent>
                <form onSubmit={handleBookingSubmit}>
                  <TextField
                    label="Jet Ski Model"
                    value={jetSki}
                    onChange={(e) => setJetSki(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Date"
                      value={selectedDate}
                      onChange={(newValue) => setSelectedDate(newValue)}
                      renderInput={(params) => <TextField {...params} fullWidth margin="normal" required />}
                    />
                  </LocalizationProvider>
                  <TextField
                    label="Duration (hours)"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                      Book Now
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader title="Booking History" />
              <CardContent>
                {bookings.length > 0 ? (
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Jet Ski</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>{booking.jetSki}</TableCell>
                          <TableCell>{booking.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p>No bookings found.</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default UserDashboard;
