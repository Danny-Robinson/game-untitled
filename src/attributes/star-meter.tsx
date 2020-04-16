import React from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { times } from "lodash";

interface OwnProps {
  value: number;
}

export type StarMeterProps = OwnProps;

class StarMeter extends React.PureComponent<StarMeterProps> {
  public render() {
    return <div>{this.renderStars()}</div>;
  }

  private renderStars = () => {
    const { value } = this.props;
    const fullStars = Math.floor(value / 2);
    const halfStars = value % 2;
    const emptyStars = 5 - (fullStars + halfStars);

    const stars: React.ReactNodeArray = [];
    times(fullStars, () => {
      stars.push(<StarFill color="Gold" size={20} />);
    });
    times(halfStars, () => {
      stars.push(<StarHalf color="Gold" size={20} />);
    });
    times(emptyStars, () => {
      stars.push(<Star color="Gold" size={20} />);
    });
    return stars;
  };
}

export default StarMeter;
