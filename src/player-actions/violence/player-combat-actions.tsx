import { CombatAction } from "./types";
import React from "react";
import Card from "../../common/card";
import Button from "../../common/button";
import { selectCombatAction } from "./actions";
import { connect, ConnectedProps } from "react-redux";

interface OwnProps {
  moveList: ReadonlyArray<CombatAction>;
}

export type PlayerCombatActionsProps = OwnProps &
  ConnectedProps<typeof connector>;

class PlayerCombatActions extends React.PureComponent<
  PlayerCombatActionsProps
> {
  public render() {
    const { moveList } = this.props;
    return (
      <Card title="Combat Actions">
        {moveList.map((move) => (
          <Button onClick={this.selectCombatAction.bind(this, move)}>
            {move.name}
          </Button>
        ))}
      </Card>
    );
  }

  private selectCombatAction = (move: CombatAction) => {
    this.props.selectCombatAction(move, "Player");
  };
}

const connector = connect(undefined, { selectCombatAction });

export default connector(PlayerCombatActions);
