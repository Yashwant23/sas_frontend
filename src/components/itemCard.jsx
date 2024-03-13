import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const ItemCard = ({ image, name, price, details }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [quantity, setQuantity] = useState(0);

    // Styles
    const cardStyle = {
        width: '18rem',
        margin: '10px',
        overflow: 'hidden',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        backgroundColor: '#f8f9fa',
    };

    const imageStyle = {
        height: '180px',
        width: '100%',
        objectFit: 'cover',
        transition: '0.5s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    };

    const cardBodyStyle = {
        padding: '20px',
    };

    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#333',
        marginBottom: '10px',
    };

    const cardPriceStyle = {
        fontSize: '1.25rem',
        color: '#28a745',
        fontWeight: '600',
        marginBottom: '10px',
    };

    const cardDetailStyle = {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '10px',
    };

    const quantityStyle = {
        fontSize: '1rem',
        fontWeight: '500',
        color: '#333',
        marginBottom: '10px',
    };

    // Event Handlers
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Card
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card.Img variant="top" src={image} style={imageStyle} />
            <Card.Body style={cardBodyStyle}>
                <Card.Title style={cardTitleStyle}>{name}</Card.Title>
                <Card.Text style={cardPriceStyle}>${price}</Card.Text>
                <Card.Text style={cardDetailStyle}>{details}</Card.Text>
                <div>
                    <span style={quantityStyle}>Quantity: {quantity}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;
