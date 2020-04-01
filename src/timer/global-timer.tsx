import React from "react";

class GlobalTimer extends React.PureComponent {
  public componentDidMount() {
    window.setInterval(this.tick, 1000);
  }

  state = {
    time: 0,
  };

  public tick = () => {
    this.setState({ time: this.state.time + 1 });
  };

  public render() {
    return <div>{this.state.time}</div>;
  }
}

export default GlobalTimer;
