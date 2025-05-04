-- Seed bookings for users and inventory
-- Booking dates are spaced out for demo purposes
INSERT INTO bookings (user_id, inventory_id, booking_date, status) VALUES
  (1, 1, '2025-06-01', 'confirmed'),
  (2, 2, '2025-06-02', 'pending'),
  (3, 3, '2025-06-03', 'cancelled');
