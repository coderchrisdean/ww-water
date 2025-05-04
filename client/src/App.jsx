import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ClerkAuth from './ClerkAuth';
import Dashboard from './components/Dashboard';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<ClerkAuth />} />
          <Route path="/signup" element={<ClerkAuth />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
    </Router>
  );
}


export default App;
