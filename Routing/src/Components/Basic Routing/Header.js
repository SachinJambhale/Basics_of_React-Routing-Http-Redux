import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Header.module.css";
const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        backgroundColor: "cyan",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <figure>
        <img
          src="https://www.topperskills.com/images/logo.png"
          style={{ width: 250 }}
        />
      </figure>
      <nav  >
        <NavLink
          end
          className={({ isActive }) =>
            `${Style.navlink} ${isActive ? Style.active : ""}`
          }
          to=""
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${Style.navlink} ${isActive ? Style.active : ""}`
          }
          to="About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${Style.navlink} ${isActive ? Style.active : ""}`
          }
          to="Services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${Style.navlink} ${isActive ? Style.active : ""}`
          }
          to="Product"
        >
          Product
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${Style.navlink} ${isActive ? Style.active : ""}`
          }
          to="Contact"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
