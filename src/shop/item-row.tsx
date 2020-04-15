import { Item } from "../inventory/types";
import React from "react";
import TableRow from "../common/tables/table-row";
import TableCell from "../common/tables/table-cell";
import Button from "../common/button";

interface OwnProps {
  item: Item;
}

class ItemRow extends React.PureComponent<OwnProps> {
  public render() {
    const { item } = this.props;
    return (
      <TableRow rowHeader={item.name}>
        <TableCell>{item.buyPrice}</TableCell>
        <TableCell>{item.sellPrice}</TableCell>
        <TableCell>
          <Button onClick={this.buy}>Buy</Button>
        </TableCell>
        <TableCell>
          <Button onClick={this.sell}>Sell</Button>
        </TableCell>
      </TableRow>
    );
  }

  private buy = () => {
    console.log("buying");
  };

  private sell = () => {
    console.log("sell");
  };
}

export default ItemRow;
