import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Username: 4-16 chars, alphanumeric/underscore
  // Password: 8+ chars, at least 1 uppercase, 1 lowercase, 1 number
  const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    // Username validation
    if (!usernameRegex.test(username)) {
      setError('Username must be 4-16 characters, letters, numbers, or underscores.');
      return;
    }
    // Password validation (modern)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    const commonPasswords = ['password', '123456', '123456789', 'qwerty', '111111', 'abc123', 'password1'];
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters, include uppercase, lowercase, number, and symbol.');
      return;
    }
    if (commonPasswords.includes(password.toLowerCase())) {
      setError('Password is too common.');
      return;
    }
    if (password.toLowerCase().includes(username.toLowerCase()) || password.toLowerCase().includes(email.toLowerCase())) {
      setError('Password should not contain your username or email.');
      return;
    }
    if (/^\d+$/.test(password)) {
      setError('Password cannot be all numbers.');
      return;
    }
    if (/^[a-zA-Z]+$/.test(password)) {
      setError('Password cannot be all letters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setIsSubmitting(true);
    // Check for duplicate email/username before posting
    try {
      // Check email
      const emailRes = await fetch('http://localhost:5000/api/users/check-email?email=' + encodeURIComponent(email));
      if (emailRes.ok) {
        const data = await emailRes.json();
        if (data.exists) {
          setError('Email already exists.');
          setIsSubmitting(false);
          return;
        }
      }
      // Check username
      const userRes = await fetch('http://localhost:5000/api/users/check-username?username=' + encodeURIComponent(username));
      if (userRes.ok) {
        const data = await userRes.json();
        if (data.exists) {
          setError('Username already exists.');
          setIsSubmitting(false);
          return;
        }
      }
      // If all checks pass, proceed to signup
      const res = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          username,
          password,
          confirmPassword
        })
      });
      if (res.ok) {
        setSuccess('Account created! You can now log in.');
        setTimeout(() => {
          navigate('/login', { state: { accountCreated: true } });
        }, 1200);
      } else {
        const data = await res.json();
        setError(data.error || 'Signup failed.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="signup p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Sign Up</h2>
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
        <strong>Username requirements:</strong> 4-16 characters, letters, numbers, or underscores.<br/>
        <strong>Password requirements:</strong>
        <ul className="list-disc pl-5 mt-1">
          <li>At least 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one lowercase letter</li>
          <li>At least one number</li>
          <li>At least one symbol</li>
          <li>Cannot contain your username or email</li>
          <li>Cannot be all numbers or all letters</li>
          <li>Cannot be a common password (e.g., password, 123456, etc.)</li>
        </ul>
      </div>
      {error && <div className="mb-2 text-red-600 font-semibold">{error}</div>}
      {success && <div className="mb-2 text-green-600 font-semibold">{success}</div>}
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
            autoComplete="new-password"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
            required 
            autoComplete="new-password"
          />
        </div>
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Account'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
