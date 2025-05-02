import React from 'react';

function Admin() {
  return (
    <div className="admin bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Admin Panel</h2>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Manage Users</h3>
        <p>View and edit user accounts.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2">Manage</button>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Manage Bookings</h3>
        <p>View, create, and cancel bookings.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2">Manage</button>
      </div>
      <div>
        <h3 className="font-bold mb-2">Site Settings</h3>
        <p>Configure site-wide settings.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2">Configure</button>
      </div>
    </div>
  );
}

export default Admin;
