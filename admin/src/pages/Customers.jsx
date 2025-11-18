import React, { useState } from "react";
import { RefreshCw, Plus, ChevronDown } from "lucide-react";

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterType, setFilterType] = useState("All");

  const menus = [
    { id: 1, restaurant: "Italiano", name: "Margherita Pizza", price: "$12.50", status: true },
    { id: 2, restaurant: "Sushi Place", name: "California Roll", price: "$8.20", status: true },
    { id: 3, restaurant: "Burger Hub", name: "Cheeseburger", price: "$10.00", status: false },
  ];

  // Filter menus based on search query and filterType
  const filteredMenus = menus.filter((menu) => {
    const matchesSearch =
      menu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      menu.restaurant.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesFilter = true;
    if (filterType === "Active") matchesFilter = menu.status === true;
    if (filterType === "Inactive") matchesFilter = menu.status === false;
    if (filterType === "Price>10") matchesFilter = parseFloat(menu.price.slice(1)) > 10;

    return matchesSearch && matchesFilter;
  });

  const handleFilterClick = (type) => {
    setFilterType(type);
    setShowFilter(false); // Close dropdown after selecting
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4 mt-12">
        <div>
          <h1 className="text-2xl font-bold">Available Customers</h1>
          <p className="text-gray-500 mt-1">Total Customers: {menus.length}</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-gray-700" />
          </button>
          <button className="group px-8 py-2.5 bg-indigo-600 rounded-lg text-white flex items-center gap-2 cursor-pointer active:scale-95 transition duration-300 hover:bg-indigo-700">
            <Plus className="w-5 h-5" />
            <p className="relative h-6 overflow-hidden">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                Add New
              </span>
            </p>
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        {/* Search Input (Wide) */}
        <div className="flex items-center border-b gap-2 border-gray-500/30 h-[46px] overflow-hidden w-full md:max-w-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="#6B7280"
          >
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
          </svg>
          <input
            type="text"
            placeholder="Find restaurants"
            className="w-full h-full outline-none placeholder-gray-500 text-gray-500 bg-transparent text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter & Export Buttons */}
        <div className="flex gap-2 relative">
          {/* Filter Dropdown */}
          <button
            className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 transition flex items-center gap-1"
            onClick={() => setShowFilter(!showFilter)}
          >
            {filterType === "All" ? "Filter" : filterType} <ChevronDown className="w-4 h-4" />
          </button>

          {showFilter && (
            <div className="absolute top-full mt-1 right-0 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFilterClick("All")}
                >
                  All
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFilterClick("Active")}
                >
                  Active Menus
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFilterClick("Inactive")}
                >
                  Inactive Menus
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFilterClick("Price>10")}
                >
                  Price &gt; $10
                </li>
              </ul>
            </div>
          )}

          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
            Export
          </button>
        </div>
      </div>

      {/* Menus Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="overflow-x-auto w-full">
          <table className="min-w-[700px] table-auto w-full border-collapse">
            <thead className="bg-gray-50 text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">ID</th>
                <th className="px-4 py-3 font-semibold truncate">Restaurant</th>
                <th className="px-4 py-3 font-semibold truncate">Menu Name</th>
                <th className="px-4 py-3 font-semibold truncate">Price</th>
                <th className="px-4 py-3 font-semibold truncate">Status</th>
                <th className="px-4 py-3 font-semibold truncate">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {filteredMenus.map((menu) => (
                <tr key={menu.id} className="border-t border-gray-200">
                  <td className="px-4 py-3 truncate">{menu.id}</td>
                  <td className="px-4 py-3 truncate">{menu.restaurant}</td>
                  <td className="px-4 py-3 truncate">{menu.name}</td>
                  <td className="px-4 py-3 truncate">{menu.price}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-xs ${
                        menu.status ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {menu.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredMenus.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-4 py-4 text-center text-gray-400">
                    No menus found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customers;
