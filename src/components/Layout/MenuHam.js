import React from "react";
import Modal from "../UI/Modal";
import fbIcon from "../../assets/Vectorfb.png";
import igIcon from "../../assets/Vectorig.png";
import twitIcon from "../../assets/Vectortwitter.png";
import sunIcon from "../../assets/Vectorsun.png";
import { NavLink } from "react-router-dom";

import classes from "./MenuHam.module.css";

const MenuHam = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <ul>
        <li>
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
      <div className={classes.icons}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={fbIcon} alt="fb"></img>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src={igIcon} alt="ig"></img>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={twitIcon} alt="twitter"></img>
        </a>
      </div>
      <div className={classes.sun}>
        <p>Toggle dark/light:</p>
        <img src={sunIcon} alt="sun icon"></img>
      </div>
    </Modal>
  );
};

export default MenuHam;
