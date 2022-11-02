import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";


const UserList = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://reqres.in/api/users?page=2", { method: "get" })
  //     .then(async (response) => {
  //       // console.log("Response: ", response);

  //       const responseBody = await response.json();
  //       // console.log("response body: ", responseBody);
  //       setUsers(responseBody.data);
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", err);
  //     });
  // }, []);
  const loadUsers = (page = 1) => {
    //http request By using fetch api -it is built in method

    // fetch(`https://reqres.in/api/users?page=${page}`, { method: "get" })
    //   .then(async (response) => {
    //     // console.log("Response: ", response);

    //     const responseBody = await response.json();
    //     // console.log("response body: ", responseBody);
    //     setUsers(responseBody.data);
    //   })
    //   .catch((err) => {
    //     console.log("Error: ", err);
    //   });

    // http request By using axios -it is a third party package
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setUsers(response?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <h2>User List</h2>
      <button onClick={() => loadUsers(1)}>1</button>
      <button onClick={() => loadUsers(2)}>2</button>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((u, i) => <User key={u.id} {...u} />)}
      </section>
    </>
  );
};

export default UserList;
