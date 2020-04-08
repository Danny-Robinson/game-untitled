import React from "react";
import classnames from "classnames";

interface OwnProps {
  size?: number;
  smallSize?: number;
  className?: string;
}

export type ColumnProps = OwnProps;

class Column extends React.PureComponent<ColumnProps> {
  public render() {
    const { size, smallSize, className } = this.props;

    return (
      <div
        className={classnames(className, {
          [`col-md-${size}`]: size,
          [`col-sm-${smallSize}`]: smallSize,
          col: !(size || smallSize)
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Column;
