import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalTimer from "./timer/global-timer";
import Container from "./common/container";
import Row from "./common/row";
import Column from "./common/column";

function App() {
  return (
    <Container>
      <Row>
        <Column></Column>
        <Column size={4}>Insert Clock here</Column>
      </Row>
      <GlobalTimer />
    </Container>
  );
}

export default App;
