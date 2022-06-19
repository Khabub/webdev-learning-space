import React from "react";
import bgImageArticle from "../../assets/Rectangle_4picture.png";
import classes from "./Articles.module.css";
import arrowImg from "../../assets/Vector_3sign.png";
import { useContext } from "react";
import DarkLightContext from "../../store-context";

const Articles = () => {
  const ctx = useContext(DarkLightContext);

  const colorSun = ctx.sunResult ? "lightSun" : "darkSun";
  const colorSunFilter = ctx.sunResult ? "" : "filterSun";

  return (
    <div className={classes.container}>
      <div className={classes.articleBox}>
        <div className={classes.bgImgArticle}>
          <a href="#exploration">
            <img src={bgImageArticle} alt="bg article"></img>
          </a>
        </div>
        <div className={classes.articleText}>
          <h2 className={colorSun}>Exploration</h2>
          <p className={colorSun}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <img
            src={arrowImg}
            className={`${classes.arrowImg} ${colorSunFilter}`}
            alt="arrow"
          ></img>
        </div>
        <div className={classes.footprint}>
          <h2 className={colorSun}>Footprint</h2>
          <p className={colorSun}>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
