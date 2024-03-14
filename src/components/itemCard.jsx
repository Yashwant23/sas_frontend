import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../css/ItemCard.css'; // Import the CSS file

const ItemCard = ({ image, name, price, details }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [quantity, setQuantity] = useState(0);

    // Event Handlers
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Card
            className="cardStyle"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card.Img variant="top" src={image} className="imageStyle" />
            <Card.Body className="cardBodyStyle">
                <Card.Title className="cardTitleStyle">{name}</Card.Title>
                <Card.Text className="cardPriceStyle">${price}</Card.Text>
                <Card.Text className="cardDetailStyle">{details}</Card.Text>
                <div>
                    <span className="quantityStyle">Quantity: {quantity}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;
