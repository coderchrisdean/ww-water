import React from 'react';

function FAQ() {
  return (
    <div className="faq">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="mb-4">
        <h3 className="font-bold">Do I need a license to rent a jet ski?</h3>
        <p>No, but you must be at least 18 years old and complete our safety training.</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">What is included in the rental?</h3>
        <p>Each rental includes a life jacket, safety instructions, and a full tank of gas.</p>
      </div>
    </div>
  );
}

export default FAQ;
