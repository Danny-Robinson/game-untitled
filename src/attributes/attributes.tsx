import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";
import FitnessBar from "./attribute-bar";
import Card from "../common/card";
import ListGroup from "../common/list-group";

export type AttributesProps = ConnectedProps<typeof connector>;

class Attributes extends React.PureComponent<AttributesProps> {
  public render() {
    const {
      attributes: { fitnessProgress, fitness }
    } = this.props;
    return (
      <Card title="Attributes">
        <ListGroup
          items={[
            {
              item: <FitnessBar attribute={fitnessProgress} />,
              subtitle: `Fitness level: ${fitness}`
            }
          ]}
        ></ListGroup>
      </Card>
    );
  }
}

export const mapState = (state: StoreState) => ({
  attributes: state.attributes
});

const connector = connect(mapState);

export default connector(Attributes);
