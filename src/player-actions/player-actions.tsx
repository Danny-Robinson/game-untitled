import React from "react";
import Card from "../common/card";
import ListGroup from "../common/list-group";
import { PlayerActionCategories } from "./types";
import Nav from "../common/nav";
import Sleep from "./sleep/sleep";
import Exercise from "./exercise/exercise";

interface StateProps {
  active: PlayerActionCategories;
}

class PlayerActions extends React.PureComponent<{}, StateProps> {
  constructor(props: {}) {
    super(props);
    this.state = { active: PlayerActionCategories.General };
  }

  public render() {
    return (
      <Card title="Actions">
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
        {this.renderActionGroup(this.state.active)}
      </Card>
    );
  }

  private renderActionGroup = (activeTab: PlayerActionCategories) => {
    switch (activeTab) {
      case PlayerActionCategories.General:
        return <ListGroup items={[{ item: <Sleep /> }]}></ListGroup>;
      case PlayerActionCategories.Theft:
        return <ListGroup items={[{ item: <div>Steal</div> }]}></ListGroup>;
      case PlayerActionCategories.Training:
        return <ListGroup items={[{ item: <Exercise /> }]}></ListGroup>;
    }
  };

  private setActiveTab = (tab: PlayerActionCategories) =>
    this.setState({ active: tab });
}

export default PlayerActions;
