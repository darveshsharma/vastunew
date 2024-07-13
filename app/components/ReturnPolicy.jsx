// src/pages/ReturnPolicy.jsx

import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Return Policy - Hamaragharr Vastu</h1>

      <p>At Hamaragharr Vastu, customer satisfaction is our top priority. We understand that sometimes issues may arise, and we are committed to assisting you in the best possible way. Please read our return policy carefully to understand our guidelines and your options.</p>

      <h2 className="text-xl font-bold mt-4">Non-Returnable Products</h2>
      <h3 className="text-lg font-bold mt-2">Non-Returnable Policy</h3>
      <ul className="list-disc pl-5">
        <li>All products sold by Hamaragharr Vastu are non-returnable. We do not accept returns or exchanges once a product has been purchased.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4">Defective or Damaged Items</h2>
      <h3 className="text-lg font-bold mt-2">Defective or Damaged Products</h3>
      <ul className="list-disc pl-5">
        <li>If you receive an item that is defective or damaged, please contact our customer service team immediately at <a href="mailto:support@hamaragharr.in" className="text-blue-500">support@hamaragharr.in</a> or +919582009393.</li>
        <li>We will work with you to address the issue promptly, which may include sending a replacement or issuing a refund if deemed appropriate.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4">Contact Us</h2>
      <p>If you have any questions or need further assistance regarding your purchase, please do not hesitate to contact our customer service team at:</p>
      <p>Email: <a href="mailto:support@hamaragharr.in" className="text-blue-500">support@hamaragharr.in</a><br />
      Phone: +919582009393<br />
      Our team is available from 10 AM to 6 PM to help you with any concerns.</p>

      <p className="mt-4">Thank you for choosing Hamaragharr Vastu. We value your business and are committed to providing you with high-quality products and exceptional service.</p>
    </div>
  );
};

export default ReturnPolicy;
