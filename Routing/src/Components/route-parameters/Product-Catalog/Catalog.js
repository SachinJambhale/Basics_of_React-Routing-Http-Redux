import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
const Catalog = () => {
  return (
    <section style={{ display: "flex", minHeight: "90vh" }}>
      <div style={{ width: "25%", backgroundColor: "cyan" }}>
        <Categories />
      </div>
      <div style={{ width: "70%", flexGrow: 1, backgroundColor: "orange" }}>
        <Routes>
          <Route path="" element={<Navigate to="./all" />} />
          <Route path=":category" element={<ProductList />} />
          <Route path="details/:pid" element={<ProductDetails />} />
        </Routes>
      </div>
    </section>
  );
};

export default Catalog;
