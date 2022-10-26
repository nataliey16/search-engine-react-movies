import React from "react";
import "./Results.css";
import Nominate from "./Nominate";
// import Poster from "./Poster";

export default function Results(props) {
  return (
    <div className="Results">
      <div className="row movie-title">
        <div className="col-lg-6 col-lg-6">
          <h1 className="movie">{props.title}</h1>
        </div>
        <div className="col-lg-6 col-lg-6">
          <div className="rating">
            IMDb RATING
            <i className="fa-solid fa-star"></i> {props.rating}/10
          </div>
        </div>
      </div>
      <p className="year-released">{props.year}</p>{" "}
      <div className="row mb-3">
        <div className="col-lg-3 col-lg-3">
          <img
            className="img-fluid"
            src={props.poster}
            alt="movie-poster"
          ></img>
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
      <Nominate title={props.title} />
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
