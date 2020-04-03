import React from "react";
import "./App.css";
import axios from "axios";
import Maps from "./components/googleMaps/googleMap.js";

function App() {
  axios
    .get(
      "https://raw.githubusercontent.com/nychealth/coronavirus-data/master/tests-by-zcta.csv"
    )
    .then(res => {
      var lines = res.data.split("\n");

      var result = [];

      var headers = lines[0].split(",");

      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }

        result.push(obj);
      }

      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Maps />
    </div>
  );
}

export default App;
