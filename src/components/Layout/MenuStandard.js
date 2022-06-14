import React from "react";
import { NavLink } from "react-router-dom";
import sunIcon from "../../assets/Vectorsun.png";
import classes from "./MenuStandard.module.css";

const MenuStandard = (props) => {
  return (
    <div className={classes.container}>
      <ul className={classes.menuStandardList}>
        <li className={classes.linkList}>
          <NavLink
            to="home"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="gallery"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className={classes.sun}>
        <img src={sunIcon} alt="sun icon"></img>
      </div>
    </div>
  );
};

export default MenuStandard;
