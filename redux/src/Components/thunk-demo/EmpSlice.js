import { createSlice } from "@reduxjs/toolkit";

const EmployeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee: (state, { payload }) => [...payload],
  },
});

export const { addEmployee } = EmployeeSlice.actions;

export const selectEmployees = (state) => state.employees;

export default EmployeeSlice.reducer;
