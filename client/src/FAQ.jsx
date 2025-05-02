function FAQ() {
  const faqs = [
    { question: 'Do I need a license?', answer: 'No, but safety training is provided.' },
    { question: 'What’s the minimum age?', answer: '16 with parental consent.' }
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Frequently Asked Questions</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li key={index} className="border-b pb-2">
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
