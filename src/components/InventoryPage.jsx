import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InventoryItem from "./InventoryItem.jsx";

const InventoryPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items") // Change the URL to match your backend server endpoint
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <Container>
      <h1>Inventory</h1>
      <Row style={{ margin: "0-25x", padding: "25px" }}>
        {" "}
        {/* Adjusts the spacing between columns */}
        {items.map((item) => (
          <div
            key={item.id}
            xs={12}
            sm={10}
            md={4}
            lg={3}
            style={{ padding: "15px" }}
          >
            {" "}
            {/* Adds padding to each column */}
            <InventoryItem item={item} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default InventoryPage;
