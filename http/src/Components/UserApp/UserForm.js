import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import axios from "axios";
import UserService from "../services/UserService";
const UserForm = ({ operation, initialUser, loadUsers, handleClose }) => {
  const [user, setUser] = useState({
    name: {
      first: "",
      last: "",
    },
    mobile: "",
    email: "",
    password: "",
    city: "",
    status: 1,
  });
  useEffect(() => {
    if (initialUser) setUser({ ...initialUser });
  }, [initialUser]);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    console.log("name ", value);
    setUser({
      ...user,
      name: {
        ...user?.name,
        [name]: value,
      },
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const resetUser = () => {
    setUser({
      name: {
        first: "",
        last: "",
      },
      mobile: "",
      email: "",
      password: "",
      city: "",
      status: 1,
    });
  };

  const handleSubmit = () => {
    if (operation == "edit") {
      UserService.updateUser(user.id, user)
        .then((reponse) => {
          alert("User updated");
          loadUsers();
          handleClose();
        })
        .catch((err) => {
          console.log(err);
          alert("could not updated..");
        });
    } else {
      UserService.createUser(user)
        .then((reponse) => {
          alert("User created");
          loadUsers();
          resetUser();
        })
        .catch((err) => {
          console.log(err);
          alert("could not created..");
        });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          variant="outlined"
          label="First Name"
          name="first"
          value={user?.name?.first}
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          variant="outlined"
          label="Last Name"
          name="last"
          value={user?.name?.last}
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Mobile"
          name="mobile"
          value={user?.mobile}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          type="email"
          name="email"
          label="Email"
          value={user?.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={user?.password}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="City"
          name="city"
          value={user?.city}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="demo-simmple-select"
            value={user?.status}
            name="status"
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value={1}>Active</MenuItem>
            <MenuItem value={0}>Inactive</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          {operation == "edit" ? "Update" : "Create"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;
