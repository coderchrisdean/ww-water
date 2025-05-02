import React from 'react';

function Home({ setCurrentPage, isLoggedIn }) {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-300 flex items-center justify-center overflow-hidden mb-8">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521651201144-634f700b36f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')" }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white p-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience the Thrill of Jet Skiing</h2>
          <p className="text-lg md:text-xl mb-6">Rent top-quality jet skis for an unforgettable water adventure!</p>
          <button 
            onClick={() => setCurrentPage(isLoggedIn ? 'dashboard' : 'login')} 
            className="bg-primary-600 hover:bg-primary-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isLoggedIn ? 'Go to Dashboard' : 'Login to Rent Now'}
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-primary-700">Welcome to Wet N Wild Water Toys LLC</h2>
        <p className="text-lg mb-6">Your premier destination for jet ski rentals in Los Angeles. Experience the thrill of the water with our top-quality equipment and exceptional service.</p>
        {!isLoggedIn && (
          <button onClick={() => setCurrentPage('login')} className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200">Login</button>
        )}
        {isLoggedIn && (
          <button onClick={() => setCurrentPage('dashboard')} className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200">Go to Dashboard</button>
        )}
      </div>

      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-3 text-primary-700">About Us</h2>
            <p className="text-gray-700">Wet N Wild Water Toys LLC is dedicated to providing the best jet ski rental experience in Los Angeles. Our team ensures safety and fun on the water!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-3 text-primary-700">Our Services</h2>
            <p className="text-gray-700">We offer hourly and daily jet ski rentals, guided tours, and safety training. Book online today!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-3 text-primary-700">Frequently Asked Questions</h2>
            <div className="mb-2">
              <h3 className="font-bold">Do I need a license to rent a jet ski?</h3>
              <p className="text-gray-700">No, but you must be at least 18 years old and complete our safety training.</p>
            </div>
            <div>
              <h3 className="font-bold">What is included in the rental?</h3>
              <p className="text-gray-700">Each rental includes a life jacket, safety instructions, and a full tank of gas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
