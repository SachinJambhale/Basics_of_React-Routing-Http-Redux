import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import React from "react";
import UserForm from "./UserForm";
const AddEditUser = ({ handleClose, open, operation, ...props }) => {
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{operation == "edit" ? "Edit" : "Add"} User</DialogTitle>
        <DialogContent>
          <UserForm
            operation={operation}
            handleClose={handleClose}
            {...props}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditUser;
