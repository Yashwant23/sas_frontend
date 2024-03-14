import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ItemPriceCard = ({ name, price }) => {
    const [editMode, setEditMode] = useState(false);
    const [newPrice, setNewPrice] = useState(price);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        // You can implement the logic to save the new price here
        setEditMode(false);
        console.log(`New price for ${name}: ${newPrice}`);
    };

    const handleCancel = () => {
        setEditMode(false);
        // Reset the new price to the original price
        setNewPrice(price);
    };

    const handleChange = (e) => {
        setNewPrice(e.target.value);
    };

    return (
        <Card style={{
            width: '18rem',
            margin: '15px',
            overflow: 'hidden',
            borderRadius: '20px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            backgroundColor: '#f8f9fa',
            cursor: 'pointer',
            position: 'relative',
        }}>
            <Card.Body style={{ padding: '20px' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', marginBottom: '15px' }}>{name}</Card.Title>
                {editMode ? (
                    <div>
                        <input
                            type="number"
                            value={newPrice}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter new price"
                            style={{ marginBottom: '15px' }}
                        />
                        <Button variant="success" onClick={handleSave} style={{ marginRight: '5px' }}>Save</Button>
                        <Button variant="danger" onClick={handleCancel}>Cancel</Button>
                    </div>
                ) : (
                    <div>
                        <Card.Text style={{ fontSize: '1.25rem', color: '#28a745', fontWeight: '600', marginBottom: '15px' }}>Price: ${price}</Card.Text>
                        <Button variant="primary" onClick={handleEdit}>Edit Price</Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default ItemPriceCard;
