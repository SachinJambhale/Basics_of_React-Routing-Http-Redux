import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();

  const [users, setUsers] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {});
  }, [id]);
  return (
    <>
    
  
    </>
  );
};

export default UserDetails;
