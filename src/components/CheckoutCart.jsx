import React, { useState } from "react";
import CartItem from "./CartItem";
import "../css/Cart.css";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const CheckoutCart = ({ cartItems, totalPrice }) => {
  const [showModal, setShowModal] = useState(false);
  const [billData, setBillData] = useState(null);

  const handleTransaction = () => {
    let items = [];
    let quantities = [];
    cartItems.forEach((item) => {
      items.push(item.name);
      quantities.push(item.quantity);
    });
    const data = {
      customerName: "Yashwant",
      phoneNumber: 123456789,
      items: items,
      quantities: quantities,
    };

    axios
      .post("http://localhost:8080/sales", data)
      .then((res) => {
        setBillData(res.data);
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
          <p>Customer: {billData && billData.customerName}</p>
          <p>Items:</p>
          <ul>
            {billData &&
              billData.items.map((item, index) => (
                <li key={index}>
                  {item} - {billData.quantity[index]} x ${billData.amount[index]}
                </li>
              ))}
          </ul>
          <p>Total Amount: ${billData && billData.totalAmount}</p>
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
