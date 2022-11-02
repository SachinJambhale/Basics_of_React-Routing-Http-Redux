import React from "react";
import axios from "axios";
import Product from "./Product";
const ProductList = ({ products }) => {
  return (
    <section style={{ backgroundColor: "orange", padding: 5 }}>
      <h3>Product List</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(products) &&
          products.map((prod, i) => <Product key={prod.id} {...prod} />)}
      </div>
    </section>
  );
};

export default ProductList;
