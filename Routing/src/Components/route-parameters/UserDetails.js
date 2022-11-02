import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const { name } = useParams();
  return (
    <>
      <h2>Name: {name}</h2>
    </>
  );
};

export default UserDetails;
