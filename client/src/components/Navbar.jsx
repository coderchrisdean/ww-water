import React from 'react';

function Navbar({ currentPage, setCurrentPage, isLoggedIn, handleLogout }) {
  return (
    <nav className="bg-red-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Wet N Wild Water Toys</h1>
        <div>
          <button onClick={() => setCurrentPage('home')} className={`mx-2 ${currentPage === 'home' ? 'font-bold' : ''}`}>Home</button>
          <button onClick={() => setCurrentPage('about')} className={`mx-2 ${currentPage === 'about' ? 'font-bold' : ''}`}>About</button>
          <button onClick={() => setCurrentPage('services')} className={`mx-2 ${currentPage === 'services' ? 'font-bold' : ''}`}>Services</button>
          <button onClick={() => setCurrentPage('faq')} className={`mx-2 ${currentPage === 'faq' ? 'font-bold' : ''}`}>FAQ</button>
          <button onClick={() => setCurrentPage('contact')} className={`mx-2 ${currentPage === 'contact' ? 'font-bold' : ''}`}>Contact</button>
          {isLoggedIn ? (
            <>
              <button onClick={() => setCurrentPage('dashboard')} className={`mx-2 ${currentPage === 'dashboard' ? 'font-bold' : ''}`}>Dashboard</button>
              <button onClick={handleLogout} className="mx-2">Logout</button>
            </>
          ) : (
            <button onClick={() => setCurrentPage('login')} className={`mx-2 ${currentPage === 'login' ? 'font-bold' : ''}`}>Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
