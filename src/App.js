import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />

        <footer>
          This project was coded by Sonya B.{""}
          <a href="https://github.com/BerryPasse/final-shecodes">
            Github open code hosted by Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
