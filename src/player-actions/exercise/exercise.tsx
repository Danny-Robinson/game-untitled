import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementFitness } from "../../attributes/actions";
import { StoreState } from "../../redux-common/store";
import Button from "../../common/button";
//import { mapState } from "../../clock/clock";

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

    const fitnessIncrease = 20 / Math.pow(2, fitness - 1);
    this.props.incrementFitness(fitnessIncrease);
  };
}

export const mapState = (state: StoreState) => ({
  attributes: state.attributes
});

const connector = connect(mapState, { incrementFitness });

export default connector(Exercise);
