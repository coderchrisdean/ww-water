function Contact() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Name"
              tabIndex="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email"
              tabIndex="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Message"
              tabIndex="0"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md" style={{ minWidth: '48px' }}>
            Submit
          </button>
          {submissionStatus === 'success' && <p className="text-green-600">Your message has been sent successfully!</p>}
          {submissionStatus === 'error' && <p className="text-red-600">There was an error sending your message. Please try again.</p>}
        </form>
      </div>
      <div className="text-center">
        <p className="text-lg">1024 West 105th St, Los Angeles, CA 90044</p>
        <p className="text-lg">Email: <a href="mailto:info@wetnwildwatertoys.com" className="text-blue-500 hover:underline">info@wetnwildwatertoys.com</a></p>
        <p className="text-lg">Phone: (555) 123-4567</p>
      </div>
    </div>
  );
}
