import React from "react";
import CSS from "csstype";

interface OwnProps {
  attribute: number;
}

export type AttributeBarProps = OwnProps;

class AttributeBar extends React.PureComponent<AttributeBarProps> {
  public render() {
    const { attribute } = this.props;

    const barWidth: CSS.Properties = {
      width: `${attribute}%`
    };

    return (
      <div className="progress">
        <div className={`progress-bar`} style={barWidth}>
          {attribute}
        </div>
      </div>
    );
  }
}

export default AttributeBar;
