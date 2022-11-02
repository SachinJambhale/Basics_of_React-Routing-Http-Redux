import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();

  const [users, setUsers] = useState({});

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((err) => {});
  }, [id]);
  return (
    <>
      <h2>User Details</h2>
      <Link to="/">Back to User</Link>
      <hr />
      <img src={users.avatar} />
      <h3>
        Name:{users.first_name}
        {users.last_name}
      </h3>

      <h3>Email:{users.email}</h3>
    </>
  );
};

export default UserDetails;
