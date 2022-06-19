import React from "react";
import { NavLink } from "react-router-dom";
import sunIcon from "../../assets/Vectorsun.png";
import classes from "./MenuStandard.module.css";
import DarkLightContext from "../../store-context";
import { useContext } from "react";

const MenuStandard = (props) => {
  const ctx = useContext(DarkLightContext);
  const colorSun = ctx.sunResult ? "" : "filterSun";

  const isActiveClass = ({ isActive }) =>
    isActive ? `${classes.active} ${colorSun}` : colorSun;

  return (
    <div className={classes.container}>
      <ul className={classes.menuStandardList}>
        <li className={classes.linkList}>
          <NavLink to="home" className={isActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className={isActiveClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="gallery" className={isActiveClass}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className={isActiveClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className={classes.sun}>
        <img src={sunIcon} alt="sun icon" onClick={ctx.setSun}></img>
      </div>
    </div>
  );
};

export default MenuStandard;
