import React from "react";

const CartItem = ({ name, quantity, image }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={name} className="item-image" />
      <div className="item-details">
        <h4 className="item-name">{name}</h4>
        <p className="item-quantity">Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
