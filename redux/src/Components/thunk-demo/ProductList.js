import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "./ProductSlice";
import { fetchProducts } from "./ThunkActionCreators";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
}) => (
  <div
    style={{ width: 250, padding: 5, margin: 5, boxShadow: "2px 2px 3px #999" }}
  >
    <img src={image} style={{ width: "100%" }} />
    <h3>
      {id}-{title}
    </h3>
    <h4>Price:{price}</h4>
    <h4>Category:{category}</h4>
    <h4>
      Rating:{rating?.rate} By {rating?.count} customers
    </h4>
    <p>{description}</p>
  </div>
);
const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <h2>Product List</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(products) &&
          products.map((prod) => <Product key={prod.id} {...prod} />)}
      </section>
    </>
  );
};

export default ProductList;
