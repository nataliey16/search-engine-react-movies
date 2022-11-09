import React, { useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import Results from "./Results";
import Poster from "./Poster";
import About from "./About";
import "./Movies.css";
import Nominate from "./Nominate";

export default function Movies() {
  let [movie, setMovie] = useState("When Harry Met Sally...");
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState("");

  function handleMovieResponse(response) {
    setResults({
      title: response.data.Title,
      year: response.data.Year,
      runTime: response.data.Runtime,
      rated: response.data.Rated,
      genre: response.data.Genre,
      poster: response.data.Poster,
      plot: response.data.Plot,
      director: response.data.Director,
      actors: response.data.Actors,
      rating: response.data.imdbRating,
    });
    setLoaded(true);
  }

  function handleMovieData() {
    // https://www.omdbapi.com/
    let apiKey = "dcf858c8";
    let apiUrl = ` http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}&`;

    axios.get(apiUrl).then(handleMovieResponse);
  }

  function handleMovieSubmit(event) {
    event.preventDefault();
    handleMovieData();
  }

  function handleMovieChange(event) {
    setMovie(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Movies">
        <h1>What movie are you looking for?</h1>
        <form onChange={handleMovieChange}>
          <div className="row">
            <div className="col-sm-10 col-sm-10">
              <input
                className="form-control search-bar"
                type="search"
                placeholder="Search for a movie"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-sm-2 col-sm-2">
              <input
                className="btn btn-branding"
                type="submit"
                value="search"
                onClick={handleMovieSubmit}
              ></input>
            </div>
          </div>
        </form>
        <Results
          title={results.title}
          rating={results.rating}
          year={results.year}
        />
        <Poster
          poster={results.poster}
          runTime={results.runTime}
          rated={results.rated}
          genre={results.genre}
        />
        <Nominate title={results.title} />
        <About
          plot={results.plot}
          actors={results.actors}
          director={results.director}
        />
      </div>
    );
  } else {
    handleMovieData();
    return (
      <div className="mt-5 mb-5 d-flex justify-content-center">
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="bars-loading-wrapper"
          visible={true}
        />
      </div>
    );
  }
}
