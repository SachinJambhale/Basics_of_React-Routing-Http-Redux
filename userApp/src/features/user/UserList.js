import React, { useEffect, useState } from "react";
import MUIDatatable from "mui-datatables";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEditUser from "./AddEditUser";
import UserService from "../../services/UserService";
import Swal from "sweetalert2";
import config from "../../api/config.json";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [operation, setOperation] = useState("add");
  const [openDialog, setOpenDialog] = useState(false);
  const [initialUser, setInitialUser] = useState({});

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const loadUsers = () => {
    // for fetch the data
    UserService.fetchAll()
      .then((response) => {
        console.log(response?.data?.data);
        setUsers(response?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const addUser = () => {
    setOperation("add");
    setInitialUser({});
    setOpenDialog(true);
  }; //addUser

  const editUser = (user) => {
    setOperation("edit");
    setInitialUser(user);
    setOpenDialog(true);
  }; //editUser

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
              "Your file has not been deleted.",
              "success"
            );
          });
      }
    });
  }; //deleteUser


  const columns = [
    {
      lable: "Avatar",
      name: "avatar",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <img
              style={{ width: 80, height: 80 }}
              src={
                user.avatar
                  ? config.serverURL + user.avatar
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb7XeVpElaj3yF0M2zBadpBwR1H32HQQumw&usqp=CAU"
              }
            />
          );
        },
      },
    },
    {
      lable: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          if (typeof user?.name == "object") {
            return `${user?.name?.first} ${user?.name?.last} `;
          }
          return user?.name;
        },
      },
    },
    {
      label: "Mobile",
      name: "mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Email",
      name: "email",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Gender",
      name: "gender",
      options: {
        sort: true,
        filter: true,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return user.status === 1 ? "Active" : "Inactive";
        },
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(user?._id)}>
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
      <Button variant="contained" color="primary" onClick={addUser}>
        Add +
      </Button>
      <AddEditUser
        open={openDialog}
        operation={operation}
        handleClose={handleDialogClose}
        initialUser={initialUser}
        loadUsers={loadUsers}
      />
      <MUIDatatable title="User List" data={users} columns={columns} />
    </>
  );
};

export default UserList;
