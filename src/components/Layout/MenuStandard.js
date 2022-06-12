import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MenuStandard.module.css";

const MenuStandard = (props) => {
  return (
    <Fragment>
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
      </Fragment>
  );
};

export default MenuStandard;
