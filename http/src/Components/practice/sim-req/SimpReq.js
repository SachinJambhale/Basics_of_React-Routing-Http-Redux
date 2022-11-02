import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDet from "./UserDet";
import UserList from "./UserList";

const SimpReq = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<UserList />} />
        <Route path=":id" element={<UserDet />} />
      </Routes>
    </>
  );
};

export default SimpReq;
