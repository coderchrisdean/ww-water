import React from 'react';

function Dashboard({ user }) {
  return (
    <div className="dashboard bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Dashboard</h2>
      {user ? (
        <div>
          <p className="mb-2">Welcome, {user.username}!</p>
          <p className="mb-4">Role: {user.role}</p>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold mb-2">Your Bookings</h3>
            <p>No current bookings. Book a jet ski now!</p>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;
