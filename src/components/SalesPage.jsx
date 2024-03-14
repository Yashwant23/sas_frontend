import React from "react";
import Cart from "./Cart";
import demoCarts from "../demoCart";
const SalesPage = () => {
  //   let carts = demoCarts;
  return (
    <div className="sales-page">
      <h2>Sales Page</h2>
      <div className="carts">
        {demoCarts.map((cart, index) => (
          <Cart
            key={index}
            cartItems={cart.items}
            totalPrice={cart.totalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default SalesPage;
