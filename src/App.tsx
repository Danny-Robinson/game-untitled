import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalTimer from "./timer/global-timer";
import Container from "./common/container";
import Row from "./common/row";
import Column from "./common/column";
import Clock from "./clock/clock";
import Resources from "./resources/resources";
import PlayerActions from "./player-actions/player-actions";
import Attributes from "./attributes/attributes";
import MessageFeed from "./message-feed/message-feed";

function App() {
  return (
    <Container>
      <Row className="justify-content-between align-items-center">
        <Column size={4}>
          <MessageFeed />
        </Column>
        <Column size={2} smallSize={6}>
          <Clock />
        </Column>
      </Row>
      <Row className="justify-content-between align-items-center">
        <Column size={4}>
          <PlayerActions />
        </Column>
        <Column size={2} smallSize={6}>
          <Resources />
          <Attributes />
        </Column>
      </Row>
      <GlobalTimer />
    </Container>
  );
}

export default App;
