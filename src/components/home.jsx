import React from 'react';
import Banner from './banner';
import ItemDisplayer from './itemDisplayer';
import SearchBar from './searchBar';
const HomePage = () => {
    const handleSearch = (searchTerm) => {
        // Perform search functionality here
        console.log('Search term:', searchTerm);
    };


    return (
        <div>
            {/* <Banner images={images} /> */}
            {/* <SearchBar onSearch={handleSearch} /> */}
            <ItemDisplayer tag='top' />
        </div>
    );
};

export default HomePage;
