import React from "react";

class Row extends React.PureComponent {
  public render() {
    return <div className="row">{this.props.children}</div>;
  }
}

export default Row;
