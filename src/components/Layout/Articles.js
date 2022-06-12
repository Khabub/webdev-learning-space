import React from "react";
import bgImageArticle from "../../assets/Rectangle_4picture.png";
import classes from "./Articles.module.css";
import arrowImg from "../../assets/Vector_3sign.png";

const Articles = () => {
  return (
    <div className={classes.container}>
      <div className={classes.articleBox}>
        <div className={classes.bgImgArticle}>
          <a href="#exploration">
            <img src={bgImageArticle} alt="bg article"></img>
          </a>
        </div>
        <div className={classes.articleText}>
          <h2>Exploration</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <img src={arrowImg} className={classes.arrowImg} alt="arrow"></img>
        </div>
        <div className={classes.footprint}>
          <h2>Footprint</h2>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
