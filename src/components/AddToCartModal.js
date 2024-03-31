import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddToCartModal = ({ showModal, setShowModal, quantity, setQuantity, handleAddToCart }) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddToCartModal;
