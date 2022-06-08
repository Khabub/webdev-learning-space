import React, { Fragment } from "react";
import Logo from "../../assets/Xaename.png";
import classes from "./NavLogo.module.css";

const NavLogo = () => {
  return (
    <Fragment>
      <img src={Logo} className={classes.logo} alt="logo"></img>
    </Fragment>
  );
};

export default NavLogo;
