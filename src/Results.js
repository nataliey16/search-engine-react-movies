import React from "react";
import "./Results.css";

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
      <p className="year-released">{props.year}</p>
    </div>
  );
}
