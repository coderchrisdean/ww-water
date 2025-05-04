const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
const availabilityRoutes = require('./routes/availability');
const bookingsRoutes = require('./routes/bookings');
const inventoryRoutes = require('./routes/inventory');
const usersRoutes = require('./routes/users');
const { requireAuth } = require('@clerk/clerk-sdk-node');

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', contactRoutes);
app.use('/api', availabilityRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/users', usersRoutes);

// Clerk-protected admin panel endpoint
app.use('/api/admin-panel', requireAuth(), (req, res) => {
  res.json({ message: 'Welcome, Clerk-authenticated admin!' });
});

// Catch-all route to serve index.html for React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
