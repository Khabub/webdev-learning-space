import React from "react";
import backgroundImage from "../../assets/Vectary_texturebackground.png";
import backgroundImageDesktop from "../../assets/Vectary_texturebg-desktop.png";
import robotImage from "../../assets/Vectary_texturerobot.png";
import fbIcon from "../../assets/Vectorfb.png";
import igIcon from "../../assets/Vectorig.png";
import twitIcon from "../../assets/Vectortwitter.png";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.container}>
      <img
        src={backgroundImage}
        alt="background"
        className={classes.bgImage}
      ></img>
      <img
        src={backgroundImageDesktop}
        alt="background"
        className={classes.bgImageDesktop}
      ></img>
      <div className={classes.boxLeft}>
        <div className={classes.iconsBox}>
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
        </div>
      </div>

      <img src={robotImage} alt="robot" className={classes.robotImage}></img>
    </div>
  );
};

export default Main;
