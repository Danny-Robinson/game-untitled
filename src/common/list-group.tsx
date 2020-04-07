import React from "react";

interface OwnProps {
  items: ReadonlyArray<{ item: React.ReactNode; subtitle?: string }>;
}

export type ListGroupProps = OwnProps;

class ListGroup extends React.PureComponent<ListGroupProps> {
  public render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map((item) => (
          <li className="list-group-item">
            <h5 className="card-title">{item.subtitle ? item.subtitle : ""}</h5>
            {item.item}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
