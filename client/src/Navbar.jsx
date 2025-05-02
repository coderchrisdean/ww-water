function Navbar({ currentPage, setCurrentPage, isLoggedIn, handleLogout }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About', icon: 'fa-info-circle' },
    { id: 'services', label: 'Services', icon: 'fa-water' },
    { id: 'faq', label: 'FAQ', icon: 'fa-question-circle' },
    { id: 'contact', label: 'Contact', icon: 'fa-phone' }
  ];

  return (
    <nav className="bg-red-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setCurrentPage('home')}>
          Wet N Wild
        </div>
        <div className="flex space-x-4 items-center">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`hover:text-yellow-500 flex items-center space-x-1 px-3 py-1 rounded-md ${currentPage === item.id ? 'bg-red-700' : ''}`}
              style={{ minWidth: '48px' }}
            >
              <i className={`fas ${item.icon}`}></i>
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
          {isLoggedIn ? (
            <>
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`hover:text-yellow-500 flex items-center space-x-1 px-3 py-1 rounded-md ${currentPage === 'dashboard' ? 'bg-red-700' : ''}`}
                style={{ minWidth: '48px' }}
              >
                <i className="fas fa-user"></i>
                <span className="hidden md:inline">Dashboard</span>
              </button>
              <button
                onClick={handleLogout}
                className="hover:text-yellow-500 flex items-center space-x-1 px-3 py-1 rounded-md"
                style={{ minWidth: '48px' }}
              >
                <i className="fas fa-sign-out-alt"></i>
                <span className="hidden md:inline">Logout</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => setCurrentPage('login')}
              className={`hover:text-yellow-500 flex items-center space-x-1 px-3 py-1 rounded-md ${currentPage === 'login' ? 'bg-red-700' : ''}`}
              style={{ minWidth: '48px' }}
            >
              <i className="fas fa-sign-in-alt"></i>
              <span className="hidden md:inline">Login</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
