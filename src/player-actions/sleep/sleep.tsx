import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { incrementHours } from "../../clock/actions";
import { incrementEnergy } from "../../resources/actions";
import { addMessage } from "../../message-feed/actions";

import Button from "../../common/button";

export type ResourcesProps = ConnectedProps<typeof connector>;

class Sleep extends React.PureComponent<ResourcesProps> {
  public render() {
    return (
      <Button primary onClick={this.sleep}>
        Sleep
      </Button>
    );
  }

  private sleep = () => {
    const hours = 8;
    const energy = 100;
    this.props.incrementHours(hours);
    this.props.incrementEnergy(energy);
    this.props.addMessage(
      `You slept for ${hours} hours and regained ${energy} energy`
    );
  };
}

const connector = connect(undefined, {
  incrementHours,
  incrementEnergy,
  addMessage
});

export default connector(Sleep);
