import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import data from "./data";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    if (category == "all") {
      const arr = Object.values(data).flat(2);
      if (arr) setProducts(arr);
    } else {
      const arr = data[category];
      if (arr) setProducts(arr);
    }
  }, [category]);
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(products) &&
        products.map((prod, i) => <Product key={prod.id} {...prod} />)}
    </section>
  );
};

export default ProductList;
