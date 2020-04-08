import React from "react";
import ProgressBar from "../common/progress-bar";

interface OwnProps {
  resource: number;
}

export type ResourceBarProps = OwnProps;

class ResourceBar extends React.PureComponent<ResourceBarProps> {
  public render() {
    const { resource } = this.props;

    return (
      <ProgressBar
        progress={resource}
        colour={this.getColour(resource)}
        showProgressValue
      />
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
