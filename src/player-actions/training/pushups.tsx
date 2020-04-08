import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementFitness } from "../../attributes/actions";
import { decrementEnergy } from "../../resources/actions";
import { StoreState } from "../../redux-common/store";
import Button from "../../common/button";
import { addMessage } from "../../message-feed/actions";
import { incrementHours } from "../../clock/actions";

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
        this.props.incrementFitness(fitnessIncrease);
        this.props.decrementEnergy(10);
        this.props.incrementHours(1);
        break;
      }

      case energy < 10: {
        this.props.addMessage(
          "You do not have enough energy to exercise right now"
        );
        break;
      }

      default:
        break;
    }
  };
}

export const mapState = (state: StoreState) => ({
  attributes: state.attributes,
  resources: state.resources
});

const connector = connect(mapState, {
  incrementFitness,
  decrementEnergy,
  addMessage,
  incrementHours
});

export default connector(Pushups);
