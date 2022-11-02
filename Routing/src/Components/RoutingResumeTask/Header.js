import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header style={{ backgroundColor: "cyan" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding:10
          }}
        >
          <Link to="">Home</Link>
          <Link to="academics">Academics</Link>
          <Link to="professoinalSummary">Professional Summary</Link>
          <Link to="hobbies">Hobbies</Link>
          <Link to="portfolio">Portfolio</Link>
          <Link to="contactDetails">Contact Details</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
