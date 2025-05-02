import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      if (isLoggedIn) {
        try {
          const response = await fetch('/api/user', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            setUser(null);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          setUser(null);
        }
      }
    };
    fetchUserData();
  }, [isLoggedIn]);

  const handleLogin = (token, userData) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleSignup = (userData) => {
    // Placeholder for actual signup logic with database integration
    // For now, we'll simulate a successful signup by logging in the user directly
    setIsAdmin(false);
    setUser({ 
      username: userData.username, 
      name: `${userData.firstName} ${userData.lastName}` 
    });
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUser(null);
    setCurrentPage('home');
  };

  const setCurrentPageWithLog = (page) => {
    console.log('Navigating to:', page);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPageWithLog} isLoggedIn={isLoggedIn} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login setCurrentPage={setCurrentPageWithLog} handleLogin={handleLogin} />;
      case 'signup':
        return <Signup setCurrentPage={setCurrentPageWithLog} handleSignup={handleSignup} />;
      case 'dashboard':
        return isAdmin ? <Admin /> : <Dashboard user={user} />;
      case 'admin':
        return user && user.role === 'admin' ? <Admin /> : <Home setCurrentPage={setCurrentPageWithLog} isLoggedIn={isLoggedIn} />;
      default:
        return <Home setCurrentPage={setCurrentPageWithLog} isLoggedIn={isLoggedIn} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPageWithLog} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main className="flex-grow container mx-auto px-4 py-8">{renderPage()}</main>
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
  );
}

export default App;
