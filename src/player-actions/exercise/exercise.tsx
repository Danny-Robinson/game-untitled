import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementFitness } from "../../attributes/actions";
import { decrementEnergy } from "../../resources/actions";
import { StoreState } from "../../redux-common/store";
import Button from "../../common/button";

export type AttributesProps = ConnectedProps<typeof connector>;

class Exercise extends React.PureComponent<AttributesProps> {
  public render() {
    return (
      <Button primary onClick={this.exercise}>
        Exercise
      </Button>
    );
  }

  private exercise = () => {
    const {
      attributes: { fitness }
    } = this.props;

    const {
      resources: { energy }
    } = this.props;

    const fitnessIncrease = 20 / Math.pow(2, fitness - 1);
    switch (true) {
      case energy > 9: {
        this.props.incrementFitness(fitnessIncrease);
        this.props.decrementEnergy(10);
      }

      case energy < 10: {
        console.log("Energy too low to exercise right now");
      }
    }
  };
}

export const mapState = (state: StoreState) => ({
  attributes: state.attributes,
  resources: state.resources
});

const connector = connect(mapState, { incrementFitness, decrementEnergy });

export default connector(Exercise);
