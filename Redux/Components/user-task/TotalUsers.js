import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "./UserSlice";

const TotalUsers = () => {
  const users = useSelector(selectUsers);
  return (
    <>
      <h2>Total Users -{users?.length}</h2>
    </>
  );
};

export default TotalUsers;
