import React from "react";

const Profile = ({ name, desig }) => (
  <div style={{ border: "1px solid #000", padding: 20 }}>
    <h3>Name: {name}</h3>
    <h4>Designation: {desig}</h4>
  </div>
);

const Team = () => {
  return (
    <>
      <h2>Our Team</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {[
          { name: "aaa", desig: "Manager" },
          { name: "bbbb", desig: "Manager" },
          { name: "cccc", desig: "Manager" },
          { name: "dddd", desig: "Manager" },
          { name: "eee", desig: "Manager" },
          { name: "fff", desig: "Manager" },
          { name: "ggg", desig: "Manager" },
          { name: "hhhh", desig: "Manager" },
        ].map((user, i) => (
          <Profile key={i} {...user} />
        ))}
      </section>
    </>
  );
};

export default Team;
