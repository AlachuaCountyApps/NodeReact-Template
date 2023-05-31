import React, { useState, useEffect } from "react";
import githubLogo from "./github-logo.svg";
import logo from "./react-logo.svg";
import nodejsLogo from "./nodejs-logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/endpoint")
      .then(res => res.json())
      .then(json => setData(json.data));
    return () => {};
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Node + React Template</h1>
        <p>
          <a
            className="App-link"
            href="https://github.com/alachuacounty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} className="Git-logo" alt="githubLogo" />
          </a>
        </p>
        <div className="logo-box">

        <a
            className="App-link"
            href="https://nodejs.org/en/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={nodejsLogo} className="Node-logo" alt="nodejsLogo" />
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img src={logo} className="App-logo" alt="logo" />
          </a>

        </div>
        <br />
        <p>
          <code>GET /api/endpoint</code>:{" "}
          {data.length ? data.join(", ") : "loading..."}
        </p>
        <br />
      </header>
    </div>
  );
}

export default App;
