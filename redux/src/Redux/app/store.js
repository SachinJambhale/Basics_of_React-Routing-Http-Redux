import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Components/redux/CounterSlice";
import userReducer from "../Components/user-task/UserSlice";
import employeeReducer from "../Components/thunk-demo/EmpSlice";
import postReducer from "../Components/thunk-demo/PostSlice";
import productReducer from "../Components/thunk-demo/ProductSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    employees: employeeReducer,
    posts: postReducer,
    products: productReducer,
  },
});

export default store;
