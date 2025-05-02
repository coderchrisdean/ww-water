function Services() {
  const services = [
    { name: 'Standard Jet Ski', price: '$50/hour', description: 'Perfect for beginners and casual riders.' },
    { name: 'Premium Jet Ski', price: '$75/hour', description: 'For experienced riders seeking extra power and speed.' }
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Services</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-8">
        <p className="text-lg mb-4">Choose from our fleet of well-maintained jet skis, perfect for all skill levels.</p>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="border-b pb-2">
              <h2 className="text-xl font-semibold">{service.name}: {service.price}</h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
