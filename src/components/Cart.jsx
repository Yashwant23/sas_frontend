import React from "react";
import CartItem from "./CartItem";
import "../css/Cart.css"
const Cart = ({ cartItems, totalPrice }) => {
  return (
    <div className="cart">
      <h3 className="cart-title">Your Shopping Cart</h3>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </div>
      <div className="cart-total">
        <p>Total Price:</p>
        <p className="total-price">${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;