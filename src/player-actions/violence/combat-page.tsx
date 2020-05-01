import Container from "../../common/container";
import React from "react";
import Row from "../../common/row";
import Column from "../../common/column";
import Button from "../../common/button";
import Resources from "../../resources/resources";
import MessageFeed from "../../message-feed/message-feed";
import Inventory from "../../inventory/inventory";
import { connect, ConnectedProps } from "react-redux";
import { exitCombat } from "./actions";
import { unpauseGame } from "../../clock/actions";
import Slider from "@material-ui/core/Slider";
import Card from "../../common/card";
import { StoreState } from "../../redux-common/store";
import { jab, parry } from "./combat-actions";
import PlayerCombatActions from "./player-combat-actions";

class CombatPage extends React.PureComponent<ConnectedProps<typeof connector>> {
  public render() {
    return (
      <Container>
        <Row className="justify-content-between align-items-center">
          <Column size={4}>
            <MessageFeed />
          </Column>
        </Row>
        <Row className="justify-content-between">
          <Column size={2} smallSize={6}>
            <Resources player />
          </Column>
          <Column size={4}>
            <Card title="Momentum">
              <Column size={8} className="align-self-center">
                <Slider disabled value={this.props.momentum} min={-5} max={5} />
              </Column>
            </Card>
          </Column>
          <Column size={2} smallSize={6}>
            <Resources player={false} />
          </Column>
        </Row>
        <Row>
          <Column>
            <PlayerCombatActions moveList={[jab, parry]} />
            <Button
              onClick={() => {
                this.props.exitCombat();
                this.props.unpauseGame();
              }}
            >
              Run
            </Button>
          </Column>
          <Column>
            <Inventory />
          </Column>
        </Row>
      </Container>
    );
  }
}

const mapState = (state: StoreState) => ({
  momentum: state ? state.momentum : 0
});

const connector = connect(mapState, {
  exitCombat,
  unpauseGame
});

export default connector(CombatPage);
