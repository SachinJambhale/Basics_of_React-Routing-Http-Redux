import React, { useEffect, useState } from "react";
import axios from "axios";
const User = ({ userId, id, title, body }) => (
  <div style={{ width: 250, border: "1px solid #000", margin: 5, padding: 5 }}>
    <h3>UserId: {userId}</h3>
    <h3>Id: {id}</h3>
    <h3>title: {title}</h3>
    <h3>body: {body}</h3>
  </div>
);
const PostList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setUsers(response?.data);
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
          users.map((u, i) => <User key={u.userId} {...u} />)}
      </section>
    </>
  );
};

export default PostList;
