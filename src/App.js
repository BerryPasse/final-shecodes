import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Baltimore" />

        <footer>
          <a href="https://github.com/BerryPasse/">Sonya B's Open Code</a>
        </footer>
      </div>
    </div>
  );
}
