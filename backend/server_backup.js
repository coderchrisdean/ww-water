const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files if needed
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
const availabilityRoutes = require('./routes/availability');

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', contactRoutes);
app.use('/api', availabilityRoutes);

// Route for Admin Dashboard
app.get('/dashboard/admin', (req, res) => {
  // Mock data for the admin dashboard
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin' },
  ];
  const bookings = [
    { id: 1, user: 'John Doe', jetSki: 'WaveRunner', date: '2025-05-01', status: 'Completed' },
    { id: 2, user: 'Jane Smith', jetSki: 'Sea-Doo', date: '2025-05-15', status: 'Upcoming' },
  ];
  const inventory = [
    { id: 1, model: 'WaveRunner', status: 'Available', availability: 'In Stock' },
    { id: 2, model: 'Sea-Doo', status: 'Maintenance', availability: 'Out of Stock' },
  ];

  res.render('adminDashboard', { users, bookings, inventory });
});

// Catch-all route to serve index.html for React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
