import axios from "axios";
import React, { useEffect, useState } from "react";
import Use from "./Use";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async (page = 1) => {
    const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
    setUsers(res.data.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  console.log(users);
  return (
    <>
      <h2>User List</h2>
      <button onClick={() => loadUsers(1)}>1</button>
      <button onClick={() => loadUsers(2)}>2</button>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Array.isArray(users) &&
          users.map((user) => {
            return <Use key={user.id} {...user} />;
          })}
      </section>
    </>
  );
};

export default UserList;
