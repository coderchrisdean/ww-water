import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import UserDashboard from './components/dashboards/UserDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Placeholder for actual API call to validate token and fetch user data
          setTimeout(() => {
            setIsLoggedIn(true);
            setUser({ username: 'user123', name: 'User Name' });
            setCurrentPage('dashboard');
          }, 100);
        } catch (error) {
          console.error('Token validation failed:', error);
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          setCurrentPage('home');
        }
      }
    };
    fetchUserData();
  }, [isLoggedIn]);

  const setCurrentPageWithLog = (page) => {
    console.log(`Navigating to: ${page}`);
    setCurrentPage(page);
  };

  const handleLogin = (token, userData) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUser(null);
    setCurrentPage('home');
  };

  const handleSignup = (userData) => {
    setIsAdmin(false);
    setUser({ 
      username: userData.username, 
      name: `${userData.firstName} ${userData.lastName}` 
    });
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const isAuthenticated = () => {
    return true; // Bypassing authentication for now
  };

  const isAdminCheck = () => {
    return true; // Bypassing admin check for now
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 font-sans" style={{ fontFamily: 'Open Sans, sans-serif' }}>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPageWithLog} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home setCurrentPage={setCurrentPageWithLog} isLoggedIn={isLoggedIn} />} />
            <Route path="/login" element={<Login setCurrentPage={setCurrentPageWithLog} handleLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup setCurrentPage={setCurrentPageWithLog} handleSignup={handleSignup} />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/admin" element={<Navigate to="http://localhost:3004/dashboard/admin" replace />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Wet N Wild Water Toys LLC. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-yellow-500"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-yellow-500"><i className="fab fa-instagram"></i></a>
            </div>
            <p className="mt-2">1024 West 105th St, Los Angeles, CA 90044 | (555) 123-4567 | info@wetnwildwatertoys.com</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
