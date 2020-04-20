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
            {this.props.headers.map((header, index) => (
              <th scope="col" key={`table-header-${index}-${header}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}

export default Table;
