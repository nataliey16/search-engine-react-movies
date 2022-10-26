import "./App.css";
import Movies from "./Movies";

function App() {
  return (
    <div className="App container-fluid">
      <div className="background-img"></div>
      <Movies />
      <footer>
        This project was coded by Natalie Yeung.
        <br />
        It is open-sourced on {"  "}
        <a
          href="https://github.com/nataliey16/search-engine-react-movies.git"
          target="_blank"
          rel="noreferrer"
        >
          {"  "}
          Github
        </a>
        {"  "} and hosted on
        <a
          href="https://github.com/nataliey16/search-engine-react-movies.git"
          target="_blank"
          rel="noreferrer"
        >
          {"  "} Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
