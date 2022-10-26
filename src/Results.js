import React from "react";
import "./Results.css";
// import Poster from "./Poster";

export default function Results(props) {
  return (
    <div className="Results">
      <div className="row">
        <div className="col-md-6 col-md-6">
          <h1 className="movie-title">{props.title}</h1>
        </div>
        <div className="col-md-6 col-md-6">
          <h2 className="rating rating-title">
            IMDb RATING
            <i className="fa-solid fa-star"></i> {props.rating}/10
          </h2>
        </div>
      </div>
      <p className="year-released">{props.year}</p>{" "}
      <div className="row">
        <div className=" col-lg-3 col-lg-3">
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
        <div className=" col-lg-3 col-lg-3">
          <ul>
            <li className="header-about">Genre</li>
            <li className="about">{props.genre}</li>
          </ul>
        </div>
      </div>
      <a
        className="btn btn-primary"
        href="https://www.merriam-webster.com/dictionary/nominate"
        target="_blank"
        rel="noreferrer"
      >
        Nominate
      </a>
      <br />
      <br />
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
