import React from "react";
import classes from "./Navigation.module.css";
import NavLogo from "../UI/NavLogo";
import NavIcon from "../UI/NavIcon";

const Navigation = () => {

  return (
    <div className={classes.container}>
      <NavLogo />
      <NavIcon />
    </div>
  );
};

export default Navigation;