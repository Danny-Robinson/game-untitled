import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { decrementEnergy } from "../../resources/actions";
import { StoreState } from "../../redux-common/store";
import Button from "../../common/button";
import { addMessage } from "../../message-feed/actions";
import { incrementHours } from "../../clock/actions";
import { incrementCash } from "../../inventory/actions";
import {
  attributesReducerDefaultState,
  resourceReducerDefaultState
} from "../../redux-common/default-store-state";

export type CleanToiletsProps = ConnectedProps<typeof connector>;

class CleanToilets extends React.PureComponent<CleanToiletsProps> {
  public render() {
    return (
      <Button primary onClick={this.cleanToilets}>
        Clean Toilets
      </Button>
    );
  }

  private cleanToilets = () => {
    const {
      resources: { energy }
    } = this.props;

    switch (true) {
      case energy >= 10: {
        const hoursSpent = 5;
        const cashEarned = 5;
        this.props.decrementEnergy(30);
        this.props.incrementHours(hoursSpent);
        this.props.incrementCash(cashEarned);
        this.props.addMessage(
          `You clean the toilets for ${hoursSpent} hours and earn ${cashEarned} CC`
        );
        break;
      }

      case energy < 30: {
        this.props.addMessage(
          "You do not have enough energy to clean toilet right now"
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
  decrementEnergy,
  incrementCash,
  addMessage,
  incrementHours
});

export default connector(CleanToilets);
