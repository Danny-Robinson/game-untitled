import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementMinutes } from "../clock/actions";
import { decrementEnergy } from "../resources/actions";

export type GlobalTimerProps = ConnectedProps<typeof connector>;

class GlobalTimer extends React.PureComponent<GlobalTimerProps> {
  public componentDidMount() {
    window.setInterval(this.tick, 1000);
  }

  public tick = () => {
    this.props.incrementMinutes(15);
    this.props.decrementEnergy(1);
  };

  public render() {
    return null;
  }
}

const connector = connect(undefined, {
  incrementMinutes,
  decrementEnergy
});

export default connector(GlobalTimer);
