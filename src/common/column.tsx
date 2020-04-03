import React from "react";

interface OwnProps {
  size?: number;
}

export type ColumnProps = OwnProps;

class Column extends React.PureComponent<ColumnProps> {
  public render() {
    const { size } = this.props;

    const classname = size ? `col-${size}` : "col";

    return <div className={classname}>{this.props.children}</div>;
  }
}

export default Column;
