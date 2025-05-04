const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const pool = require('../config/database');

// Check if email exists
router.get('/check-email', async (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ exists: false });
  try {
    const result = await pool.query('SELECT 1 FROM users WHERE email = $1', [email]);
    res.json({ exists: result.rows.length > 0 });
  } catch (err) {
    res.status(500).json({ exists: false });
  }
});

// Check if username exists
router.get('/check-username', async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(400).json({ exists: false });
  try {
    const result = await pool.query('SELECT 1 FROM users WHERE username = $1', [username]);
    res.json({ exists: result.rows.length > 0 });
  } catch (err) {
    res.status(500).json({ exists: false });
  }
});

// (Optional) Get all users (admin only)
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT id, name, email, role, created_at FROM users');
  res.json(result.rows);
});

// Dashboard stats endpoints
router.get('/count', async (req, res) => {
  const userCount = await pool.query('SELECT COUNT(*) FROM users');
  res.json({ count: parseInt(userCount.rows[0].count, 10) });
});

router.get('/bookings/count', async (req, res) => {
  const bookingCount = await pool.query('SELECT COUNT(*) FROM bookings');
  res.json({ count: parseInt(bookingCount.rows[0].count, 10) });
});

router.get('/inventory/count', async (req, res) => {
  const inventoryCount = await pool.query('SELECT COUNT(*) FROM inventory');
  res.json({ count: parseInt(inventoryCount.rows[0].count, 10) });
});

module.exports = router;
