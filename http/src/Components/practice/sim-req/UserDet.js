import { Card, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserDet = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((err) => {});
  }, [id]);

  return (
    <>
      <Card sx={{ maxWidth: 345, m: 1, p: 1 }}>
        <CardMedia
          component="img"
          height="70%"
          image={user?.avatar}
          alt="avatar"
        />
        <Typography gutterBottom variant="h6" component="div">
          <Link to="/">Back to UserList</Link>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {user.id}-{user.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {user.first_name} {user.last_name}
        </Typography>
      </Card>
    </>
  );
};

export default UserDet;
