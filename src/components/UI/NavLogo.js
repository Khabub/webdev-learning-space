import React, { Fragment } from "react";
import Logo from "../../assets/Xaename.png";
import { Link } from "react-router-dom";
import classes from "./NavLogo.module.css";
import { useContext } from "react";
import DarkLightContext from "../../store-context";

const NavLogo = () => {
  const ctx = useContext(DarkLightContext);

  return (
    <Fragment>
      <Link to="/">
        <img
          src={Logo}
          className={`${classes.logo} ${
            ctx.sunResult ? "" : "filterSun"
          }`}
          alt="logo"
        ></img>
      </Link>
    </Fragment>
  );
};

export default NavLogo;
