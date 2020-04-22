import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { alterEnergy } from "../../resources/actions";
import { alterAttribute } from "../../attributes/actions";
import { StoreState } from "../../redux-common/store";
import Button from "../../common/button";
import { addMessage } from "../../message-feed/actions";
import { incrementHours } from "../../clock/actions";
import {
  attributesReducerDefaultState,
  resourceReducerDefaultState
} from "../../redux-common/default-store-state";
import { AttributeNames } from "../../attributes/types";

export type AttributesProps = ConnectedProps<typeof connector>;

class Gym extends React.PureComponent<AttributesProps> {
  public render() {
    const {
      attributes: { respect }
    } = this.props;

    return (
      <Button primary onClick={this.gym} disabled={respect < 5}>
        Gym
      </Button>
    );
  }

  private gym = () => {
    const {
      attributes: { fitness }
    } = this.props;

    const {
      resources: { energy }
    } = this.props;

    const fitnessIncrease = 100 / Math.pow(2, fitness - 1);
    switch (true) {
      case energy >= 65: {
        this.props.alterAttribute(
          fitnessIncrease,
          AttributeNames.fitnessProgress
        );
        this.props.alterEnergy(-60);
        this.props.incrementHours(3);
        break;
      }

      case energy < 65: {
        this.props.addMessage(
          "You do not have enough energy to use the gym right now"
        );
        break;
      }

      default:
        break;
    }
  };
}

export const mapState = (state: StoreState) => ({
  attributes: state ? state.attributes : attributesReducerDefaultState,
  resources: state ? state.resources : resourceReducerDefaultState
});

const connector = connect(mapState, {
  alterEnergy,
  addMessage,
  incrementHours,
  alterAttribute
});

export default connector(Gym);
