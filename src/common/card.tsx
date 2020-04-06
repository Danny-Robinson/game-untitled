import React from "react";

interface OwnProps {
  title: string;
}

export type CardProp = OwnProps;

class Card extends React.PureComponent<CardProp> {
  public render() {
    return (
      <div className="card">
        <div className="card-header">{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
