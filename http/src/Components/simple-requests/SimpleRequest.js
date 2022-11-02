import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
const SimpleRequest = () => {
  return (
    <>
      <h2>User App</h2>
      <Routes>
        <Route path="" element={<UserList />} />
        <Route path=":id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default SimpleRequest;
