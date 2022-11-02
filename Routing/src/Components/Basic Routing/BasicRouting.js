import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services/Services";
import Product from "./Product";
import Contact from "./Contact";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import Development from "./Services/Development";
import Marketing from "./Services/Marketing";
import Branding from "./Services/Branding";
const BasicRouting = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* {http://localhost:3000} */}
        <Route path="" element={<Home />} />

        {/* {http://localhost:3000/about} */}
        <Route path="About/*" element={<About />} />

        {/* {http://localhost:3000/services} */}
        <Route path="Services" element={<Services />}>
          <Route path="" element={<Development />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="branding" element={<Branding />} />
        </Route>

        {/* {http://localhost:3000/product} */}
        <Route path="Product" element={<Product />} />

        {/* {http://localhost:3000/contact} */}
        <Route path="Contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="" />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default BasicRouting;
