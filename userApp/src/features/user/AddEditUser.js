import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import UserForm from "./UserForm";

const AddEditUser = ({ open, handleClose, operation, ...props }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {operation == "edit" ? "Edit" : "Create a"} User
        </DialogTitle>
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
