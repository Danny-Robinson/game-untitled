import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";
import FitnessBar from "./attribute-bar";
import CombatBar from "./attribute-bar";
import RespectBar from "./attribute-bar";
import Card from "../common/card";
import ListGroup from "../common/list-group";
import { attributesReducerDefaultState } from "../redux-common/default-store-state";

export type AttributesProps = ConnectedProps<typeof connector>;

class Attributes extends React.PureComponent<AttributesProps> {
  public render() {
    const {
      attributes: {
        fitnessProgress,
        fitness,
        combat,
        combatProgress,
        notoriety,
        respect,
        respectProgress
      }
    } = this.props;

    return (
      <Card title="Attributes">
        <ListGroup
          items={[
            {
              item: <FitnessBar attribute={fitnessProgress} />,
              subtitle: `Fitness level: ${fitness}`
            },
            {
              item: <CombatBar attribute={combatProgress} />,
              subtitle: `Combat skill: ${combat}`
            },
            {
              item: <RespectBar attribute={respectProgress} />,
              subtitle: `Respect level: ${respect}`
            }
          ]}
        ></ListGroup>
      </Card>
    );
  }
}

export const mapState = (state: StoreState) => ({
  attributes: state ? state.attributes : attributesReducerDefaultState
});

const connector = connect(mapState);

export default connector(Attributes);
