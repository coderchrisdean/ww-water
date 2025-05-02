const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const result = await pool.query(
      'INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3) RETURNING id',
      [name, email, message]
    );
    res.status(201).json({ message: 'Contact form submitted successfully', submissionId: result.rows[0].id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

module.exports = router;
