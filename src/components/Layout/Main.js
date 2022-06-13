import React from "react";
// import backgroundImage from "../../assets/Vectary_texturebackground.png";
import backgroundImageDesktop from "../../assets/Vectary_texturebg-desktop.png";
import robotImage from "../../assets/Vectary_texturerobot.png";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.container}>
      {/* <img
        src={backgroundImage}
        alt="background"
        className={classes.bgImage}
      ></img> */}
      <img
        src={backgroundImageDesktop}
        alt="background"
        className={classes.bgImageDesktop}
      ></img>

      <img src={robotImage} alt="robot" className={classes.robotImage}></img>
    </div>
  );
};

export default Main;
