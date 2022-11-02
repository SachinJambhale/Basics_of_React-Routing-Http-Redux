import React from "react";
import { Link } from "react-router-dom";
const Product = ({ id, model, brand, price, image, desc }) => {
  return (
    <div
      style={{
        width: 220,
        border: "1px solid #888",
        borderRadius: 5,
        padding: 5,
        margin: 5,
        backgroundColor: "#fff",
      }}
    >
      <figure>
        <img src={image} style={{ width: "100%", height: 100 }} />
      </figure>
      <h4>
        <Link to={`/details/${id}`}>{model}</Link>
      </h4>
      <h3>Brand:{brand}</h3>
      <h3>Price:{price}</h3>
      <h3>Desc:{desc}</h3>
      
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
