import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const LoginPage = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to authenticate user
      const response = await axios.post("http://localhost:5000/login", {
        username: formData.username,
        password: formData.password,
      });

      // Assuming the response contains the customerId upon successful login
      const customerId = response.data.customerId;

      // Store the customerId in localStorage
      localStorage.setItem("customerId", customerId);

      // Call the handleLogin function passed as prop to update the login state
      handleLogin();

      console.log("Login successful!");
      console.log("Submitted Data:", formData);
    } catch (error) {
      console.error("Error logging in:", error);
    }
    navigate("/cart");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Log In</h2>
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

        <Button variant="primary" type="submit" className="login-btn">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
