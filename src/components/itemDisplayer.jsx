import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./itemCard.jsx";
import Cart from "./CheckoutCart.jsx"
const ItemDisplayer = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  let tag = props.tag;
  console.log(tag);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((item) =>
          item.tag === tag ? (
            <ItemCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ) : null
        )}
        <br />

      </div>

    </>
  );
};

export default ItemDisplayer;
