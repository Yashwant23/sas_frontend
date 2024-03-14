import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, totalPrice }) => {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <div className="cart-items">
        {cartItems.map(
          (item, index) => (
            <CartItem
              key={index}
              name={item.name}
              quantity={item.quantity}
              image={item.image}
            />
          ),
          //   console.log(item),
        )}
      </div>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
