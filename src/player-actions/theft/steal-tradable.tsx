import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementMinutes } from "../../clock/actions";
import { decrementEnergy } from "../../resources/actions";
import { addMessage } from "../../message-feed/actions";
import { incrementTradeables } from "../../inventory/actions";

import Button from "../../common/button";
import { Tradeable, tradeableValue } from "../../inventory/types";
import { StoreState } from "../../redux-common/store";
import { resourceReducerDefaultState } from "../../redux-common/default-store-state";

export interface OwnProps {
  tradeable: Tradeable;
}

export type StealTradeableProps = ConnectedProps<typeof connector> & OwnProps;

class StealTradeable extends React.PureComponent<StealTradeableProps> {
  public render() {
    return (
      <Button primary onClick={this.steal}>
        Steal {this.props.tradeable}
      </Button>
    );
  }

  private steal = () => {
    const {
      tradeable,
      resources: { energy }
    } = this.props;
    const minutes = 15;
    const energyCost = 10;

    if (energy > 15) {
      this.props.incrementMinutes(minutes);
      this.props.decrementEnergy(energyCost);
      this.props.addTradeable(tradeableValue[tradeable]);
      this.props.addMessage(`You stole a ${tradeable}`);
    } else {
      this.props.addMessage(
        "You do not have enough energy to steal stamps right now"
      );
    }
  };
}

export const mapState = (state: StoreState) => ({
  resources: state ? state.resources : resourceReducerDefaultState
});

const connector = connect(mapState, {
  incrementMinutes,
  decrementEnergy,
  addMessage,
  addTradeable: incrementTradeables
});

export default connector(StealTradeable);
