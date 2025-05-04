const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = new Pool();

// Get all inventory
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM inventory');
  res.json(result.rows);
});

// Get inventory by id
router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM inventory WHERE id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

// Create inventory item
router.post('/', async (req, res) => {
  const { name, type, status } = req.body;
  const result = await pool.query(
    'INSERT INTO inventory (name, type, status) VALUES ($1, $2, $3) RETURNING *',
    [name, type, status || 'available']
  );
  res.status(201).json(result.rows[0]);
});

// Update inventory item
router.put('/:id', async (req, res) => {
  const { name, type, status } = req.body;
  const result = await pool.query(
    'UPDATE inventory SET name=$1, type=$2, status=$3 WHERE id=$4 RETURNING *',
    [name, type, status, req.params.id]
  );
  res.json(result.rows[0]);
});

// Delete inventory item
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM inventory WHERE id = $1', [req.params.id]);
  res.json({ success: true });
});

module.exports = router;
