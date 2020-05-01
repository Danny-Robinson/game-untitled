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
import UserMenu from "./user-menu/user-menu";
import Inventory from "./inventory/inventory";
import Shop from "./shop/shop";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "./redux-common/store";
import { exitCombat } from "./player-actions/violence/actions";
import CombatPage from "./player-actions/violence/combat-page";

export type AppProps = ConnectedProps<typeof connector>;

class App extends React.PureComponent<AppProps> {
  public render() {
    return (
      <div>
        <GlobalTimer />
        {!this.props.inCombat ? (
          <Container>
            <Row className="justify-content-between align-items-center">
              <Column size={4}>
                <MessageFeed />
                <PlayerActions />
              </Column>
              <Column size={2} smallSize={6}>
                <Resources player />
                <Attributes />
              </Column>
              <Column size={2} smallSize={6}>
                <Clock />
                <UserMenu />
              </Column>
            </Row>
            <Row>
              <Column>
                <Inventory />
              </Column>
              <Column>
                <Shop />
              </Column>
            </Row>
          </Container>
        ) : (
          <CombatPage />
        )}
      </div>
    );
  }
}

export const mapState = (state: StoreState) => ({
  inCombat: state ? state.inCombat : false
});

const connector = connect(mapState, {
  exitCombat
});

export default connector(App);
