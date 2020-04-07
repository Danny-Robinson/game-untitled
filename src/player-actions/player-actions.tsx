import React from "react";
import Card from "../common/card";
import ListGroup from "../common/list-group";
import { PlayerActionCategories } from "./types";
import Nav from "../common/nav";

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
              tab: PlayerActionCategories.General,
              clickFunction: () =>
                this.setActiveTab(PlayerActionCategories.General),
            },
            {
              tab: PlayerActionCategories.Theft,
              clickFunction: () =>
                this.setActiveTab(PlayerActionCategories.Theft),
            },
            {
              tab: PlayerActionCategories.Violence,
              clickFunction: () =>
                this.setActiveTab(PlayerActionCategories.Violence),
            },
            {
              tab: PlayerActionCategories.Training,
              clickFunction: () =>
                this.setActiveTab(PlayerActionCategories.Training),
            },
          ]}
          active={this.state.active}
          disabled={[
            PlayerActionCategories.Violence,
            PlayerActionCategories.Training,
          ]}
        />
        {this.renderActionGroup(this.state.active)}
      </Card>
    );
  }

  private renderActionGroup = (activeTab: PlayerActionCategories) => {
    switch (activeTab) {
      case PlayerActionCategories.General:
        return <ListGroup items={[{ item: <div>Sleep</div> }]}></ListGroup>;
      case PlayerActionCategories.Theft:
        return <ListGroup items={[{ item: <div>Steal</div> }]}></ListGroup>;
    }
  };

  private setActiveTab = (tab: PlayerActionCategories) =>
    this.setState({ active: tab });
}

export default PlayerActions;
