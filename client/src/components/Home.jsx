import React from 'react';

function Home({ setCurrentPage, isLoggedIn }) {
  return (
    <div className="home">
      <div className="relative h-96 bg-gray-200 overflow-hidden mb-8">
        <img 
          src="https://images.unsplash.com/photo-1521651201144-634f700b36f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="Person on Jet Ski" 
          className="object-cover w-full h-full" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-2">Wet N Wild Water Toys</h1>
          <p className="text-xl mb-6">Your premier destination for jet ski rentals in Los Angeles!</p>
          {isLoggedIn ? (
            <button 
              onClick={() => setCurrentPage('dashboard')} 
              className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Go to Dashboard
            </button>
          ) : (
            <button 
              onClick={() => setCurrentPage('login')} 
              className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login to Book
            </button>
          )}
        </div>
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
