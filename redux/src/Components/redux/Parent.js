import React from "react";
import A from "./A";
import B from "./B";
import C from "./C";
const Parent = () => {
  return (
    <>
      <h2>Parent Component</h2>
      <hr />
      <A />
      <hr />
      <B />
      <hr />
      <C />
    </>
  );
};

export default Parent;
