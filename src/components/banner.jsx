import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const bannerStyle = {
        width: '100%', // Full width
        height: 'auto', // Maintain aspect ratio
        margin: '20px auto', // Vertically centered and 20px margin on the top and bottom
        overflow: 'hidden', // Hide overflow content
        display: 'flex', // Use flexbox for layout
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        backgroundColor: '#f0f0f0', // Light grey background for a soft look
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        color: '#333', // Dark grey color for text
        fontFamily: "'Helvetica Neue', sans-serif", // Modern, sans-serif font
        textAlign: 'center', // Center align text
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={bannerStyle}>
            {images.map((image, idx) => (
                <Carousel.Item key={idx} style={{ ...bannerStyle, margin: 0 }}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${idx}`}
                        style={{
                            maxHeight: '500px', // Maximum height for images
                            objectFit: 'cover', // Cover fit to maintain aspect ratio
                        }}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Banner;
