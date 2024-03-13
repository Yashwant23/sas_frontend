// Table Component with enhanced inline styling
import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import TableRow from './TableRow';

const tableStyle = {
    backgroundColor: '#ffffff', // White background for a clean look
    color: '#212529', // Dark text for better readability
    fontFamily: '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif', // Modern font
    borderCollapse: 'collapse', // Collapse borders for a cleaner look
    width: '100%', // Full width table
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Box shadow for a subtle depth effect
    borderRadius: '8px', // Rounded corners for a modern look
    overflow: 'hidden', // Hide overflow to respect border radius
};

const Table = ({ salesData }) => {
    return (
        <BootstrapTable striped bordered hover style={tableStyle}>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Cost Price</th>
                    <th>Selling Price</th>
                    <th>Total Sale</th>
                    <th>Net Profit</th>
                </tr>
            </thead>
            <tbody>
                {salesData.map((item, index) => (
                    <TableRow key={index} item={item} />
                ))}
            </tbody>
        </BootstrapTable>
    );
};

export default Table;
