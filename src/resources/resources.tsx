import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";
import EnergyBar from "./resource-bar";

export type ResourcesProps = ConnectedProps<typeof connector>;

class Resources extends React.PureComponent<ResourcesProps> {
  public render() {
    const { resources } = this.props;
    return (
      <div>
        <h3>Energy</h3>
        <EnergyBar resource={resources.energy} />
      </div>
    );
  }
}

export const mapState = (state: StoreState) => ({
  resources: state.resources,
});

const connector = connect(mapState);

export default connector(Resources);
