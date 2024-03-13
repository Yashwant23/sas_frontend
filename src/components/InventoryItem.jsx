import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const InventoryItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity);
    const [isEditing, setIsEditing] = useState(false);

    // Styles
    const cardStyle = {
        width: '18rem',
        margin: '15px', // Increased margin for better spacing
        overflow: 'hidden',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        backgroundColor: '#f8f9fa',
        cursor: 'pointer',
        position: 'relative', // Needed to position the expand icon correctly
    };

    const imageStyle = {
        height: '180px',
        width: '100%',
        objectFit: 'cover',
        transition: '0.5s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    };

    const cardBodyStyle = {
        padding: '20px', // Consistent padding with the ItemCard component
    };

    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#333',
        marginBottom: '15px', // Increased bottom margin for title
    };

    const cardPriceStyle = {
        fontSize: '1.25rem',
        color: '#28a745',
        fontWeight: '600',
        marginBottom: '15px', // Increased bottom margin for price
    };

    const cardDetailStyle = {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '15px', // Increased bottom margin for details
    };

    const quantityStyle = {
        fontSize: '1rem',
        fontWeight: '500',
        color: '#333',
        marginBottom: '15px', // Increased bottom margin for quantity
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Centered quantity controls
    };

    const iconStyle = {
        margin: '0 10px', // Added margin around icons for better spacing
    };


    // Event Handlers
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const increaseQuantity = () => setQuantity(prev => Number(prev) + 1);
    const decreaseQuantity = () => setQuantity(prev => (Number(prev) > 0 ? Number(prev) - 1 : 0));
    const handleDoubleClick = () => setIsEditing(true);
    const handleQuantityChange = (e) => setQuantity(e.target.value);
    const handleBlur = () => setIsEditing(false);

    return (
        <Card
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card.Img variant="top" src={item.image} alt={item.name} style={imageStyle} />
            <Card.Body style={cardBodyStyle}>
                <Card.Title style={cardTitleStyle}>{item.name}</Card.Title>
                <Card.Text style={cardPriceStyle}>Price: ${item.price}</Card.Text>
                <div style={quantityStyle} onDoubleClick={handleDoubleClick}>
                    <FontAwesomeIcon icon={faMinusCircle} onClick={decreaseQuantity} style={iconStyle} />
                    {isEditing ? (
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            onBlur={handleBlur}
                            autoFocus
                            style={{ width: '50px', textAlign: 'center' }}
                        />
                    ) : (
                        <span>Quantity: {quantity}</span>
                    )}
                    <FontAwesomeIcon icon={faPlusCircle} onClick={increaseQuantity} style={iconStyle} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default InventoryItem;
