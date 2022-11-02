import React, { useState, useEffect, createContext } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from "axios";
import BrandList from "./BrandList";
export const ProductContext = createContext();
const ProductApp = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = (brand) => {
    let url = `http://localhost:8080/products`;
    if (brand) url = `http://localhost:8080/products?brand=${brand}`;
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(console.log);
  };

  const handleBrandChange = (e) => {
    const { value: brand } = e.target;
    if (brand !== "all") {
      loadProducts(brand);
    } else {
      loadProducts();
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProducts = (id) => {
    axios
      .delete(`http://localhost:8080/products/${id}`)
      .then((response) => {
        loadProducts();
        alert("deleted");
      })
      .catch((err) => {
        alert("not deleted");
      });
  };
  return (
    <main>
      <ProductForm loadProducts={loadProducts} />
      <BrandList handleChange={handleBrandChange} />
      <ProductContext.Provider value={{ deleteProducts }}>
        <ProductList products={products} />
      </ProductContext.Provider>
    </main>
  );
};

export default ProductApp;
