import React from "react";
import Button from "./button";

interface OwnProps {
  onClick: () => void;
}

interface StateProps {
  confirm: boolean;
}

export type ConfirmButtonProps = OwnProps;

class ConfirmButton extends React.PureComponent<
  ConfirmButtonProps,
  StateProps
> {
  constructor(props: ConfirmButtonProps) {
    super(props);
    this.state = { confirm: false };
  }

  public render() {
    if (this.state.confirm) {
      return (
        <div className="btn-group">
          <Button onClick={this.performAction}>Confirm</Button>
          <Button onClick={this.toggleConfirm}>Cancel</Button>
        </div>
      );
    } else {
      return (
        <Button onClick={this.toggleConfirm}>{this.props.children}</Button>
      );
    }
  }

  private performAction = () => {
    this.props.onClick();
    this.toggleConfirm();
  };

  private toggleConfirm = () => this.setState({ confirm: !this.state.confirm });
}

export default ConfirmButton;
