import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalTimer from "./timer/global-timer";
import Container from "./common/container";
import Row from "./common/row";
import Column from "./common/column";
import Clock from "./clock/clock";
import Resources from "./resources/resources";

function App() {
  return (
    <Container>
      <Row>
        <Column />
        <Column size={2}>
          <Clock />
          <Resources />
        </Column>
      </Row>
      <GlobalTimer />
    </Container>
  );
}

export default App;
