import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MuiDatatable from "mui-datatables";
import FabButton from "@mui/material/Fab";

import AddEditUser from "./AddEditUser";
import Swal from "sweetalert2";
import UserService from "../services/UserService";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [operation, setOperation] = useState("add");
  const [openDialog, setOpenDialog] = useState(false);
  const [initialUser, setInitialUser] = useState({
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

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const loadUsers = () => {
    UserService.fetchAll()
      .then((response) => {
        setUsers(response.data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const addUser = () => {
    setOperation("add");
    setInitialUser({
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
    setOpenDialog(true);
  };
  const editUser = (user) => {
    setOperation("edit");
    setInitialUser(user);
    setOpenDialog(true);
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => {
            Swal.fire(
              "Not Deleted!",
              "Your file has been not deleted.",
              "error"
            );
          });
      }
    });
  };

  const columns = [
    {
      label: "ID",
      name: "id",
    },
    {
      label: "Name",
      name: "name",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return `${user?.name?.first} ${user?.name?.last}`;
        },
      },
    },
    {
      label: "Mobile",
      name: "mobile",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      label: "Email",
      name: "email",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      label: "City",
      name: "city",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return user?.status == 1 ? "Active" : "Inactive";
        },
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(user.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <AddEditUser
        open={openDialog}
        handleClose={handleDialogClose}
        operation={operation}
        initialUser={initialUser}
        loadUsers={loadUsers}
      />
      <FabButton variant="circular" color="primary" onClick={addUser}>
        New +
      </FabButton>
      <MuiDatatable title="User List" columns={columns} data={users} />
    </>
  );
};

export default UserList;
