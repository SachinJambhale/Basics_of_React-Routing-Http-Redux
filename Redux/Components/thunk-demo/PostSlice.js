import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPosts: (state, { payload }) => [...payload],
  },
});

export const { addPosts } = PostSlice.actions;

export const selectPost = (state) => state.posts;

export default PostSlice.reducer;
