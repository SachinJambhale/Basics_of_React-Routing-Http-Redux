import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext } from "react";
import { ProductContext } from "./ProductApp";

const Product = ({ id, model, brand, desc, price }) => {
  const { deleteProducts } = useContext(ProductContext);
  return (
    <div
      style={{
        width: 250,
        padding: 5,
        margin: 5,
        border: "1px solid #000",
        borderRadius: 5,
        backgroundColor: "#fff",
      }}
    >
      <h3>
        {id}-{model}
      </h3>
      <h4>Brand: {brand}</h4>
      <h4>Price: {price}</h4>
      <h4>{desc}</h4>
      <IconButton color="error" onClick={() => deleteProducts(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Product;
