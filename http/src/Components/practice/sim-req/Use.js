import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Use = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, m: 1, p: 1 }}>
        <CardMedia component="img" height="70%" image={avatar} alt="avatar" />
        <Typography gutterBottom variant="h6" component="div">
          <Link to={`/${id}`}>
            {id}-{email}
          </Link>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {first_name} {last_name}
        </Typography>
      </Card>
    </>
  );
};

export default Use;
