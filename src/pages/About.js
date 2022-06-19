import React from "react";
import classes from "./Page.module.css";
import { useContext } from "react";
import DarkLightContext from "../store-context";

const About = () => {
  const ctx = useContext(DarkLightContext);
  const colorSun = ctx.sunResult ? "lightSun" : "darkSun";

  return (
    <div className={classes.container}>
      <h1 className={colorSun}>About</h1>
      <p className={colorSun}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
        minus molestiae vel beatae natus eveniet ratione!
      </p>
    </div>
  );
};

export default About;