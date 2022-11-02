import React from "react";
import { Link } from "react-router-dom";
import products from "./data"
const Categories = () => {
  return (
    <>
      <h2>Categories</h2>
      <nav style={{display:"flex",flexDirection:"column"}} >
        {Object.keys(products).map((category, i) => (
          <Link to={`/${category}`} style={{textTransform:"capitalize"}}>
            {category}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Categories;
