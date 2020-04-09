import React from "react";
import Card from "../common/card";
import ListGroup from "../common/list-group";
import { PlayerActionCategories } from "./types";
import Nav from "../common/nav";
import Sleep from "./sleep/sleep";
import { StoreState } from "../redux-common/store";
import { connect, ConnectedProps } from "react-redux";
import PushUps from "./training/pushups";
import Gym from "./training/gym";

interface StateProps {
  active: PlayerActionCategories;
}

export type PlayerActionsProps = ConnectedProps<typeof connector>;

class PlayerActions extends React.PureComponent<
  PlayerActionsProps,
  StateProps
> {
  constructor(props: PlayerActionsProps) {
    super(props);
    this.state = { active: PlayerActionCategories.General };
  }

  public render() {
    const { paused } = this.props;

    return (
      <Card title="Actions">
        {!paused && (
          <Nav
            items={[
              {
                tabName: PlayerActionCategories.General,
                clickFunction: () =>
                  this.setActiveTab(PlayerActionCategories.General)
              },
              {
                tabName: PlayerActionCategories.Theft,
                clickFunction: () =>
                  this.setActiveTab(PlayerActionCategories.Theft)
              },
              {
                tabName: PlayerActionCategories.Violence,
                clickFunction: () =>
                  this.setActiveTab(PlayerActionCategories.Violence)
              },
              {
                tabName: PlayerActionCategories.Training,
                clickFunction: () =>
                  this.setActiveTab(PlayerActionCategories.Training)
              }
            ]}
            active={this.state.active}
            disabled={[PlayerActionCategories.Violence]}
          />
        )}
        {!paused && this.renderActionGroup(this.state.active)}
      </Card>
    );
  }

  private renderActionGroup = (activeTab: PlayerActionCategories) => {
    const trainingItems = [{ item: <PushUps /> }, { item: <Gym /> }];
    switch (activeTab) {
      case PlayerActionCategories.General:
        return <ListGroup items={[{ item: <Sleep /> }]}></ListGroup>;
      case PlayerActionCategories.Theft:
        return <ListGroup items={[{ item: <div>Steal</div> }]}></ListGroup>;
      case PlayerActionCategories.Training:
        return <ListGroup items={trainingItems} />;
    }
  };

  private setActiveTab = (tab: PlayerActionCategories) =>
    this.setState({ active: tab });
}
const mapState = (state: StoreState) => ({
  paused: state?.paused
});

const connector = connect(mapState);

export default connector(PlayerActions);
