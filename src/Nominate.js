import React from "react";
import "./Nominate.css";

export default function Nominate(props) {
  function handleNominateMovie(event) {
    event.preventDefault();
    alert(
      `Awesome! You nominated "${props.title}" as the best movie of all time!`
    );
  }
  return (
    <div className="Nominate">
      <a
        className="btn btn-yellow mb-3"
        href="null"
        target="_blank"
        rel="noreferrer"
        onClick={handleNominateMovie}
      >
        Nominate
      </a>
    </div>
  );
}
