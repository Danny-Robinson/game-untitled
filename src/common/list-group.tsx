import React from "react";

interface OwnProps {
  items: ReadonlyArray<{ item: React.ReactNode; subtitle?: string }>;
  className?: string;
}

export type ListGroupProps = OwnProps;

class ListGroup extends React.PureComponent<ListGroupProps> {
  public render() {
    const { className, items } = this.props;
    return (
      <ul className={`list-group list-group-flush ${className}`}>
        {items.map((item, index) => (
          <li className="list-group-item" key={`list-item-${index}`}>
            <h5 className="card-title">{item.subtitle ? item.subtitle : ""}</h5>
            {item.item}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
