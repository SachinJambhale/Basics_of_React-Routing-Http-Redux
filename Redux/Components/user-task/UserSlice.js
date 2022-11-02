import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, { payload }) => [...state, payload],
    removeUser: (state, action) => {
      const users = [...state];
      return users.filter((u) => u.id != action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const selectUsers = (state) => state.users;
export default userSlice.reducer;
