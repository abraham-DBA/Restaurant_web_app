import React from 'react';

const Dashboard = () => {
  // Dummy data for now
  const stats = [
    { title: "Total Restaurants", value: 12 },
    { title: "Total Menus", value: 45 },
    { title: "Total Orders", value: 134 },
    { title: "Total Customers", value: 87 },
    { title: "Total Revenue", value: '450,000' },
  ];

  const recentOrders = [
    { id: 1, restaurant: "Italiano", customer: "John Doe", amount: "$24.50" },
    { id: 2, restaurant: "Sushi Place", customer: "Jane Smith", amount: "$18.20" },
    { id: 3, restaurant: "Burger Hub", customer: "Mike Johnson", amount: "$12.00" },
  ];

  const recentSales = [
    { id: 1, restaurant: "Italiano", customer: "John Doe", amount: "$24.50" },
    { id: 2, restaurant: "Sushi Place", customer: "Jane Smith", amount: "$18.20" },
    { id: 3, restaurant: "Burger Hub", customer: "Mike Johnson", amount: "$12.00" },
  ];

  return (
    <div className="p-6 mt-12">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center"
          >
            <p className="text-gray-500 text-sm">{stat.title}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Restaurant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.restaurant}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

            {/* Recent Sales Table */}
      <div className="bg-white shadow rounded-lg p-4 mt-5">
        <h2 className="text-xl font-semibold mb-4">Recent Sales</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Restaurant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.restaurant}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
