import { Item } from "../inventory/types";
import React from "react";
import TableRow from "../common/tables/table-row";
import TableCell from "../common/tables/table-cell";
import Button from "../common/button";
import { StoreState } from "../redux-common/store";
import { connect, ConnectedProps } from "react-redux";
import { addItem, removeItem, alterCash } from "../inventory/actions";
import { inventoryReducerDefaultState } from "../redux-common/default-store-state";
import { addMessage } from "../message-feed/actions";

interface OwnProps {
  item: Item;
}

export type ItemRowProps = OwnProps & ConnectedProps<typeof connector>;

class ItemRow extends React.PureComponent<ItemRowProps> {
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
    const { item, inventory, addItem, alterCash, addMessage } = this.props;

    if (inventory.cash - item.buyPrice >= 0) {
      addItem(item);
      alterCash(item.buyPrice * -1);
      addMessage(`You bought a ${item.name} for ${item.buyPrice} CC`);
    } else {
      addMessage(`You're too broke for that`);
    }
  };

  private sell = () => {
    const {
      item,
      inventory: { items },
      alterCash,
      addMessage,
      removeItem
    } = this.props;

    if (items[item.name] > 0) {
      removeItem(item.name);
      alterCash(item.sellPrice);
      addMessage(`You sold a ${item.name} for ${item.sellPrice} CC`);
    } else {
      addMessage(`You don't have any of those`);
    }
  };
}

export const mapState = (state: StoreState) => ({
  inventory: state ? state.inventory : inventoryReducerDefaultState
});

const connector = connect(mapState, {
  addItem,
  alterCash,
  addMessage,
  removeItem
});

export default connector(ItemRow);
