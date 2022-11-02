import React from "react";
import { Link, Outlet } from "react-router-dom";
const Services = () => {
  return (
    <>
      <h2>Services Component</h2>
      <nav>
        <Link to="">Development</Link>
        <Link to="marketing">Marketing</Link>
        <Link to="branding">Branding</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Services;
