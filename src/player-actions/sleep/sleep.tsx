import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementHours } from "../../clock/actions";
import { incrementEnergy } from "../../resources/actions";
import Button from "../../common/button";

export type AttributesProps = ConnectedProps<typeof connector>;

class Sleep extends React.PureComponent<AttributesProps> {
  public render() {
    return (
      <Button primary onClick={this.sleep}>
        Sleep
      </Button>
    );
  }

  private sleep = () => {
    this.props.incrementHours(8);
    this.props.incrementEnergy(100);
  };
}

const connector = connect(undefined, { incrementHours, incrementEnergy });

export default connector(Sleep);
