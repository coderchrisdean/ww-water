# Wet N Wild Water Toys LLC Website

A family-friendly jet ski rental business website based in Los Angeles, CA.

## Setup
1. Install Node.js and PostgreSQL.
2. Create database: `createdb wetnwild`
3. Run `psql -d wetnwild -f init.sql`
4. Copy `.env.example` to `.env` and fill in values (e.g., DATABASE_URL, JWT_SECRET).
5. Run `npm install`
6. Run `npm start`

## Push to GitHub
1. Stage changes: `git add .`
2. Commit: `git commit -m "Initial commit"`
3. Push: `git push -u origin main`

## Future Features
- **Reservation System**: Integration with FullCalendar for booking management.
- **Payments**: Stripe integration for secure transactions.
- **Admin Dashboard**: Chart.js for booking and revenue visualizations.
- **Availability API**: Secure endpoint for external platforms to query jet ski availability.
