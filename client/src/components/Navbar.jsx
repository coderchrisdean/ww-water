import React, { useState } from 'react';

function Navbar({ currentPage, setCurrentPage, isLoggedIn, handleLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className="bg-primary-700 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 
          className="text-2xl font-bold cursor-pointer hover:text-primary-300 transition-colors duration-200"
          onClick={() => handleNavClick('home')}
        >
          Wet N Wild Water Toys
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={() => handleNavClick('home')} className={`hover:text-primary-300 transition-colors duration-200 ${currentPage === 'home' ? 'font-bold' : ''}`}>Home</button>
          <button onClick={() => handleNavClick('about')} className={`hover:text-primary-300 transition-colors duration-200 ${currentPage === 'about' ? 'font-bold' : ''}`}>About</button>
          <button onClick={() => handleNavClick('services')} className={`hover:text-primary-300 transition-colors duration-200 ${currentPage === 'services' ? 'font-bold' : ''}`}>Services</button>
          <button onClick={() => handleNavClick('faq')} className={`hover:text-primary-300 transition-colors duration-200 ${currentPage === 'faq' ? 'font-bold' : ''}`}>FAQ</button>
          <button onClick={() => handleNavClick('contact')} className={`hover:text-primary-300 transition-colors duration-200 ${currentPage === 'contact' ? 'font-bold' : ''}`}>Contact</button>
          {isLoggedIn ? (
            <>
              <button onClick={() => handleNavClick('dashboard')} className={`hover:text-primary-300 transition-colors duration-200 ${currentPage === 'dashboard' ? 'font-bold' : ''}`}>Dashboard</button>
              <button onClick={handleLogout} className="bg-white text-primary-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">Logout</button>
            </>
          ) : (
            <button onClick={() => handleNavClick('login')} className="bg-white text-primary-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">Login</button>
          )}
        </div>
      </div>

      {/* Navigation Links - Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-2 py-3 bg-primary-700 opacity-100 rounded-lg shadow-lg absolute right-4 w-48 z-50">
          <button onClick={() => handleNavClick('home')} className={`block w-full text-left px-4 py-2 hover:bg-primary-500 rounded transition-colors duration-200 ${currentPage === 'home' ? 'font-bold' : ''}`}>Home</button>
          <button onClick={() => handleNavClick('about')} className={`block w-full text-left px-4 py-2 hover:bg-primary-500 rounded transition-colors duration-200 ${currentPage === 'about' ? 'font-bold' : ''}`}>About</button>
          <button onClick={() => handleNavClick('services')} className={`block w-full text-left px-4 py-2 hover:bg-primary-500 rounded transition-colors duration-200 ${currentPage === 'services' ? 'font-bold' : ''}`}>Services</button>
          <button onClick={() => handleNavClick('faq')} className={`block w-full text-left px-4 py-2 hover:bg-primary-500 rounded transition-colors duration-200 ${currentPage === 'faq' ? 'font-bold' : ''}`}>FAQ</button>
          <button onClick={() => handleNavClick('contact')} className={`block w-full text-left px-4 py-2 hover:bg-primary-500 rounded transition-colors duration-200 ${currentPage === 'contact' ? 'font-bold' : ''}`}>Contact</button>
          {isLoggedIn ? (
            <>
              <button onClick={() => handleNavClick('dashboard')} className={`block w-full text-left px-4 py-2 hover:bg-primary-500 rounded transition-colors duration-200 ${currentPage === 'dashboard' ? 'font-bold' : ''}`}>Dashboard</button>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 bg-white text-primary-700 rounded hover:bg-gray-100 transition-colors duration-200">Logout</button>
            </>
          ) : (
            <button onClick={() => handleNavClick('login')} className="block w-full text-left px-4 py-2 bg-white text-primary-700 rounded hover:bg-gray-100 transition-colors duration-200">Login</button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
