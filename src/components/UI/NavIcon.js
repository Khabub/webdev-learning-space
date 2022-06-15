import React, { Fragment } from "react";
import Icon1 from "../../assets/Vectorham1.png";
import Icon2 from "../../assets/Vectorham2.png";
import classes from "./NavIcon.module.css";

const NavIcon = (props) => {
  return (
    <Fragment>
      <div className={classes.iconBox} onClick={props.onShow}>
        <img src={Icon1} className={classes.icon1} alt="icon ham"></img>
        <img src={Icon2} className={classes.icon2} alt="icon ham"></img>
        <img src={Icon1} className={classes.icon3} alt="icon ham"></img>
      </div>
    </Fragment>
  );
};

export default NavIcon;
