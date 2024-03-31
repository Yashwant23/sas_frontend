import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios'; // Import axios for making API requests
import '../css/ItemCard.css'; // Import the CSS file

const ItemCard = ({ image, name, price, details }) => {
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Event Handlers
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const addToCart = () => {
        // Make a POST request to the backend to add item to cart
        axios.post('http://localhost:5000/cart/add', {
            name: name,
            image: image,
            quantity: quantity,
            customerId: 10
        })
            .then(response => {
                console.log('Item added to cart:', response.data);
                // Optionally, you can handle success response here
                setShowModal(false);
            })
            .catch(error => {
                console.error('Error adding item to cart:', error);
                // Optionally, you can handle error response here
            });
    };

    return (
        <>
            <Card className="cardStyle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Card.Img variant="top" src={image} className="imageStyle" />
                <Card.Body className="cardBodyStyle">
                    <Card.Title className="cardTitleStyle">{name}</Card.Title>
                    <Card.Text className="cardPriceStyle">${price}</Card.Text>
                    <Card.Text className="cardDetailStyle">{details}</Card.Text>
                    <div>
                        <span className="quantityStyle">Quantity: {quantity}</span>
                        <Button variant="primary" onClick={handleShowModal}>Add to Cart</Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Enter quantity:</p>
                    <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ItemCard;

