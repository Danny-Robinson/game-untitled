import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementMinutes } from "../clock/actions";
import { AppState as StoreState } from "../redux-common/store";

export type GlobalTimerProps = ConnectedProps<typeof connector>;

class GlobalTimer extends React.PureComponent<GlobalTimerProps> {
  public componentDidMount() {
    window.setInterval(this.tick, 1000);
  }

  public tick = () => {
    this.props.incrementMinutes(15);
  };

  public render() {
    return <div>{this.props.clock.minutes}</div>;
  }
}

export const mapState = (state: StoreState) => ({
  clock: state.clock,
});

const connector = connect(mapState, {
  incrementMinutes,
});

export default connector(GlobalTimer);
