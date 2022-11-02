import React from "react";
const User = ({
  id,
  name,
  username,
  email,
  address: { street, suite, city, zipcode },
}) => (
  <div style={{ width: 250, border: "1px solid #000", margin: 5, padding: 5 }}>
    <h3>Id: {id}</h3>
    <h3>name: {name}</h3>
    <h3>username: {username}</h3>
    <h3>email: {email}</h3>
    <h3>address:</h3>
    <h4>Street:{street}</h4>
    <h4>City:{city}</h4>
    <h4>Suite:{suite}</h4>
    <h4>Zipcode:{zipcode}</h4>
  </div>
);
export default User;
