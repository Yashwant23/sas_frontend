// TableRow Component with enhanced inline styling
import React from 'react';

const rowStyle = {
    backgroundColor: '#fff', // White background for rows
    color: '#333', // Dark grey text for contrast
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
};

const imageStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
    borderRadius: '50%', // Fully rounded images
};

const TableRow = ({ item }) => {
    const { name, quantity, costPrice, sellingPrice, image } = item;
    const totalSale = quantity * sellingPrice;
    const netProfit = totalSale - (quantity * costPrice);

    return (
        <tr style={rowStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}>
            <td>
                <img src={image} alt={name} style={imageStyle} />
                {name}
            </td>
            <td>{quantity}</td>
            <td>{costPrice}</td>
            <td>{sellingPrice}</td>
            <td>{totalSale}</td>
            <td>{netProfit}</td>
        </tr>
    );
};

export default TableRow;
