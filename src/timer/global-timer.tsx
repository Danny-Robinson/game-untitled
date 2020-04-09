import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementMinutes } from "../clock/actions";
import { decrementEnergy } from "../resources/actions";
import { StoreState } from "../redux-common/store";

export type GlobalTimerProps = ConnectedProps<typeof connector>;

class GlobalTimer extends React.PureComponent<GlobalTimerProps> {
  public componentDidMount() {
    window.setInterval(this.tick, 1000);
  }

  public tick = () => {
    if (!this.props.paused) {
      this.props.incrementMinutes(15);
      this.props.decrementEnergy(1);
    }
  };

  public render() {
    return null;
  }
}

export const mapState = (state: StoreState) => ({
  paused: state?.paused
});

const connector = connect(mapState, {
  incrementMinutes,
  decrementEnergy
});

export default connector(GlobalTimer);
