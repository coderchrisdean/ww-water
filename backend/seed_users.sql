-- Seed 3 users (1 admin, 2 regular users)
-- Passwords are hashed with bcrypt (hash for 'password123' with 10 salt rounds)

INSERT INTO users (name, email, password_hash, role) VALUES
  ('Admin User', 'admin@example.com', '$2a$10$wq8n7D0wFZ6yFqk5y4F6eeXw8JpQ3qQ3vR3iQ1zZbQ9mC7X3u8zXy', 'admin'),
  ('John Doe', 'john@example.com', '$2a$10$wq8n7D0wFZ6yFqk5y4F6eeXw8JpQ3qQ3vR3iQ1zZbQ9mC7X3u8zXy', 'user'),
  ('Jane Smith', 'jane@example.com', '$2a$10$wq8n7D0wFZ6yFqk5y4F6eeXw8JpQ3qQ3vR3iQ1zZbQ9mC7X3u8zXy', 'user');

-- All users have the password: password123
