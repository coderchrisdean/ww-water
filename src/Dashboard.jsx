function Dashboard({ user }) {
  const [reservations, setReservations] = React.useState([]);

  React.useEffect(() => {
    const fetchReservations = async () => {
      if (user) {
        try {
          const response = await fetch('/api/user/reservations', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          if (response.ok) {
            const data = await response.json();
            setReservations(data);
          } else {
            console.error('Failed to fetch reservations');
          }
        } catch (error) {
          console.error('Error fetching reservations:', error);
        }
      }
    };
    fetchReservations();
  }, [user]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>User Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name}!</h2>
        <p className="text-lg mb-4">Email: {user.email}</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md mb-4" style={{ minWidth: '48px' }}>
          Book a Jet Ski
        </button>
        <h3 className="text-xl font-semibold mt-6 mb-2">Your Reservations</h3>
        {reservations.length > 0 ? (
          <ul className="space-y-2">
            {reservations.map(reservation => (
              <li key={reservation.id} className="border-b pb-2">
                <p>Jet Ski: {reservation.jet_ski_name}</p>
                <p>Date: {reservation.reservation_date}</p>
                <p>Time: {reservation.start_time} - {reservation.end_time}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reservations found.</p>
        )}
      </div>
    </div>
  );
}
