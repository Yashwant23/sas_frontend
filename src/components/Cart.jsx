import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";

const Cart = ({ customerId }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/cart/${customerId}`);
                setCartItems(response.data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, [customerId]);

    const handleCheckout = () => {
        axios
            .post("http://localhost:5000/checkout", { customerId, cartItems })
            .then((res) => {
                console.log("Checkout successful:", res.data);
                // Optionally, you can reset the cart items state or perform any other action after successful checkout
            })
            .catch((error) => {
                console.error("Error during checkout:", error);
            });
    };

    return (
        <div className="cart">
            <h3 className="cart-title">Your Shopping Cart</h3>
            <div className="cart-items">
                {cartItems !== undefined &&
                    cartItems.map((item, index) => (
                        <CartItem key={index} name={item.name} quantity={item.quantity} image={item.image} />
                    ))}
            </div>
            <button className="btn btn-primary my-5 mx-5" onClick={handleCheckout}>
                Checkout
            </button>
        </div>
    );
};

export default Cart;
