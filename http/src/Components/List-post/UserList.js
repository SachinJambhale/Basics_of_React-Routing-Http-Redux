import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>User List</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((u, i) => <User key={u.id} {...u} />)}
      </section>
    </>
  );
};

export default UserList;
