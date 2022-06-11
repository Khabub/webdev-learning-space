import React from "react";
import classes from "./Navigation.module.css";
import NavLogo from "../UI/NavLogo";
import NavIcon from "../UI/NavIcon";

const Navigation = (props) => {

  return (
    <div className={classes.container}>
      <NavLogo />
      <NavIcon onShow={props.onShow}/>
    </div>
  );
};

export default Navigation;