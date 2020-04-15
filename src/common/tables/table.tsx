import React from "react";

interface OwnProps {
  headers: ReadonlyArray<string>;
}
class Table extends React.PureComponent<OwnProps> {
  public render() {
    return (
      <table className="table">
        <thead className="thead-light">
          <tr>
            {this.props.headers.map((header) => (
              <th scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}

export default Table;
