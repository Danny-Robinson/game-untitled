import React from "react";
import Card from "../common/card";
import Button from "../common/button";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";
import { pauseGame, unpauseGame } from "../clock/actions";
import { clearStore } from "../redux-common/actions";
import ConfirmButton from "../common/confirm-button";

export type UserMenuProps = ConnectedProps<typeof connector>;

class UserMenu extends React.PureComponent<UserMenuProps> {
  public render() {
    const { paused } = this.props;

    return (
      <Card title="Menu">
        <div className="btn-group">
          <Button onClick={this.togglePause}>
            {paused ? "Resume" : "Pause"}
          </Button>
          <ConfirmButton onClick={this.newGame}>New Game</ConfirmButton>
        </div>
      </Card>
    );
  }

  private togglePause = () =>
    this.props.paused ? this.props.unpauseGame() : this.props.pauseGame();

  private newGame = () => this.props.clearStore();
}

export const mapState = (state: StoreState) => ({
  paused: state?.paused
});

const connector = connect(mapState, { pauseGame, unpauseGame, clearStore });

export default connector(UserMenu);
