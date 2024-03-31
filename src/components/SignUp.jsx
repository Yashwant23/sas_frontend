// Import necessary libraries
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/SignupPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define the SignupPage component
const SignupPage = ({ handleLogin }) => {
  // Define state variables
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Define function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Define function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to authenticate user
      const response = await axios.post("http://localhost:5000/signup", formData);

      // Store customerId in localStorage
      localStorage.setItem("customerId", response.data.customerId);

      // Call handleLogin function passed as prop to update the login state
      handleLogin();

      // Redirect to cart page or any other page

    } catch (error) {
      console.error("Error signing up:", error);
    }
    navigate("/cart");
  };

  // Define navigate function from react-router-dom
  const navigate = useNavigate();

  // Return the JSX for the SignupPage component
  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="signup-btn">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

// Export the SignupPage component
export default SignupPage;
