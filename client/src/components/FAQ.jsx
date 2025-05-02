import React from 'react';

function FAQ() {
  return (
    <div className="faq">
      <h2 className="text-3xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-black">Do I need prior experience to rent a jet ski?</h3>
        <p className="text-black">No prior experience is necessary. We provide safety instructions and guidance before your rental.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-black">What is included in the rental?</h3>
        <p className="text-black">Each rental includes the jet ski, a life jacket, and basic operational instructions.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-black">Can I book for a group?</h3>
        <p className="text-black">Yes, we offer group discounts and can accommodate multiple jet skis for group outings.</p>
      </div>
    </div>
  );
}

export default FAQ;
