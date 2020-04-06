import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";

export type ClockProps = ConnectedProps<typeof connector>;

class Clock extends React.PureComponent<ClockProps> {
  public render() {
    const digitalMinutes = this.props.clock.minutes;
    const digitalHours = this.props.clock.hours;
    const digitalDays = this.props.clock.days;

    const minutesStyle = {
      transform: `rotate(${digitalMinutes * 6}deg)`
    };

    const hoursStyle = {
      transform: `rotate(${digitalHours * 30}deg)`
    };

    const dayNumber = digitalDays + 1;

    return (
      <div className={"clock"}>
        <h3>CLOCK</h3>
        <div className={"analog-clock"}>
          <div className={"dial minutes"} style={minutesStyle} />
          <div className={"dial hours"} style={hoursStyle} />
        </div>
        <div className={"digital-clock"}>
          Day {dayNumber.toString()}, {digitalHours.toString().padStart(2, "0")}
          :{digitalMinutes.toString().padStart(2, "0")}
        </div>
      </div>
    );
  }
}

export const mapState = (state: StoreState) => ({
  clock: state.clock
});

const connector = connect(mapState);

export default connector(Clock);
