const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = new Pool();

// Get all bookings
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM bookings');
  res.json(result.rows);
});

// Get booking by id
router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM bookings WHERE id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

// Create booking
router.post('/', async (req, res) => {
  const { user_id, inventory_id, booking_date, status } = req.body;
  const result = await pool.query(
    'INSERT INTO bookings (user_id, inventory_id, booking_date, status) VALUES ($1, $2, $3, $4) RETURNING *',
    [user_id, inventory_id, booking_date, status || 'pending']
  );
  res.status(201).json(result.rows[0]);
});

// Update booking
router.put('/:id', async (req, res) => {
  const { user_id, inventory_id, booking_date, status } = req.body;
  const result = await pool.query(
    'UPDATE bookings SET user_id=$1, inventory_id=$2, booking_date=$3, status=$4 WHERE id=$5 RETURNING *',
    [user_id, inventory_id, booking_date, status, req.params.id]
  );
  res.json(result.rows[0]);
});

// Delete booking
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM bookings WHERE id = $1', [req.params.id]);
  res.json({ success: true });
});

// Get total revenue
router.get('/revenue', async (req, res) => {
  // If you have a 'price' column in bookings, use it. Otherwise, replace 100 with your default price or add a price column.
  // Example with price column:
  // const result = await pool.query('SELECT SUM(price) as total_revenue FROM bookings');
  // const total = result.rows[0].total_revenue || 0;
  // Example with placeholder value (e.g., $100 per booking):
  const result = await pool.query('SELECT COUNT(*) FROM bookings');
  const count = parseInt(result.rows[0].count, 10);
  const total = count * 100; // Replace 100 with your booking price
  res.json({ total_revenue: total });
});

// Get bookings for the current user
const authenticateJWT = require('../middleware/auth');

router.get('/my', authenticateJWT, async (req, res) => {
  const userId = req.user.id;
  const result = await pool.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
  res.json(result.rows);
});

module.exports = router;
