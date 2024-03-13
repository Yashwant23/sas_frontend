import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <FormControl
                        type="text"
                        placeholder="Search"
                        size="lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            borderRadius: '30px',
                            padding: '10px 20px',
                            border: '2px solid #ced4da',
                            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </Col>
                <Col md="auto">
                    <Button
                        variant="outline-success"
                        type="submit"
                        size="lg"
                        style={{
                            borderRadius: '30px',
                            padding: '10px 20px',
                            border: '2px solid #28a745',
                            boxShadow: '0 2px 2px rgba(0, 123, 255, 0.2)',
                            fontWeight: 'bold'
                        }}
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBar;
