-- Drop existing tables if they exist (optional, for development)
DROP TABLE IF EXISTS contact_submissions;
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS jet_skis;
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create jet_skis table
CREATE TABLE jet_skis (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price_per_hour DECIMAL(10,2) CHECK (price_per_hour > 0),
  is_available BOOLEAN DEFAULT TRUE,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create reservations table
CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  jet_ski_id INTEGER REFERENCES jet_skis(id),
  reservation_date DATE,
  start_time TIME,
  end_time TIME,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CHECK (start_time < end_time)
);

-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Add indexes for performance
CREATE INDEX idx_reservations_user_id ON reservations(user_id);
CREATE INDEX idx_reservations_jet_ski_id ON reservations(jet_ski_id);

-- Optional: Insert sample jet skis for testing
INSERT INTO jet_skis (name, description, price_per_hour, is_available, image_url) VALUES
('Standard Jet Ski', 'A standard jet ski for casual riders.', 50.00, TRUE, 'https://example.com/images/standard.jpg'),
('Premium Jet Ski', 'A high-performance jet ski for thrill-seekers.', 75.00, TRUE, 'https://example.com/images/premium.jpg');
