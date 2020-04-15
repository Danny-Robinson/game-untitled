import React from "react";

class TableCell extends React.PureComponent {
  public render() {
    return <td>{this.props.children}</td>;
  }
}

export default TableCell;
