import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";
import { clockReducerDefaultState } from "../redux-common/default-store-state";

export type ClockProps = ConnectedProps<typeof connector>;

class Clock extends React.PureComponent<ClockProps> {
  public render() {
    const {
      clock: { minutes, hours, days }
    } = this.props;

    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`
    };

    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`
    };

    return (
      <div className="clock">
        <h3>Time</h3>
        <div className="analog-clock">
          <div className="dial minutes" style={minutesStyle} />
          <div className="dial hours" style={hoursStyle} />
        </div>
        <div className={"digital-clock"}>
          Day {(days + 1).toString()}, {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}
        </div>
      </div>
    );
  }
}

export const mapState = (state: StoreState) => ({
  clock: state ? state.clock : clockReducerDefaultState
});

const connector = connect(mapState);

export default connector(Clock);
