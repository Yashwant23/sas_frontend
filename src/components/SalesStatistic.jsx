import React from "react";
import { Container } from "react-bootstrap";
import Table from "./Table.jsx";
import items from "../data.js";
const SalesStatisticsPage = () => {
  console.log(items);
  return (
    <Container>
      <h1>Sales Statistics</h1>
      <Table salesData={items} />
    </Container>
  );
};

export default SalesStatisticsPage;
