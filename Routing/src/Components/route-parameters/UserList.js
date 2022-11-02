import React from "react";
import { Link } from "react-router-dom";
const UserList = () => {
  return (
    <nav>
      <p>
        <Link to="/sachin">Sachin</Link>
      </p>
      <p>
        <Link to="/balaji">Balaji</Link>
      </p>
      <p>
        <Link to="/chaitanya">Chaitanya</Link>
      </p>
      <p>
        <Link to="/atul">Atul</Link>
      </p>
    </nav>
  );
};

export default UserList;
