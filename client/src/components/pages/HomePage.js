import React from "react";
import { Link } from "react-router-dom";
import classes from "../../assets/css/BackgroundVideo.module.css";
import favicon from "../../assets/img/favicon-tr.png"

const HomePage = (props) => {
  const videoSource = "";
  return (
    <div className={classes.Container}>
      <video controls="controls" autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSource} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div id="hero" className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>
            Welcome to <img id="favicon-tr" src={favicon} alt={favicon}></img>
          </h1>
          <h2>{props.description}</h2>
          <Link to="/services" className="btn-get-started">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
