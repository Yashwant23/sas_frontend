import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import items from "../data.js"; // Assuming you have the items data
import InventoryItem from "./InventoryItem.jsx";

const InventoryPage = () => {
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
