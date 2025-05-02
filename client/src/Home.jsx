function Home({ setCurrentPage, isLoggedIn }) {
  return (
    <div>
      <section className="bg-yellow-500 text-white py-20 rounded-lg shadow-lg mb-8" style={{ backgroundColor: '#D97706' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Ride the Waves with Wet N Wild Water Toys LLC!</h1>
          <p className="text-lg md:text-xl mb-6">Wet N Wild Water Toys LLC, based in Los Angeles, CA, offers thrilling jet ski rentals for all ages. Incorporated in 2021, we’re here to make your beach day unforgettable. Located at 1024 West 105th St, Los Angeles, CA 90044.</p>
          <button
            onClick={() => setCurrentPage(isLoggedIn ? 'dashboard' : 'login')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md"
            style={{ minWidth: '48px' }}
          >
            Book Now
          </button>
        </div>
      </section>
      <section className="mb-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Jet Ski Adventures</h2>
          <img src="https://via.placeholder.com/600x400" alt="Jet Ski Adventure" className="mx-auto rounded-lg shadow-md max-w-full h-auto" />
          <p className="text-lg mt-4">Experience the thrill of jet skiing with our well-maintained fleet.</p>
        </div>
      </section>
    </div>
  );
}
