import React from "react";
import classes from "./ScrollUp.module.scss";
const ScrollUp = ({ text }) => {
  return (
    <div className={classes.scroll_up}>
      <h2>{text}</h2>
      <h2>{text}</h2>
    </div>
  );
};

export default ScrollUp;
