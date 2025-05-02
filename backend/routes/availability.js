const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Middleware to verify API key
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.header('Authorization')?.replace('Bearer ', '');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Invalid API key' });
  }
  next();
};

// Get jet ski availability (future implementation)
router.get('/availability', apiKeyMiddleware, async (req, res) => {
  try {
    // Placeholder for actual availability logic
    const result = await pool.query('SELECT id, name FROM jet_skis WHERE is_available = TRUE');
    const availability = result.rows.map(jetSki => ({
      jet_ski_id: jetSki.id,
      name: jetSki.name,
      available_dates: ['2025-05-10', '2025-05-11'] // Placeholder dates
    }));
    res.json(availability);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch availability' });
  }
});

module.exports = router;
