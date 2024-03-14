import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import items from "../data.js"; // Assuming you have the items data
import ItemPriceCard from "./ItemPriceCard";

const PriceManagement = () => {
    return (
        <Container>
            <h1>Price Management</h1>
            <Row style={{ margin: "0 -25px", padding: "25px" }}>
                {/* Adjusts the spacing between columns */}
                {items.map((item) => (
                    <ItemPriceCard name={item.name} price={item.price} />
                ))}
            </Row>
        </Container>
    );
};

export default PriceManagement;
