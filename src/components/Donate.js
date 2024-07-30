import React, { useState } from 'react';

function Donate() {
  const [amount, setAmount] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    // Implement donation logic here
    alert(`Thank you for your donation of $${amount}!`);
    setAmount('');
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Support Our Cause</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          Your generous donation helps us continue Martyr Govinda Poudel's legacy and make a positive impact in our communities.
        </p>
        <form onSubmit={handleDonate}>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2">Donation Amount (USD)</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Donate;