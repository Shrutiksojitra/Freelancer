import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Earnings Overview</h2>
      <p className="text-lg mb-4">Total Earnings: $800</p>
      <div className="flex space-x-4">
        {/* Mock bar chart */}
        <div className="bg-green-500 h-16 w-6"></div>
        <div className="bg-green-500 h-24 w-6"></div>
        <div className="bg-green-500 h-12 w-6"></div>
      </div>
    </div>
  );
};

export default Dashboard;
