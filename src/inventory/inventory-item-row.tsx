import { Item } from "../inventory/types";
import React from "react";
import TableRow from "../common/tables/table-row";
import TableCell from "../common/tables/table-cell";
import Button from "../common/button";

interface OwnProps {
  item: Item;
  quantity: number;
}

export type InventoryItemRowProps = OwnProps;

class InventoryItemRow extends React.PureComponent<InventoryItemRowProps> {
  public render() {
    const { item, quantity } = this.props;
    return (
      <TableRow rowHeader={item.name}>
        <TableCell>{quantity}</TableCell>
        <TableCell>{`${item.weight} (${item.weight * quantity})`}</TableCell>
        <TableCell>
          <Button onClick={this.use}>Use</Button>
        </TableCell>
      </TableRow>
    );
  }

  private use = () => {
    console.log("use");
  };
}

export default InventoryItemRow;
