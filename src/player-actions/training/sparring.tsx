import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { alterAttribute } from "../../attributes/actions";
import { alterEnergy } from "../../resources/actions";
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

class Sparring extends React.PureComponent<AttributesProps> {
  public render() {
    const {
      attributes: { respect }
    } = this.props;

    return (
      <Button primary onClick={this.sparring} disabled={respect < 10}>
        Spar
      </Button>
    );
  }

  private sparring = () => {
    const {
      attributes: { fitness }
    } = this.props;

    const {
      resources: { energy }
    } = this.props;

    const fitnessIncrease = 100 / Math.pow(2, fitness - 1);
    const combatIncrease = 50;
    switch (true) {
      case energy >= 65: {
        this.props.alterAttribute(
          fitnessIncrease,
          AttributeNames.fitnessProgress
        );
        this.props.alterEnergy(-60);
        this.props.incrementHours(3);
        this.props.alterAttribute(
          combatIncrease,
          AttributeNames.combatProgress
        );
        break;
      }

      case energy < 65: {
        this.props.addMessage(
          "You do not have enough energy to spar right now"
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
  alterAttribute,
  alterEnergy,
  addMessage,
  incrementHours
});

export default connector(Sparring);
