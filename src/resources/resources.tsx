import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";
import ResourceBar from "./resource-bar";
import Card from "../common/card";
import ListGroup from "../common/list-group";
import { resourceReducerDefaultState } from "../redux-common/default-store-state";

export interface OwnProps {
  player: boolean;
}

export type ResourcesProps = ConnectedProps<typeof connector> & OwnProps;

class Resources extends React.PureComponent<ResourcesProps> {
  public render() {
    const {
      resources: { energy, max_energy, health, max_health },
      player
    } = this.props;

    return (
      <Card title={`${!player ? "Enemy " : ""}Resources`}>
        <ListGroup
          items={[
            {
              item: <ResourceBar resource={energy} resource_max={max_energy} />,
              subtitle: "Energy"
            },
            {
              item: <ResourceBar resource={health} resource_max={max_health} />,
              subtitle: "Health"
            }
          ]}
        ></ListGroup>
      </Card>
    );
  }
}

export const mapState = (state: StoreState, props: OwnProps) => ({
  resources:
    state && props.player
      ? state.resources
      : state && !props.player
      ? state.enemyResources
      : resourceReducerDefaultState
});

const connector = connect(mapState);

export default connector(Resources);
