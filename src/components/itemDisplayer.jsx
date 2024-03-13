import React from 'react';
import ItemCard from './itemCard.jsx';
import items from '../data.js'


const ItemDisplayer = (props) => {
    let tag = props.tag
    console.log(tag)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {items.map(item => (
                item.tag === tag ? <ItemCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                /> : null
            ))}
        </div>
    );
};

export default ItemDisplayer;
