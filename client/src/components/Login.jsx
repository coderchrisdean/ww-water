import React, { useState } from 'react';

function Login({ setCurrentPage, handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        handleLogin(data.token, data.user);
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="login p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-primary-700">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div className="flex flex-row space-x-4">
          <button 
            type="submit" 
            className="bg-primary-500 hover:bg-primary-700 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex-1"
          >
            Login
          </button>
          <button 
            type="button" 
            onClick={() => setCurrentPage('signup')} 
            className="bg-white hover:bg-gray-100 text-primary-500 font-bold py-3 px-6 rounded-full shadow-md border border-primary-500 transition duration-300 ease-in-out transform hover:scale-105 flex-1"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
