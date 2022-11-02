import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
const ProductDetails = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const products = Object.values(data).flat(2);
    const prod = products?.find((pro) => pro.id == pid);
    if (prod) setProduct({ ...prod });
  }, [pid]);
  const { id, model, brand, price, image, desc } = product;
  return (
    <>
      <h2>Product Details</h2>
      <img src={image} />
      <h3>
        {id} - {model}
      </h3>
      <h4> Brand - {brand}</h4>
      <h4>Price - {price}</h4>
      <p> {desc}</p>
    </>
  );
};

export default ProductDetails;
