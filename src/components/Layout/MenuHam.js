import React from "react";
import Modal from "../UI/Modal";
import fbIcon from "../../assets/Vectorfb.png";
import igIcon from "../../assets/Vectorig.png";
import twitIcon from "../../assets/Vectortwitter.png";
import sunIcon from "../../assets/Vectorsun.png";
import { NavLink } from "react-router-dom";
import DarkLightContext from "../../store-context";
import { useContext } from "react";

import classes from "./MenuHam.module.css";

const MenuHam = (props) => {
  const ctx = useContext(DarkLightContext);

  const colorSun = ctx.sunResult ? "" : "filterSun";
  const isActiveClass = ({ isActive }) =>
    isActive ? `${classes.active} ${colorSun}` : colorSun;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.menuHamList}>
        <li>
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
      <div className={classes.icons}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={fbIcon} alt="fb" className={colorSun}></img>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={igIcon} alt="ig" className={colorSun}></img>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src={twitIcon} alt="twitter" className={colorSun}></img>
        </a>
      </div>
      <div className={classes.sun}>
        <p className={colorSun}>Toggle dark/light:</p>
        <img src={sunIcon} alt="sun icon" onClick={ctx.setSun}></img>
      </div>
    </Modal>
  );
};

export default MenuHam;
