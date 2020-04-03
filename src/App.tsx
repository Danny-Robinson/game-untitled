import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalTimer from "./timer/global-timer";
import Clock from "./clock/clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GlobalTimer />
        <Clock />
      </header>
    </div>
  );
}

export default App;
