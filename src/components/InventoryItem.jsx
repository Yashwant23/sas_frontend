import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/InventoryItem.css'; // Import the CSS file
import axios from "axios";

const InventoryItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity);
    const [price, setPrice] = useState(item.price);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const handleQuantityChange = (e) => setQuantity(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);

    const handleUpdateQuantity = () => {
        onUpdateQuantity(item.id, quantity, price);
        handleCloseModal();
    };

    const onUpdateQuantity = (itemId, newQuantity, newPrice) => {
        // Send request to update quantity and price to the server
        axios.put(`http://localhost:5000/inventory/${itemId}`, { quantity: newQuantity, price: newPrice })
            .then(response => {
                console.log('Quantity and price updated successfully:', response.data);
                // Optionally, you can update the local state or trigger a re-fetch of items from the server
            })
            .catch(error => {
                console.error('Error updating quantity and price:', error);
                // Handle error gracefully
            });
    };

    return (
        <>
            <Card
                className="card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleShowModal}
            >
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{item.name}</Card.Title>
                    <Card.Text className="card-price">Price: ${item.price}</Card.Text>
                    <div className="quantity-container">
                        <span>Quantity: {quantity}</span>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={item.image} alt={item.name} className="modal-image" />
                    <Form.Group controlId="formQuantity">
                        <Form.Label>Update Quantity:</Form.Label>
                        <Form.Control
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                        <Form.Label>Update Price:</Form.Label>
                        <Form.Control
                            type="number"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateQuantity}>
                        Update Quantity and Price
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default InventoryItem;
