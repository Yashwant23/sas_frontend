import React from 'react';
import { useSelector } from 'react-redux';

const CustomerCart = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div>
            <h2>Customer Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerCart;
