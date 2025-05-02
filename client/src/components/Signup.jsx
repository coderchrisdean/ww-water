import React, { useState } from 'react';

function Signup({ setCurrentPage, handleSignup }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup({ firstName, lastName, email, username, password });
  };

  return (
    <div className="signup p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">First Name</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Last Name</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
            required 
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setCurrentPage('login')} 
            className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded-full shadow-md border border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
