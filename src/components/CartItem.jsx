// CartItem.js
import React from 'react';
import '../css/CartItem.css'; // Make sure to create a corresponding CSS file for styling

const CartItem = ({ name, quantity, image }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{name}</h4>
        <p className="cart-item-quantity">Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
