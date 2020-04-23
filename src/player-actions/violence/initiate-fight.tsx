import Button from "../../common/button";
import React from "react";
import { Enemy } from "./types";

interface OwnProps {
  enemy: Enemy;
}

class InitiateFight extends React.PureComponent<OwnProps> {
  public render() {
    return <Button danger>Fight {this.props.enemy.name}</Button>;
  }
}

export default InitiateFight;
