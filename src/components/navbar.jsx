import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = ({ isLoggedIn, handleLogout }) => {
    const navigate = useNavigate();
    const customerId = localStorage.getItem('customerId');
    const logout = () => {
        handleLogout();
        navigate('/login');
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Supermarket Automation Software</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        <>
                            <Nav.Link as={Link} to="/sales">Sales</Nav.Link>
                            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/sales-stats">Sales Statistics</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/category/health">Health</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/category/food">Food</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/category/fruits">Fruits</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/cart">
                                <FaShoppingCart />
                            </Nav.Link>
                        </>
                    }

                </Nav>
                <Nav className="ml-auto">
                    {isLoggedIn ? (
                        <>
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
