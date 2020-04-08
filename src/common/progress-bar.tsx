import React from "react";
import CSS from "csstype";

interface OwnProps {
  progress: number;
  colour?: string;
  showProgressValue?: boolean;
}

export type ProgressBarProps = OwnProps;

class ProgressBar extends React.PureComponent<ProgressBarProps> {
  public render() {
    const { progress, colour = "", showProgressValue } = this.props;

    const barWidth: CSS.Properties = {
      width: `${progress}%`,
    };

    return (
      <div className="progress">
        <div className={`progress-bar ${colour}`} style={barWidth}>
          {showProgressValue ? progress : ""}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
