import "./App.css";
import Movies from "./Movies";

function App() {
  return (
    <div className="App container-fluid">
      <div className="background-img"></div>
      <Movies />
      <footer>
        This project was coded by {"  "}
        <span className="my-name">Natalie Yeung</span>.
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
          {"  "} Netlify.
        </a>
        <br />
        <div className="favicon">
          <a
            target="_blank"
            href="https://icons8.com/icon/515/cinema"
            rel="noreferrer"
          >
            Cinema
          </a>{" "}
          icon by{" "}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
