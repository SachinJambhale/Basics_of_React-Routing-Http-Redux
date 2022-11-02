import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextFeild from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
const ProductForm = ({ loadProducts }) => {
  const [product, setProduct] = useState({
    model: "",
    price: "",
    brand: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log(product);
    axios
      .post("http://localhost:8080/products", product)
      .then((response) => {
        loadProducts();
        setProduct({
          model: "",
          price: "",
          brand: "",
          desc: "",
        });
        alert("product created....");
      })
      .catch((err) => {
        alert("could not created....");
      });
  };
  return (
    <Box component="section" sx={{ backgroundColor: "cyan", padding: 2 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <TextFeild
            variant="outlined"
            label="Model"
            name="model"
            value={product.model}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextFeild
            variant="outlined"
            label="Brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextFeild
            variant="outlined"
            label="Price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextFeild
            variant="outlined"
            label="Desc"
            name="desc"
            value={product.desc}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!product.model || !product.price}
          >
            create
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductForm;
