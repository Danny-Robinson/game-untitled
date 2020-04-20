import Card from "../common/card";
import React from "react";
import ListGroup from "../common/list-group";
import { StoreState } from "../redux-common/store";
import { ConnectedProps, connect } from "react-redux";
import { inventoryReducerDefaultState } from "../redux-common/default-store-state";
import { convertTradeablesToText } from "./helpers";
import Table from "../common/tables/table";
import InventoryItemRow from "./inventory-item-row";
import { itemList, ItemNameList } from "./items";

export type InventoryProps = ConnectedProps<typeof connector>;

class Inventory extends React.PureComponent<InventoryProps> {
  public render() {
    const {
      inventory: { items, tradeables, cash }
    } = this.props;
    return (
      <Card title="Inventory">
        <Card>
          <Table headers={["Item", "Quantity", "Weight", ""]}>
            {Object.keys(items).map((item) => {
              if (items[item as ItemNameList]) {
                return (
                  <InventoryItemRow
                    item={itemList[item as ItemNameList]}
                    quantity={items[item as ItemNameList]}
                    key={`inv-item-row-${item}`}
                  />
                );
              } else return null;
            })}
          </Table>
        </Card>
        <Card title="Currency">
          <ListGroup
            items={[
              {
                item: (
                  <div>{`Tradeables: ${convertTradeablesToText(
                    tradeables
                  )}`}</div>
                )
              },
              { item: <div>Commissary Cash (CC): {cash}</div> }
            ]}
          />
        </Card>
      </Card>
    );
  }
}

export const mapState = (state: StoreState) => ({
  inventory: state ? state.inventory : inventoryReducerDefaultState
});

const connector = connect(mapState);

export default connector(Inventory);
