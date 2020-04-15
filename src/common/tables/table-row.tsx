import React from "react";

interface OwnProps {
  rowHeader: string;
}

class TableRow extends React.PureComponent<OwnProps> {
  public render() {
    return (
      <tr>
        <th scope="row">{this.props.rowHeader}</th>
        {this.props.children}
      </tr>
    );
  }
}

export default TableRow;
