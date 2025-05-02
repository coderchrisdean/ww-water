const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Database connection configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL ? { rejectUnauthorized: false } : undefined
});

module.exports = pool;
