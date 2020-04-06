import React from "react";
import CSS from "csstype";

interface OwnProps {
  energy: number;
}

export type EnergyBarProps = OwnProps;

class EnergyBar extends React.PureComponent<EnergyBarProps> {
  public render() {
    const { energy } = this.props;

    const barWidth: CSS.Properties = {
      width: `${energy}%`,
    };

    return (
      <div className="progress">
        <div
          className={`progress-bar ${this.getColour(energy)}`}
          style={barWidth}
        >
          {energy}
        </div>
      </div>
    );
  }

  private getColour = (energy: number) => {
    switch (true) {
      case energy <= 20:
        return "bg-danger";
      case energy <= 60:
        return "bg-warning";
      default:
        return "bg-success";
    }
  };
}

export default EnergyBar;
