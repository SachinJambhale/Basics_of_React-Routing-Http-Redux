import React, { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";

// dynamic import
const Customer = lazy(() => import("./Customer"));
const Product = lazy(() => import("./Product"));
const Orders = lazy(() => import("./Orders"));
const LazyLoading = () => {
  return (
    <>
      <h2>Lazy Loading</h2>
      <nav>
        <Link to="">Home</Link>
        <Link to="customer">Customers</Link>
        <Link to="product">Products</Link>
        <Link to="orders">Orders</Link>
      </nav>
      <Suspense>
        <Routes>
          <Route path="" element={<LandingPage />}/>
          <Route path="customer" element={<Customer />}/>
          <Route path="product" element={<Product/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Routes>
      </Suspense>
    </>
  );
};

export default LazyLoading;
