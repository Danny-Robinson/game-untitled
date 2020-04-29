import Button from "../../common/button";
import React from "react";
import { Enemy } from "./types";
import { connect, ConnectedProps } from "react-redux";
import { enterCombat, loadEnemy } from "./actions";
import { pauseGame } from "../../clock/actions";

interface OwnProps {
  enemy: Enemy;
}

export type InitiateFightProps = OwnProps & ConnectedProps<typeof connector>;

class InitiateFight extends React.PureComponent<InitiateFightProps> {
  public render() {
    return (
      <Button danger onClick={this.initiate}>
        Fight {this.props.enemy.name}
      </Button>
    );
  }

  private initiate = () => {
    const { loadEnemy, enterCombat, enemy, pauseGame } = this.props;

    loadEnemy(enemy);
    pauseGame();
    enterCombat();
  };
}

const connector = connect(undefined, {
  enterCombat,
  loadEnemy,
  pauseGame
});

export default connector(InitiateFight);
