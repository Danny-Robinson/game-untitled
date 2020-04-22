import React from "react";
import Card from "../common/card";
import ListGroup from "../common/list-group";
import { PlayerActionCategories } from "./types";
import Nav from "../common/nav";
import Sleep from "./sleep/sleep";
import CleanToilets from "./work/clean-toilets";
import { StoreState } from "../redux-common/store";
import { connect, ConnectedProps } from "react-redux";
import PushUps from "./training/pushups";
import Gym from "./training/gym";
import Sparring from "./training/sparring";
import StealTradeable from "./theft/steal-tradable";
import { Tradeable } from "../inventory/types";
import InitiateFight from "./violence/initiate-fight";
import { crackFiend } from "./violence/enemies";

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
          <ListGroup
            items={[
              {
                item: (
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
                      },
                      {
                        tabName: PlayerActionCategories.Work,
                        clickFunction: () =>
                          this.setActiveTab(PlayerActionCategories.Work)
                      }
                    ]}
                    active={this.state.active}
                  />
                )
              },
              { item: this.renderActionGroup(this.state.active) }
            ]}
          />
        )}
      </Card>
    );
  }

  private renderActionGroup = (activeTab: PlayerActionCategories) => {
    const trainingItems = [
      { item: <PushUps /> },
      { item: <Gym /> },
      { item: <Sparring /> }
    ];
    switch (activeTab) {
      case PlayerActionCategories.General:
        return <ListGroup items={[{ item: <Sleep /> }]} />;
      case PlayerActionCategories.Theft:
        return (
          <ListGroup
            items={[{ item: <StealTradeable tradeable={Tradeable.Stamp} /> }]}
          />
        );
      case PlayerActionCategories.Training:
        return <ListGroup items={trainingItems} />;
      case PlayerActionCategories.Work:
        return <ListGroup items={[{ item: <CleanToilets /> }]} />;
      case PlayerActionCategories.Violence:
        return (
          <ListGroup items={[{ item: <InitiateFight enemy={crackFiend} /> }]} />
        );
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
