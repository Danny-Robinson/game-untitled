import React from "react";

interface OwnProps {
  title: string;
  className?: string;
}

export type CardProp = OwnProps;

class Card extends React.PureComponent<CardProp> {
  public render() {
    const { title, children, className = "" } = this.props;
    return (
      <div className={`card ${className}`}>
        <div className="card-header">{title}</div>
        {children}
      </div>
    );
  }
}

export default Card;
