import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPost } from "./PostSlice";
import { fetchPosts } from "./ThunkActionCreators";
const Post = ({ id, title, body }) => (
  <div style={{ padding: 10, boxShadow: "0 0 3px 2px #999" }}>
    <h4>ID:{id}</h4>
    <h4>Title:{title}</h4>
    <p>description:{body}</p>
  </div>
);
const PostList = () => {
  const posts = useSelector(selectPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <h2>Posts</h2>
      {Array.isArray(posts) &&
        posts.map((postObj) => {
          return <Post key={postObj.id} {...postObj} />;
        })}
    </>
  );
};

export default PostList;
