import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "./Table.jsx";
import axios from "axios";

const SalesStatisticsPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <Container>
      <h1>Sales Statistics</h1>
      <Table salesData={items} />
    </Container>
  );
};

export default SalesStatisticsPage;
