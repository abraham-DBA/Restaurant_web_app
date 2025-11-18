import React from "react";
import { NavLink } from "react-router-dom";
import restaurantIcon from'../assets/restaurant.png'
import ordersIcon from '../assets/orders.png'
import menuIcon from "../assets/menuIcon.png";
import settingsIcon from "../assets/settings.png"
import customersIcon from "../assets/customers.png"

const Sidebar = () => {
  const dashboardicon = (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
    </svg>
  );

  const menu = (
    <img className="w-6 h-6" src={menuIcon} />
  );

  const restaurant = (
    <img className="w-6 h-6" src={restaurantIcon} />
  );

  const orders = (
    <img className="w-6 h-6" src={ordersIcon} />
  );
  
  const settings = (
    <img className="w-6 h-6" src={settingsIcon} />
  );

    const customers = (
    <img className="w-6 h-6" src={customersIcon} />
  );
  

  const links = [
    { name: "Dashboard", path: "/", icon: dashboardicon },
    { name: "Menus", path: "/menus", icon: menu },
    { name: "Restaurants", path: "/restaurants", icon: restaurant },
    { name: "Orders", path: "/orders", icon: orders },
    { name: "Customers", path: "/customers", icon: customers },
    { name: "Settings", path: "/settings", icon: settings },
    
  ];

  return (
    <div className="md:w-64 w-16 border-r border-gray-300 pt-20 flex flex-col transition-all duration-300">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 gap-3 ${
              isActive
                ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                : "hover:bg-gray-100/90 border-white text-gray-700"
            }`
          }
        >
          {item.icon}
          <p className="md:block hidden text-center">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
