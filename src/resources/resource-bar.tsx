import React from "react";
import CSS from "csstype";

interface OwnProps {
  resource: number;
}

export type ResourceBarProps = OwnProps;

class ResourceBar extends React.PureComponent<ResourceBarProps> {
  public render() {
    const { resource } = this.props;

    const barWidth: CSS.Properties = {
      width: `${resource}%`,
    };

    return (
      <div className="progress">
        <div
          className={`progress-bar ${this.getColour(resource)}`}
          style={barWidth}
        >
          {resource}
        </div>
      </div>
    );
  }

  private getColour = (resource: number) => {
    switch (true) {
      case resource <= 20:
        return "bg-danger";
      case resource <= 60:
        return "bg-warning";
      default:
        return "bg-success";
    }
  };
}

export default ResourceBar;
