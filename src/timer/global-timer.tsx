import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementMinutes } from "../clock/actions";

export type GlobalTimerProps = ConnectedProps<typeof connector>;

class GlobalTimer extends React.PureComponent<GlobalTimerProps> {
  public componentDidMount() {
    window.setInterval(this.tick, 1000);
  }

  public tick = () => {
    this.props.incrementMinutes(15);
  };

  public render() {
    return null;
  }
}
const connector = connect(undefined, {
  incrementMinutes
});

export default connector(GlobalTimer);
