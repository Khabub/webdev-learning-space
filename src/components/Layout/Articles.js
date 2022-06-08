import React from "react";
import bgImageArticle from "../../assets/Rectangle_4picture.png";
import classes from "./Articles.module.css";

const Articles = () => {
  return (
    <div className={classes.container}>
      <div className={classes.articleBox}>
        <img
          src={bgImageArticle}
          className={classes.bgImgArticle}
          alt="bg article"
        ></img>
        <div className={classes.articleText}>
          <h2>Exploration</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
