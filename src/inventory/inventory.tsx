import Card from "../common/card";
import React from "react";
import ListGroup from "../common/list-group";
import { StoreState } from "../redux-common/store";
import { ConnectedProps, connect } from "react-redux";
import { inventoryReducerDefaultState } from "../redux-common/default-store-state";
import { convertTradeablesToText } from "./helpers";

export type InventoryProps = ConnectedProps<typeof connector>;

class Inventory extends React.PureComponent<InventoryProps> {
  public render() {
    const {
      inventory: { items, tradeables }
    } = this.props;
    return (
      <Card title="Inventory">
        <Card title="Items">
          <ListGroup
            items={Object.keys(items).map((item) => ({
              item: <div>{item}</div>
            }))}
          ></ListGroup>
        </Card>
        <Card
          title={`Tradeables: ${convertTradeablesToText(tradeables)}`}
        ></Card>
      </Card>
    );
  }
}

export const mapState = (state: StoreState) => ({
  inventory: state ? state.inventory : inventoryReducerDefaultState
});

const connector = connect(mapState);

export default connector(Inventory);
