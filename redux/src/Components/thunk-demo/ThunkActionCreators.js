import axios from "axios";
import { addPosts } from "./PostSlice";
import { addProduct } from "./ProductSlice";
import { addEmployee } from "./EmpSlice";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(addPosts(response.data));
  };
};
export const fetchProducts = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(addProduct(response.data));
  };
};
export const fetchEmployees = (page) => {
  return async (dispatch) => {
    const pg = page;
    const response = await axios.get(`https://reqres.in/api/users?page=${pg}`);
    dispatch(addEmployee(response.data?.data));
  };
};
