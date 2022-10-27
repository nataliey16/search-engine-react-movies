import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <div className="About">
      <div className="plot">{props.plot}</div>
      <div className="cast">
        <span className="text-uppercase header-about">Director: </span>
        {props.director}
      </div>
      <div className="cast">
        <span className="text-uppercase header-about">Cast: </span>
        {props.actors}
      </div>
    </div>
  );
}
