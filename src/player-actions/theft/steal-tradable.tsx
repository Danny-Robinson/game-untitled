import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementMinutes } from "../../clock/actions";
import { alterEnergy } from "../../resources/actions";
import { addMessage } from "../../message-feed/actions";
import { incrementTradeables } from "../../inventory/actions";
import Button from "../../common/button";
import { AttributeNames } from "../../attributes/types";
import { Tradeable, tradeableValue } from "../../inventory/types";
import { StoreState } from "../../redux-common/store";
import {
  resourceReducerDefaultState,
  attributesReducerDefaultState
} from "../../redux-common/default-store-state";
import { alterAttribute } from "../../attributes/actions";

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
    const notoriety = 1;

    if (energy > 15) {
      this.props.alterAttribute(notoriety, AttributeNames.notoriety);
      this.props.incrementMinutes(minutes);
      this.props.alterEnergy(-energyCost);
      this.props.incrementTradeables(tradeableValue[tradeable]);
      this.props.addMessage(`You stole a ${tradeable}`);
    } else {
      this.props.addMessage(
        "You do not have enough energy to steal stamps right now"
      );
    }
  };
}

export const mapState = (state: StoreState) => ({
  resources: state ? state.resources : resourceReducerDefaultState,
  attributes: state ? state.attributes : attributesReducerDefaultState
});

const connector = connect(mapState, {
  incrementMinutes,
  alterEnergy,
  addMessage,
  alterAttribute,
  incrementTradeables
});

export default connector(StealTradeable);
