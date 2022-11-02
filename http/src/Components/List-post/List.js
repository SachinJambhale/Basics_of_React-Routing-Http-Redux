import { Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const List = () => {
  return (
    <>
      <h2> List</h2>
      <Routes>
        <Route path="" element={<UserList />} />
        <Route path=":id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default List;
