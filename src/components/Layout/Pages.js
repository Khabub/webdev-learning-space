import React from "react";
import Gallery from "../../pages/Gallery";
import Home from "../../pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";

import classes from "./Pages.module.css";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

const Pages = () => {
  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Pages;
