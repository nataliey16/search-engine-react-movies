import React from "react";
import "./Poster.css";

export default function Poster(props) {
  return (
    <div className="Poster">
      <div className="row">
        <div className="col-lg-3 col-lg-3">
          <img className="img-fluid" src={props.poster} alt="poster"></img>
        </div>
        <div className="col-lg-3 col-lg-3">
          <ul>
            <li className="header-about">Length</li>
            <li className="about">{props.runTime}</li>
          </ul>
        </div>
        <div className="col-lg-3 col-lg-3">
          <ul>
            <li className="header-about">Ratings</li>
            <li className="about">{props.rated}</li>
          </ul>
        </div>
        <div className="col-lg-3 col-lg-3">
          <ul>
            <li className="header-about">Genre</li>
            <li className="about">{props.genre}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
