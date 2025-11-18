import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Menus from "./pages/Menus";
import Restaurants from "./pages/Restaurants";
import Customers from "./pages/Customers";
import Profile from './pages/Profile'
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
