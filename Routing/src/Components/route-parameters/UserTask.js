import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
const UserTask = () => {
  return (
    <section style={{ display: "flex", height: "90vh" }}>
      <div style={{ width: "30%", backgroundColor: "cyan", height: "100%" }}>
        <UserList />
      </div>
      <div style={{ backgroundColor: "orange", height: "100%", flexGrow: 1 }}>
        <Routes>
          <Route path=":name" element={<UserDetails />} />
        </Routes>
      </div>
    </section>
  );
};

export default UserTask;
