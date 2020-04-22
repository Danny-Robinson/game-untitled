import { Item } from "../inventory/types";
import React from "react";
import TableRow from "../common/tables/table-row";
import TableCell from "../common/tables/table-cell";
import Button from "../common/button";
import { connect, ConnectedProps } from "react-redux";
import { batchActions } from "redux-batched-actions";
import { addMessage } from "../message-feed/actions";

interface OwnProps {
  item: Item;
  quantity: number;
}

export type InventoryItemRowProps = OwnProps & ConnectedProps<typeof connector>;

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
    const { dispatch, item } = this.props;
    if (item.onUseEffect) {
      dispatch(batchActions(item.onUseEffect, "ITEM_USED"));
    } else {
      dispatch(addMessage("This item has no on use effect"));
    }
  };
}

const connector = connect();

export default connector(InventoryItemRow);
