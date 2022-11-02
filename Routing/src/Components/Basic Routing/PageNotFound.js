import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
const PageNotFound = () => {
  return (
    <>
      <h2>The page You are looking is no longer available</h2>
      <Link to="" element={<Home />}>
        Go to Home Page
      </Link>
    </>
  );
};

export default PageNotFound;
