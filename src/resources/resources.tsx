import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";
import ResourceBar from "./resource-bar";
import Card from "../common/card";
import ListGroup from "../common/list-group";

export type ResourcesProps = ConnectedProps<typeof connector>;

class Resources extends React.PureComponent<ResourcesProps> {
  public render() {
    const {
      resources: { energy },
    } = this.props;
    return (
      <Card title="Resources" className="resources-card">
        <ListGroup
          items={[
            { item: <ResourceBar resource={energy} />, subtitle: "Energy" },
          ]}
        ></ListGroup>
      </Card>
    );
  }
}

export const mapState = (state: StoreState) => ({
  resources: state.resources,
});

const connector = connect(mapState);

export default connector(Resources);
