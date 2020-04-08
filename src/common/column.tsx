import React from "react";
import classnames from "classnames";

interface OwnProps {
  size?: number;
  smallSize?: number;
}

export type ColumnProps = OwnProps;

class Column extends React.PureComponent<ColumnProps> {
  public render() {
    const { size, smallSize } = this.props;

    return (
      <div
        className={classnames({
          [`col-md-${size}`]: size,
          [`col-sm-${smallSize}`]: smallSize,
          col: !(size || smallSize),
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Column;
