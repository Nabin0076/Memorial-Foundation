import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
    const [stats, setStats] = useState({
    totalDonations: 0,
    activePrograms: 0,
    pendingInquiries: 0,
  });

  useEffect(() => {
    // Fetch admin dashboard data
    // This is a mock implementation. Replace with actual API calls.
    setStats({
      totalDonations: 15000,
      activePrograms: 4,
      pendingInquiries: 7,
    });
  }, []);

  const handleLogout = () => {
    logout();
    navigate.push('/');
  };

  if (!user) {
    navigate.push('/login');
    return null;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Donations</h2>
          <p className="text-3xl font-bold">${stats.totalDonations}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Active Programs</h2>
          <p className="text-3xl font-bold">{stats.activePrograms}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Pending Inquiries</h2>
          <p className="text-3xl font-bold">{stats.pendingInquiries}</p>
        </div>
      </div>
      {/* Add more admin functionality here */}
    </div>
  );
}

export default AdminDashboard;