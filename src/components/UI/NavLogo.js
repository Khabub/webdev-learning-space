import React, { Fragment } from "react";
import Logo from "../../assets/Xaename.png";
import { Link } from "react-router-dom";
import classes from "./NavLogo.module.css";

const NavLogo = () => {
  return (
    <Fragment>
      <Link to="/">
        <img src={Logo} className={classes.logo} alt="logo"></img>
      </Link>
    </Fragment>
  );
};

export default NavLogo;
