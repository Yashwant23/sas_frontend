import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navStyle = {
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #ececec',
};

const brandStyle = {
    color: '#5a5a5a',
    fontWeight: 'bold',
};

const linkStyle = {
    color: '#5a5a5a',
    textDecoration: 'none',
};

const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
};

const searchInputStyle = {
    borderRadius: '30px',
    border: '2px solid #ced4da',
};

const searchButtonStyle = {
    borderRadius: '30px',
    border: '2px solid #ced4da',
    backgroundColor: 'transparent',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const NavigationBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchTerm);
    };

    return (
        <Navbar style={navStyle} expand="lg">
            <Link to="/" style={linkStyle}>
                <Navbar.Brand style={brandStyle}>Supermarket Automation Software</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/sales" style={linkStyle}>
                            Sales
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/inventory" style={linkStyle}>
                            Inventory
                        </Link>
                    </Nav.Link>


                    <NavDropdown title="Reports" id="basic-nav-dropdown">

                        <NavDropdown.Item as={Link} to="/sales-stats" style={linkStyle}>
                            Sales Statistics
                        </NavDropdown.Item>


                        <Link to="/profit-loss" style={linkStyle}>
                            <NavDropdown.Item>Profit & Loss</NavDropdown.Item>
                        </Link>

                        <NavDropdown.Divider />
                        <Link to="/price-management" style={linkStyle}>
                            <NavDropdown.Item>Price Management</NavDropdown.Item>
                        </Link>

                    </NavDropdown>
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/category/health" style={linkStyle}>
                            Health
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/food" style={linkStyle}>
                            Food
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/fruits" style={linkStyle}>
                            Fruits
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline style={searchBarStyle} onSubmit={handleSearch}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={searchInputStyle}
                    />
                    <Button variant="outline-success" type="submit" style={searchButtonStyle}>
                        <FaSearch />
                    </Button>
                </Form>
                <Nav>
                    <Link to="/login" style={linkStyle}>
                        <Nav.Link>Login</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;