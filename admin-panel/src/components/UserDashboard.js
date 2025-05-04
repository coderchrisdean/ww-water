import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Typography, Paper } from '@mui/material';
import { addDays } from 'date-fns';
import moment from 'moment';

const localizer = momentLocalizer(moment);

export default function UserDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/bookings/my', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch bookings');
        // Map bookings to calendar events
        setBookings(data.map(b => ({
          id: b.id,
          title: `Booking #${b.id}`,
          start: new Date(b.booking_date),
          end: addDays(new Date(b.booking_date), 1),
        })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight={700} mb={2}>My Bookings</Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Paper sx={{ p: 2 }}>
          <Calendar
            localizer={localizer}
            events={bookings}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </Paper>
      )}
    </Box>
  );
}
