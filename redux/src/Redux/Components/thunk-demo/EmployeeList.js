import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEmployees } from "./EmpSlice";
import { fetchEmployees } from "./ThunkActionCreators";

const Employee = ({ id, email, first_name, last_name, avatar }) => (
  <div
    style={{ width: 250, padding: 5, margin: 5, boxShadow: "2px 2px 3px #999" }}
  >
    <img src={avatar} style={{ width: "100%" }} />
    <h2>
      {first_name}
      {last_name}
    </h2>
    <h3>
      {id}-{email}
    </h3>
  </div>
);
const EmployeeList = () => {
  const employees = useSelector(selectEmployees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees(1));
  }, []);
  return (
    <>
      <h2 style={{ justifyContent: "center", display: "flex" }}>
        Employee List{" "}
      </h2>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {Array.isArray(employees) &&
          employees.map((emp, i) => {
            return <Employee key={emp + i} {...emp} />;
          })}
      </section>
      <button onClick={() => dispatch(fetchEmployees(1))}>1</button>
      <button onClick={() => dispatch(fetchEmployees(2))}>2</button>
    </>
  );
};

export default EmployeeList;
