import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import CategoryPage from './components/category';
import HomePage from './components/home';
import SalesStatisticsPage from './components/SalesStatistic';
import InventoryPage from './components/InventoryPage';

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
