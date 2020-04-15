import Table from "../common/tables/table";
import React from "react";
import { chocolateBar } from "../inventory/items";
import ItemRow from "./item-row";

class Commissary extends React.PureComponent {
  public render() {
    return (
      <Table headers={["Item", "Buy Price (CC)", "Sell Price (CC)", "", ""]}>
        <ItemRow item={chocolateBar} />
      </Table>
    );
  }
}

export default Commissary;
