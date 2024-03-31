import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar";
import CategoryPage from "./components/category";
import HomePage from "./components/home";
import SalesStatisticsPage from "./components/SalesStatistic";
import InventoryPage from "./components/InventoryPage";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/Login";
import SalesPage from "./components/SalesPage";
import PriceManagement from "./components/PriceManagement";
import Cart from "./components/Cart";
import CustomerCart from './components/CustomerCart';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial login state

  const handleLogin = () => {
    // Implement your login logic
    setIsLoggedIn(true); // Set isLoggedIn to true after successful login
  };

  const handleLogout = () => {
    // Implement your logout logic
    setIsLoggedIn(false); // Set isLoggedIn to false after logout
  };

  return (
    <Router>
      <div>
        <NavigationBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/sales-stats" element={<SalesStatisticsPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/cart" element={<Cart customerId={1} />} />
          <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
          <Route path="/Signin" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
