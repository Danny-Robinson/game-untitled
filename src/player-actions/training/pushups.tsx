import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { alterEnergy } from "../../resources/actions";
import { alterAttribute } from "../../attributes/actions";
import { AttributeNames } from "../../attributes/types";
import { StoreState } from "../../redux-common/store";
import Button from "../../common/button";
import { addMessage } from "../../message-feed/actions";
import { incrementHours } from "../../clock/actions";
import {
  attributesReducerDefaultState,
  resourceReducerDefaultState
} from "../../redux-common/default-store-state";

export type AttributesProps = ConnectedProps<typeof connector>;

class Pushups extends React.PureComponent<AttributesProps> {
  public render() {
    return (
      <Button primary onClick={this.pushups}>
        Push Ups
      </Button>
    );
  }

  private pushups = () => {
    const {
      attributes: { fitness }
    } = this.props;

    const {
      resources: { energy }
    } = this.props;

    const fitnessIncrease = 20 / Math.pow(2, fitness - 1);
    switch (true) {
      case energy >= 10: {
        this.props.alterAttribute(
          fitnessIncrease,
          AttributeNames.fitnessProgress
        );
        this.props.alterEnergy(-10);
        this.props.incrementHours(1);
        break;
      }

      case energy < 10: {
        this.props.addMessage(
          "You do not have enough energy to do push ups right now"
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

export default connector(Pushups);
