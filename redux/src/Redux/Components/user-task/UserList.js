import React from "react";
import MuiDatatable from "mui-datatables";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, removeUser } from "./UserSlice";
const UserList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  const columns = [
    {
      label: "ID",
      name: "id",
    },
    {
      label: "Name",
      name: "name",
    },
    {
      label: "Mobile",
      name: "mobile",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Password",
      name: "password",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRenderLite: (index) => {
          const { id } = users[index];
          return (
            <IconButton color="error" onClick={() => deleteUser(id)}>
              <DeleteIcon />
            </IconButton>
          );
        },

        
      },
    },
  ];
  return (
    <>
      <MuiDatatable title="User List" columns={columns} data={users} />
    </>
  );
};

export default UserList;
