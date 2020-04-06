import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalTimer from "./timer/global-timer";
import Container from "./common/container";
import Row from "./common/row";
import Column from "./common/column";
import Clock from "./clock/clock";

function App() {
  return (
    <Container>
      <Row>
        <Column></Column>
        <Column size={4}><Clock /></Column>
      </Row>
      <GlobalTimer />
    </Container>
  );
}

export default App;
