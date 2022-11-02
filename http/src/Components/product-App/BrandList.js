import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const BrandList = ({ handleChange }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      const products = response.data;
      const arr = products?.map((prod) => prod.brand);
      const brandArr = Array.from(new Set(arr));
      setBrands(brandArr);
    });
  }, []);
  return (
    <>
      <select onChange={handleChange}>
        <option value="all">All</option>
        {brands?.map((brand, i) => (
          <option key={brand + i} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </>
  );
};

export default BrandList;
