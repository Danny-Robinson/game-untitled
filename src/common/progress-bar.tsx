import React from "react";
import CSS from "csstype";

interface OwnProps {
  progress: number;
  progress_cap: number;
  colour?: string;
  showProgressValue?: boolean;
}

export type ProgressBarProps = OwnProps;

class ProgressBar extends React.PureComponent<ProgressBarProps> {
  public render() {
    const {
      progress,
      progress_cap,
      colour = "",
      showProgressValue
    } = this.props;

    const barWidth: CSS.Properties = {
      width: `${(progress / progress_cap) * 100}%`
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
