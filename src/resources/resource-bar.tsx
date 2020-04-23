import React from "react";
import ProgressBar from "../common/progress-bar";

interface OwnProps {
  resource: number;
  resource_max: number;
}

export type ResourceBarProps = OwnProps;

class ResourceBar extends React.PureComponent<ResourceBarProps> {
  public render() {
    const { resource, resource_max } = this.props;

    return (
      <ProgressBar
        progress={resource}
        progress_cap={resource_max}
        colour={this.getColour(resource, resource_max)}
        showProgressValue
      />
    );
  }

  private getColour = (resource: number, resource_max: number) => {
    const resource_percentage = (resource / resource_max) * 100;
    switch (true) {
      case resource_percentage <= 20:
        return "bg-danger";
      case resource_percentage <= 60:
        return "bg-warning";
      default:
        return "bg-success";
    }
  };
}

export default ResourceBar;
