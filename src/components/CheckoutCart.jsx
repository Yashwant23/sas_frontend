import React, { useState } from "react";
import CartItem from "./CartItem";
import "../css/Cart.css";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const CheckoutCart = ({ cartItems, totalPrice }) => {
  const [showModal, setShowModal] = useState(false);

  const handleTransaction = () => {
    let items = [];
    let quantities = [];
    cartItems.map((item) => {
      items.push(item.name);
      quantities.push(item.quantity);
    });
    const data = {
      customerName: "Yashwant",
      phoneNumber: 123456789,
      items: items,
      quantities: quantities,
    }
    console.log(data)
    axios
      .post("http://localhost:8080/sales", data)
      .then((res) => {
        console.log(res.body)
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error in transaction:", error);
      });
  };

  const handleClose = () => setShowModal(false);

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
      <form>
        <input
          type="button"
          value="Proceed Transaction"
          className="btn"
          onClick={handleTransaction}
        />
      </form>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your transaction was successful. Thank you for shopping with us!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CheckoutCart;
