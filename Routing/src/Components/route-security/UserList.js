import React from "react";

const UserList = () => {
  const userList = JSON.parse(localStorage.getItem("users"));
  console.log(userList);

  // console.log(userList);

  return (
    <>
      <h1>User Data </h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>

        {userList.map((val, i) => {
          const { firstName, lastName, email, password } = val;
          return (
            <tr key={val + i}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{password}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default UserList;
