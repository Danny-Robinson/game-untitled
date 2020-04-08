import React from "react";

interface OwnProps {
  className?: string;
}

export type RowProps = OwnProps;

class Row extends React.PureComponent<RowProps> {
  public render() {
    return (
      <div className={`row ${this.props.className}`}>{this.props.children}</div>
    );
  }
}

export default Row;
