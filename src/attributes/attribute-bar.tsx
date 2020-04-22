import React from "react";
import ProgressBar from "../common/progress-bar";

interface OwnProps {
  attribute: number;
}

export type AttributeBarProps = OwnProps;

class AttributeBar extends React.PureComponent<AttributeBarProps> {
  public render() {
    const { attribute } = this.props;

    return <ProgressBar progress_cap={100} progress={attribute} />;
  }
}

export default AttributeBar;
