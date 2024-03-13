import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from './banner';
import ItemDisplayer from './itemDisplayer';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const headingStyle = {
        textAlign: 'center', // Center align text
        color: '#4a4a4a', // Dark grey color for text
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Modern, sans-serif font
        fontSize: '2.5rem', // Large font size
        fontWeight: '600', // Medium font weight
        textTransform: 'capitalize', // Capitalize the first letter of each word
        margin: '20px 0', // Margin top and bottom
        padding: '10px 0', // Padding top and bottom
        borderBottom: '2px solid #4a4a4a', // Bottom border for emphasis
    };

    return (
        <div>
            <h1 style={headingStyle}>{categoryName}</h1>
            {/* <Banner
                images={["https://st.depositphotos.com/1907633/2380/i/450/depositphotos_23805293-stock-photo-medicine-doctor-hand-working-with.jpg"]}
            /> */}
            <ItemDisplayer tag={categoryName} />
        </div>
    );
};

export default CategoryPage;
