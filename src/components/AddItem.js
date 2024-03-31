import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddItem = ({ handleAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const newItem = { name, quantity: parseInt(quantity) };
        handleAddItem(newItem);
        setName('');
        setQuantity('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Add New Item</h2>
            <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="quantity">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Item
            </Button>
        </Form>
    );
};

export default AddItem;
