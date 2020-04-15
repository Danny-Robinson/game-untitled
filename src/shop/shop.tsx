import Card from "../common/card";
import React from "react";
import ListGroup from "../common/list-group";
import Commissary from "./commissary";

class Shop extends React.PureComponent {
  public render() {
    return (
      <Card title="Shop">
        <ListGroup items={[{ item: <Commissary /> }]} />
      </Card>
    );
  }
}

export default Shop;
