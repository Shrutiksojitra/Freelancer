import React from 'react';

const PaymentList = ({ payments, markAsPaid }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Payments</h3>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id} className="mb-4">
            <p>Amount: ${payment.amount}</p>
            <p>Status: {payment.status}</p>
            {payment.status === 'unpaid' && (
              <button
                onClick={() => markAsPaid(payment.id)}
                className="bg-green-500 text-white py-1 px-2 rounded"
              >
                Mark as Paid
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
