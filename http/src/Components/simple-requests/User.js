import React from "react";
import { Link } from "react-router-dom";

const User = ({ avatar, first_name, last_name, id, email }) => (
  <div style={{ width: 250, border: "1px solid #000", margin: 5, padding: 5 }}>
    <img src={avatar} style={{ width: "100%" }} />
    <h4>
      <Link to={`/${id}`}>
        {id} - {first_name} {last_name}
      </Link>
    </h4>
    <h4>Email:- {email} </h4>
  </div>
);

export default User;
