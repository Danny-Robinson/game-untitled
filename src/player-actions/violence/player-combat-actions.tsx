import { CombatAction } from "./types";
import React from "react";
import Card from "../../common/card";
import Button from "../../common/button";
import { connect, ConnectedProps } from "react-redux";
import { selectPlayerCombatAction } from "./actions";

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
            {`${move.name} (${move.speed})`}
          </Button>
        ))}
      </Card>
    );
  }

  private selectCombatAction = (move: CombatAction) => {
    this.props.selectPlayerCombatAction(move);
  };
}

const connector = connect(undefined, {
  selectPlayerCombatAction
});

export default connector(PlayerCombatActions);
