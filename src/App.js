import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar";
import CategoryPage from "./components/category";
import HomePage from "./components/home";
import SalesStatisticsPage from "./components/SalesStatistic";
import InventoryPage from "./components/InventoryPage";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/Login";
import SalesPage from "./components/SalesPage";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/sales-stats" element={<SalesStatisticsPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/sales" element={<SalesPage />} />
        </Routes>
        {/* <LoginPage /> */}
        {/* <SignupPage /> */}
      </div>
    </Router>
  );
};

export default App;
