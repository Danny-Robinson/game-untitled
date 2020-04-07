import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";

export type AttributesProps = ConnectedProps<typeof connector>;

class Attributes extends React.PureComponent<AttributesProps> {
  public render() {
    const {
      attributes: { fitness }
    } = this.props;
    return null;
  }
}

export const mapState = (state: StoreState) => ({
  attributes: state.attributes
});

const connector = connect(mapState);

export default connector(Attributes);
