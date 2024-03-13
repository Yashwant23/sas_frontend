import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = {
    backgroundColor: '#f8f9fa',
    textColor: '#5a5a5a',
    borderColor: '#ececec',
};

const sliderStyle = {
    backgroundColor: theme.backgroundColor,
};

const slideStyle = {
    padding: '20px',
    border: `1px solid ${theme.borderColor}`,
    borderRadius: '5px',
    textAlign: 'center',
};

const linkStyle = {
    color: theme.textColor,
    textDecoration: 'none',
};

const ItemSlider = ({ items }) => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings} style={sliderStyle}>
            {items.map((item, index) => (
                <div key={index}>
                    {/* Render your item component here */}
                    <div style={slideStyle}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <img src={item.image} alt={item.name} style={{ maxWidth: '100%' }} />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default ItemSlider;
